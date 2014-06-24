(ns tuit-ffos.core
  (:require [ring.util.response :refer [file-response redirect]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.session :refer [wrap-session]]
            [compojure.core :refer [defroutes GET PUT POST]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [oauth.client :as oauth]
            [twitter.oauth :refer [make-oauth-creds]]
            [twitter.api.restful :refer [statuses-update]]
            [clojurewerkz.propertied.properties :as p]
            [clojure.java.io :as io]))


(def ^:dynamic config (p/properties->map (p/load-from (io/resource "config.properties"))))

(def ^:dynamic *app-consumer-key* (config "app-consumer-key"))
(def ^:dynamic *app-consumer-secret* (config "app-consumer-secret"))

(def consumer (oauth/make-consumer *app-consumer-key*
                                   *app-consumer-secret*
                                   "https://api.twitter.com/oauth/request_token"
                                   "https://api.twitter.com/oauth/access_token"
                                   "https://api.twitter.com/oauth/authorize"
                                   :hmac-sha1))

(defn post-tuit [])

(defn index []
  (file-response "public/html/index.html" {:root "resources"}))

(defn sign-in []
  (let [request-token (oauth/request-token consumer "http://localhost:8080/twitter/oauth/callback/")
        approval-uri (oauth/user-approval-uri consumer (:oauth_token request-token))]
    (println  request-token)
    (assoc (redirect approval-uri) :session request-token)))

(defn verify-user-auth [token secret verifier]
  (let [request-token {:oauth_token token :oauth_token_secret secret}
        access-token (oauth/access-token consumer request-token verifier)
        creds (make-oauth-creds *app-consumer-key* 
                               *app-consumer-secret*
                               (:oauth_token access-token)
                               (:oauth_token_secret access-token))]
    (assoc {:body "tweet sent!"} :session access-token)))

(defroutes routes
  (GET "/" [] (index))
  (GET "/session" {session :session} (str session))
  (GET "/request" request (str request))
  (GET "/test2" {session :session} (assoc {:body "test"} :session {:foo "this is a test"}))
  (POST "/twitter/sign-in/" [] (sign-in))
  (GET "/twitter/oauth/callback/" {params :params session :session} 
       (verify-user-auth (params "oauth_token") (:oauth_token_secret session) (params "oauth_verifier")))
  (GET "/1twitter/oauth/callback/" {params :params} (str params))
  (route/files "/" {:root "resources/public"}))

(def app 
  (-> routes
      wrap-params
      wrap-session))

(defn -main [& args]
  (run-jetty #'app {:port 8080 :join? false}))

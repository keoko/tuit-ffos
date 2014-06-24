(ns tuit-ffos.core
  (:require-macros
   [cljs.core.match.macros :refer (match)] ; Optional, useful
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(println "starting app ...")


(defn tuit-app [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:form {:action "/twitter/sign-in/" :method "POST"} 
             [:button {:type "submit" 
                       :name "sign-in"
                       :style {
                               :width "75px"
                               :height "20px"
                               :border 0
                               :background  "transparent url('https://dev.twitter.com/sites/default/files/images_documentation/sign-in-with-twitter-gray.png') no-repeat"
                               :background-size "100%"}}]]))))

(om/root tuit-app {}
         {:target (. js/document (getElementById "app"))})

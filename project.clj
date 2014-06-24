(defproject om-async "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript  "0.0-2234"]
                 [org.clojure/core.match "0.2.1"]
                 [ring/ring "1.3.0"]
                 [http-kit "2.1.18"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.4"]
                 [compojure "1.1.8"]
                 [sablono "0.2.17"]
                 [twitter-api "0.7.5"]
                 [com.taoensso/sente "0.14.1"]
                 [clojurewerkz/propertied "1.2.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.7"]]

  :ring {:handler tuit-ffos.core/app}

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :main tuit-ffos.core

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clj" "src/cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})

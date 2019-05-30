(ns tgol.views
  (:require
   [re-frame.core :as re-frame]
   [breaking-point.core :as bp]
   [tgol.subs :as subs]
   ))

(def x 20)
(def y 20)


;; home
(defn cell [id]
  [:button {:class "cell"
            :class "cell-alive"
            :id id}])

(defn tgol-board []
  [:div {:class "flex-grid"}
      (map (fn [_] [:div {:class "col"}
                    (map #(cell %) (range x))]) (range y))])


;; home + cells
(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div 
     [:div
      [:a {:href "#/about"
           :class "about-link"}
       "go to About Page"]]
     [tgol-board]
    ]))


;; about

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]
   [:div
    [:a {:href "#/"}
     "go to Home Page"]]])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))

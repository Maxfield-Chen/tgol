(ns tgol.views
  (:require
   [re-frame.core :as re-frame]
   [breaking-point.core :as bp]
   [tgol.subs :as subs]
   [tgol.db :as db]))

;; TGOL items

(defn- idx->2d [idx]
  (let [y (quot idx db/x)
        x (rem idx db/x)]
    [x y]))

(defn cell [id]
  (let [board (re-frame/subscribe [::subs/board])
        [x y] (idx->2d id)
        cell-alive? (get-in @board [y x])]
    ^{:key id} [:button {:id id
                :class (if cell-alive? "cell cell-alive" "cell cell-dead")
                :onClick #(re-frame/dispatch [:toggle-cell x y])}]))

(defn tgol-stop []
  [:div {:class "tgol-stop"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:stop-tgol])}
   "Stop"]])

(defn tgol-start []
  [:div {:class "tgol-start"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:start-tgol])}
    "Start"]])

(defn tgol-step []
  [:div {:class "tgol-step"}
   [:button {:class "tgol-button"
            :onClick #(re-frame/dispatch [:tgol-step])} "Step"]])

(defn tgol-board []
  [:div {:class "tgol-board"}
   [:div {:class "tgol-controls"}
     [tgol-step]
     [tgol-start]
     [tgol-stop]
   ]
   [:div {:class "flex-grid"}
      (doall (map (fn [col] ^{:key col} [:div {:class "col"}
                    (doall (map #(cell (+ % (* col db/x))) (range db/x)))]) (range db/y)))]])

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

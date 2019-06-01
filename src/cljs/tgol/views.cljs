(ns tgol.views
  (:require
   [re-frame.core :as re-frame]
   [breaking-point.core :as bp]
   [tgol.subs :as subs]
   [tgol.game :as game]
   [tgol.db :as db]))

;; TGOL items

(defn cell [id]
  (let [board (re-frame/subscribe [::subs/board])
        [x y] (game/idx->2d id)
        cell-alive? (get-in @board [y x])]
    ^{:key id} [:button {:id id
                :class (if cell-alive? "cell cell-alive" "cell cell-dead")
                :onClick #(re-frame/dispatch [:toggle-cell x y])}]))

(defn tgol-autosave []
  (let [autosave (re-frame/subscribe [::subs/auto-board])]
  [:div {:class "tgol-autosave"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:tgol-save @autosave])}
   "Save Initial State"]]))

(defn tgol-save []
  (let [board (re-frame/subscribe [::subs/board])]
  [:div {:class "tgol-save"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:tgol-save @board])}
   "Save State"]]))

(defn tgol-randomize []
  [:div {:class "tgol-random"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:tgol-random])}
   "Randomize!"]])

(defn tgol-stop []
  [:div {:class "tgol-stop"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:stop-tgol])}
   "Stop"]])

(defn tgol-start []
  (let [board (re-frame/subscribe [::subs/board])]
  [:div {:class "tgol-start"}
   [:button {:class "tgol-button"
             :onClick #(re-frame/dispatch [:start-tgol @board])}
    "Start"]]))

(defn tgol-step []
  [:div {:class "tgol-step"}
   [:button {:class "tgol-button"
            :onClick #(re-frame/dispatch [:tgol-step])} "Step"]])

(defn tgol-worlds []
  (let [worlds (re-frame/subscribe [::subs/worlds])]
  [:div {:class "tgol-worlds"}
    (doall (map-indexed (fn [idx w]
                          [:button {:class "tgol-button"
                                    :id idx
                                    :onClick #(re-frame/dispatch [:tgol-restore idx])}
                           (str "Restore World " idx)]) @worlds))]))

(defn tgol-board []
  [:div {:class "tgol-board"}
   [:div {:class "tgol-controls"}
     [tgol-step]
     [tgol-start]
     [tgol-stop]
     [tgol-save]
     [tgol-autosave]
     [tgol-randomize]
     [tgol-worlds]
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

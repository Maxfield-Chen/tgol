(ns tgol.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:body {:background-color "#f9fafc;"}]
  [:.tgol-board {:width "50%"
                 :margin "0 auto"}]
  [:.cell {:width "1rem"
           :height "1rem"
           :margin ".5rem"}]
  [:.cell-dead {:background-color "white"}]
  [:.cell-alive {:background-color "black"}]
  [:.about-link {:display "none"}])

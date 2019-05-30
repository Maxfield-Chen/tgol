(ns tgol.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:.cell {:width "1rem"
           :height "1rem"
           :margin ".5rem"}]
  [:.cell-dead {:background-color "white"}]
  [:.cell-alive {:background-color "black"}]
  [:body {:background-color "#f9fafc;"}]
  [:.about-link {:display "none"}])
(ns tgol.db)


;; Define board size
(def x 20)
(def y 20)


(def default-db
  {:name "re-frame"
   :board (vec (repeat y (vec (repeat x false))))})

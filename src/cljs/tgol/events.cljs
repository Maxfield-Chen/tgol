(ns tgol.events
  (:require
   [re-frame.core :as re-frame]
   [tgol.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  :toggle-cell
  (fn-traced [db [_ x y]]
    (assoc db :board
      (update-in (:board db) [y x]

(re-frame/reg-event-db
  :kill-cell
  (fn-traced [db [_ x y]]
    (assoc db :board
      (update-in (:board db) [y x]
        (fn [_] false)))))


(re-frame/reg-event-db
  :birth-cell
  (fn-traced [db [_ x y]]
    (assoc db :board
      (update-in (:board db) [y x]
        (fn [_] true)))))

(ns tgol.events
  (:require
   [re-frame.core :as re-frame]
   [tgol.db :as db]
   [tgol.game :as game]
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
                 #(not %)))))

(re-frame/reg-event-db
  :tgol-save
  (fn-traced [db [_ new-world]]
    (assoc db :worlds (conj (:worlds db) new-world))))


(re-frame/reg-event-db
  :tgol-restore
  (fn-traced [db [_ id]]
    (assoc db :board (get (:worlds db) id))))

(re-frame/reg-event-db
  :tgol-step
  (fn-traced [db _]
    (assoc db :board 
           (game/step (:board db)))))

(re-frame/reg-event-db
  :tgol-random
  (fn-traced [db _]
    (assoc db :board 
           (game/randomize (:board db)))))

(re-frame/reg-event-fx
  :start-tgol
  (fn [{:keys [db]} [_ new-world]]
             {:interval {:action :start
                         :id     :tgol
                         :frequency 100
                         :event [:tgol-step]}
              :db (assoc db :auto-board
                         new-world)}))
              
(re-frame/reg-event-fx
  :stop-tgol
  (fn [{:keys [db]} _]
             {:interval {:action :stop
                         :id     :tgol}
              :db db}))

(re-frame.core/reg-fx        ;; the re-frame API for registering effect handlers
  :interval                  ;; the effect id
  (let [live-intervals (atom {})]                 ;; storage for live intervals
    (fn [{:keys [action id frequency event]}]     ;; the handler
      (if (= action :start) 
        (swap! live-intervals assoc id (js/setInterval #(re-frame/dispatch event) frequency)) 
        (do (js/clearInterval (get @live-intervals id)) 
            (swap! live-intervals dissoc id))))))

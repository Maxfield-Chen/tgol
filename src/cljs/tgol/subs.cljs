(ns tgol.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::auto-board
 (fn [db]
   (:auto-board db)))

(re-frame/reg-sub
 ::worlds
 (fn [db]
   (:worlds db)))

(re-frame/reg-sub
 ::board
 (fn [db]
   (:board db)))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

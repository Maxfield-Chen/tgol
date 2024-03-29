(ns tgol.game
  (:require
    [tgol.db :as db]))

;(defn- neighbors [size x y]
  ;(let [deltas (for [x (range -1 2)
                     ;y (range -1 2)
                     ;:when (or (not= y 0) (not= x 0))]
                 ;[x y])]
    ;(filter (fn [new-xy]
              ;(every? #(< -1 % size) new-xy))
            ;(map #(mapv + [x y] %) deltas))))

(defn- neighbors [size x y]
  (let [deltas (for [x (range -1 2)
                     y (range -1 2)
                     :when (or (not= y 0) (not= x 0))]
                 [x y])]
    (map (fn [[x y]]
              [(if (> x db/x) (dec (mod x db/x)) (mod x db/x))
               (if (> y db/y) (dec (mod y db/y)) (mod y db/y))])
            (map #(mapv + [x y] %) deltas))))


(defn idx->2d [idx]
  (let [y (quot idx db/x)
        x (rem idx db/x)]
    [x y]))

(defn- rand-bool [] (< (rand-int 20) 3))

(defn randomize [board]
  (mapv (fn [col] (mapv (fn [cell]
                        (rand-bool)) col)) board))

(defn step [board]
  (vec (map-indexed (fn [y col] 
         (vec (map-indexed (fn [x cell]
                        (let [dead? (not (get-in board [y x]))
                              alive? (not dead?)
                              n (neighbors (count col) x y)
                              nc (count (remove false? 
                                                (map (fn [[x y]] 
                                                       (get-in board [y x])) n)))]
                          (cond  
                          ; Birth if 3 neighbors
                          (and dead? (= nc 3)) true
                          ; Fewer than 2 neighbors is death
                          (and alive? (< nc 2)) false
                          ; 2 or 3 neighbors is continued life
                          (and alive? (<= 2 nc 3)) true
                          ; Any additional neighbors is death
                          :else false)))
                      col))) board)))


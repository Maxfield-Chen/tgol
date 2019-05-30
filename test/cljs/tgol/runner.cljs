(ns tgol.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [tgol.core-test]))

(doo-tests 'tgol.core-test)

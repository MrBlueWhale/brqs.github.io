<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home.js'
import board from './modules/board.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    board
  },
  state: {
    version: "V3.0.0-beta.3"
  },
  mutations: {
  },
  actions: {
  }
})

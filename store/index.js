import Vue from 'vue-native-core'
import Vuex from 'vuex'
import info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info
  }
})
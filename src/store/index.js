import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { user } from "./modules/user.js";

Vue.use(Vuex)
const vuexp = new VuexPersistence({
modules: ['user']
})
export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  plugins: [vuexp.plugin]

})

import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


var store=new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store

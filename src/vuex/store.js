import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义状态
  state: {
    isLogin: false,
    upser: null,
    author: 'hmhao',
    repository: 'https://github.com/hmhao'
  },
  getters,
  mutations,
  actions
})

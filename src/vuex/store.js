import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let upser = JSON.parse(sessionStorage.getItem('upser'))

export default new Vuex.Store({
  // 定义状态
  state: {
    isLogin: !!upser || false,
    upser: upser || null,
    upserFollow: null,
    upserFan: null,
    author: 'hmhao',
    repository: 'https://github.com/hmhao'
  },
  getters,
  mutations,
  actions
})

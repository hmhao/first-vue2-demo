import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义状态
  state: {
    isLogin: false,
    author: 'hmhao',
    repository: 'https://github.com/hmhao'
  },
  mutations: {
    login (state, value) {
      state.isLogin = value
    }
  }
})

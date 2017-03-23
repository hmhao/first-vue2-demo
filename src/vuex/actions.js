// 组件内部用来分发 mutations 事件
import Vue from 'vue'
// 它们接收 store 作为第一个参数，这里是es6的析构
const actions = {
  // 登录获取用户信息
  login: ({ state, commit }, upserid) => {
    if (!state.isLogin) {
      Vue.http
          .get('/static/data/upser.json', {params: {'upserId': upserid}})
          .then(response => {
            // get body data
            if (response.body) {
              commit('LOGIN', response.body)
            }
          }, response => {
            // error callback
          })
    }
  },
  logout: ({ commit }) => {
    commit('LOGOUT')
  }
}

export default actions

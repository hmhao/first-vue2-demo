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
  },
  // 获取用户关注信息
  upserFollow: ({ state, commit }, upserid) => {
    if (state.isLogin) {
      Vue.http
          .get('/static/data/follow.json', {params: {'upserId': upserid}})
          .then(response => {
            // get body data
            let result = response.body
            if (result.status) {
              commit('UPSER_FOLLOW', result.data)
            }
          }, response => {
            // error callback
          })
    }
  },
  // 获取用户粉丝信息
  upserFan: ({ state, commit }, upserid) => {
    if (state.isLogin) {
      Vue.http
          .get('/static/data/fan.json', {params: {'upserId': upserid}})
          .then(response => {
            // get body data
            let result = response.body
            if (result.status) {
              commit('UPSER_FAN', result.data)
            }
          }, response => {
            // error callback
          })
    }
  }
}

export default actions

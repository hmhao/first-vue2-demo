// 状态事件的回调函数
const mutations = {
  LOGIN (state, upser) {
    state.isLogin = true
    state.upser = upser
  },
  LOGOUT (state) {
    state.isLogin = false
    state.upser = null
  }
}

export default mutations

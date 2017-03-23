// 状态事件的回调函数
const mutations = {
  LOGIN (state, upser) {
    state.isLogin = true
    state.upser = upser
    sessionStorage.setItem('upser', JSON.stringify(upser))
  },
  LOGOUT (state) {
    state.isLogin = false
    state.upser = null
    sessionStorage.setItem('upser', null)
  },
  UPSER_FOLLOW (state, follow) {
    state.upserFollow = follow
  },
  UPSER_FAN (state, fan) {
    state.upserFan = fan
  }
}

export default mutations

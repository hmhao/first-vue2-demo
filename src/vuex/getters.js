// 状态事件的回调函数
const getters = {
  isLogin: state => state.isLogin,
  upser: state => state.upser || {},
  upserHeaderInfo: (state) => {
    let upser = state.upser
    let info = []
    if (upser.follow) {
      info.push(Object.assign({key: 'follow'}, upser.follow))
    }
    if (upser.fan) {
      info.push(Object.assign({key: 'fan'}, upser.fan))
    }
    if (upser.production) {
      info.push(Object.assign({key: 'production'}, upser.production))
    }
    return {
      avatar: upser.avatar,
      name: upser.name,
      info
    }
  },
  upserDetailInfo: (state) => {
    let upser = state.upser || {}
    return {
      follow: upser.follow,
      fan: upser.fan,
      uid: upser.uid,
      regtime: upser.regtime,
      birthday: upser.birthday || '未填写',
      geo: upser.geo || '未填写',
      tags: upser.tags || []
    }
  }
}

export default getters

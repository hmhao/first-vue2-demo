<template>
  <div class="media">
    <div class="media-left">
      <router-link :to="basepath">
        <img class="media-object img-rounded avatar" :src="avatar" :alt="name">
      </router-link>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{name}}</h4>
      <div>
          <router-link v-for="item in data" :to="basepath + item.path" :key="item.path"
            class="pull-left text-center">
            <span>{{item.num}}</span>
            <br>
            <span>{{item.title}}</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/avatar.png'

let basepath = '/home/'

export default {
  name: 'upser',
  data () {
    return {
      avatar: avatar,
      name: 'UP主',
      basepath: basepath,
      data: [{
        title: '关注',
        num: 112,
        path: 'follow'
      }, {
        title: '粉丝',
        num: 12335223,
        path: 'fan'
      }, {
        title: '作品',
        num: 88,
        path: 'production'
      }]
    }
  }
}
</script>

<style>
.avatar {
  width: 48px;
  height: 48px;
}
.media-body {
  text-align: left;
}
</style>

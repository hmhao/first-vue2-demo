<template>
  <div class="media">
    <div class="media-left">
      <a href="javscript:void(0)">
        <img class="media-object img-rounded avatar" :src="avatar" :alt="name">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{name}}</h4>
      <div>
          <a v-for="item in data" href="javscript:void(0)" class="pull-left text-center">
            <span>{{item.num}}</span>
            <br>
            <span>{{item.title}}</span>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/avatar.png'

export default {
  name: 'upser',
  data () {
    return {
      avatar: avatar,
      name: 'UP主',
      data: [{
        title: '关注',
        num: 112
      }, {
        title: '粉丝',
        num: 12335223
      }, {
        title: '作品',
        num: 88
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

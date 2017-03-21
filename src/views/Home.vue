<template>
  <div>
    <ul class="nav nav-pills nav-stacked">
      <router-link v-for="nav in navs" :to="basepath + nav.path" tag="li" active-class="active" :key="nav.path">
        <a>{{nav.title}}</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
let basepath = '/home/'

export default {
  name: 'user',
  data () {
    return {
      basepath: basepath,
      navs: [{
        title: '简介',
        path: 'detail'
      }, {
        title: '关注',
        path: 'follow'
      }, {
        title: '粉丝',
        path: 'fan'
      }, {
        title: '作品',
        path: 'production'
      }]
    }
  }
}
</script>

<style scoped>
.nav {
  width: 160px;
}
</style>

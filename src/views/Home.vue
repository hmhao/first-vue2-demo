<template>
  <div class="row">
    <div class="col-md-2">
      <ul class="nav nav-pills nav-stacked">
        <router-link v-for="nav in navs" :to="basepath + nav.path" :key="nav.path" 
            tag="li" active-class="active" >
          <a>{{nav.title}}</a>
        </router-link>
      </ul>
    </div>
    <div class="col-md-10">
      <router-view></router-view>
    </div>
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

<style>

</style>

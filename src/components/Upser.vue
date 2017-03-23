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
          <router-link v-for="item in info" :to="basepath + item.key" :key="item.key"
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
let basepath = '/home/'

export default {
  name: 'upser',
  data () {
    return {
      basepath
    }
  },
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    info: {
      type: Array,
      default: []
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

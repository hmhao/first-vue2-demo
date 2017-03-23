<template>
  <header class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/" :title="title">
          <img v-show="logo" class="navbar-brand-img" :src="logo" />
          <span v-show="!logo" class="navbar-brand-text" v-text="title"></span>
        </a>
        <upser v-if="isLogin" v-bind="upserHeaderInfo"></upser>
        <div class="navbar-brand-action pull-right">
          <a class="btn btn-lg btn-default" href="javascript:void(0)" v-text="loginText" @click="emitLogin"></a>
          <a class="btn btn-lg btn-success" href="javascript:void(0)">上传视频</a>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Upser from '@/components/Upser.vue'

export default {
  name: 'app-header',
  computed: {
    ...mapGetters(['isLogin', 'upserHeaderInfo']),
    loginText () {
      return this.isLogin ? '退出' : '登录'
    }
  },
  props: {
    title: {
      default: 'Vue-first-project'
    },
    logo: String
  },
  watch: {
    isLogin (value) {
      if (value) {
        this.loginText = '退出'
        this.$router.push({path: '/home'})
      } else {
        this.loginText = '登录'
      }
    }
  },
  methods: {
    emitLogin () {
      if (this.isLogin) {
        this.$store.dispatch('logout')
        this.$root.$emit('logouted')
        this.$router.push({path: '/'})
      } else {
        this.$root.$emit('login')
      }
    }
  },
  components: {
    Upser
  }
}
</script>

<style>
.navbar-header {
  height: 90px;
}
.navbar-brand-img, .navbar-brand-text {
  max-width: 100%;
  height: 64px;
  line-height:64px;
}
.navbar-brand-action {
  position: absolute;
  top: 25px;
  right: 15px;
}
</style>

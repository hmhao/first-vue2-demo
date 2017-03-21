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
        <upser v-if="isLogin"></upser>
        <div class="navbar-brand-action pull-right">
          <a class="btn btn-lg btn-default" href="javscript:void(0)" v-text="loginText" @click="emitLogin"></a>
          <a class="btn btn-lg btn-success" href="javscript:void(0)">上传视频</a>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </header>
</template>

<script>
import Upser from '@/components/Upser.vue'

export default {
  name: 'app-header',
  data () {
    return {
      loginText: '登录'
    }
  },
  computed: {
    isLogin: {
      get () {
        return this.$store.state.isLogin
      },
      set (value) {
        this.$store.commit('login', value)
      }
    }
  },
  props: {
    title: {
      default: 'Vue-first-project'
    },
    logo: String
  },
  methods: {
    emitLogin () {
      if (this.isLogin) {
        this.isLogin = false
        this.loginText = '登录'
        this.$root.$emit('logouted')
        this.$router.push({path: '/'})
      } else {
        this.$root.$emit('login')
      }
    }
  },
  created () {
    this.$root.$on('logined', () => {
      this.isLogin = true
      this.loginText = '退出'
    })
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

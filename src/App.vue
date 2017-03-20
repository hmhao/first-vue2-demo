<template>
  <div id="app">
    <app-header :logo="logo" :title="title"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <login :visible="showLogin"></login>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import AppHeader from './views/layout/AppHeader.vue'
import AppFooter from './views/layout/AppFooter.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'app',
  data () {
    return {
      logo: logo,
      title: 'TestDemo',
      showLogin: false
    }
  },
  created () {
    this.$root.$on('login', () => {
      this.showLogin = true
    })
    this.$root.$on('logouted', () => {
      this.showLogin = false
    })
    this.$root.$on('hidden::login', () => {
      this.showLogin = false
    })
  },
  components: {
    AppHeader,
    AppFooter,
    Login
  }
}
</script>

<style src="bootstrap"></style>
<style src="font-awesome"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

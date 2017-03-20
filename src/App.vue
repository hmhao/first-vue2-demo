<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './views/layout/AppHeader.vue'
import AppFooter from './views/layout/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
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

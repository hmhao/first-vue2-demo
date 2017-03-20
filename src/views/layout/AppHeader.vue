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
        <a class="navbar-brand" href="javscript:void(0)" :title="title">
          <img class="header-img pull-left" :src="logo" />
        </a>
      </div>
    </div><!-- /.container-fluid -->
  </header>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'app-header',
  props: {
    title: {
      default: 'Vue-first-project'
    },
    logo: {
      default: logo
    }
  }
}
</script>

<style>
.header-img {
    max-width: 100%;
    height: 24px;
}
</style>

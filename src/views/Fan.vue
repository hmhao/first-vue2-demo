<template>
  <div>
    <div class="media" v-for="upser in fan">
      <div class="media-left">
        <router-link to="javascript:void(0)" target="_blank">
          <img class="media-object img-rounded avatar" :src="upser.avatar" :alt="upser.name">
        </router-link>
      </div>
      <div class="media-body">
        <h4 class="media-heading">
          <router-link to="javascript:void(0)" target="_blank">
            {{upser.name}}
          </router-link>
        </h4>
        <div class="content">
          <div class="desc" :title="upser.desc">{{upser.desc || '这家伙没有填简介啊~~~'}}</div>
        </div>
        <div class="tag-list">
          <a v-for="tag in upser.tags" class="label label-primary">
            <b class="glyphicon glyphicon-tag"></b>{{tag}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'follow',
  computed: mapGetters({
    fan: 'upserFanInfo'
  }),
  mounted () {
    this.$store.dispatch('upserFan')
  }
}
</script>

<style>

</style>

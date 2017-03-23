<template>
  <table class="table table-bordered text-left">
    <thead>
      <tr class="text-center">
        <td>
          <h3>
            <a class="item" href="/home/follow">
              <span class="name">{{upser.follow.title}}</span>
              <span class="quantity">{{upser.follow.num | quantity}}</span>
            </a>
          </h3>
        </td>
        <td>
          <h3>
            <a class="item" href="/home/fan">
              <span class="name">{{upser.fan.title}}</span>
              <span class="quantity">{{upser.fan.num | quantity}}</span>
            </a>
          </h3>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="item uid">
            <b class="glyphicon glyphicon-user"></b>
            <span class="text">{{upser.uid}}</span>
          </div>
        </td>
        <td>
          <div class="item regtime">
            <b class="glyphicon glyphicon-dashboard"></b>
            <span class="text">注册于 {{upser.regtime}}</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="item birthday">
            <b class="glyphicon glyphicon-calendar"></b>
            <span class="text">{{upser.birthday}}</span>
          </div>
        </td>
        <td>
          <div class="item geo">
            <b class="glyphicon glyphicon-map-marker"></b>
            <span class="text">{{upser.geo}}</span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="list tag-list">
            <span v-for="tag in upser.tags" class="label label-primary"><b class="glyphicon glyphicon-tag"></b>{{tag}}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'detail',
  computed: mapGetters({
    upser: 'upserDetailInfo'
  }),
  filters: {
    quantity: function (value) {
      let v = parseInt(value)
      if (v > 10000) {
        v = Math.round((v / 10000) * 100) / 100 + '万'
      }
      return v
    }
  }
}
</script>

<style scoped>
table {
  width: 400px;
}
</style>

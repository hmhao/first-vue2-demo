<template>
  <modal title="登陆框" id="loginModal" v-bind="{onClose: onClose}" ref="modal">
    <form class="text-left">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" class="form-control" id="username" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码" v-model="password">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> 自动登录
        </label>
      </div>
    </form>
    <div slot="modal-footer" class="text-center">
      <button type="submit" class="btn btn-default" @click="onSubmit">登录</button>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'login',
  data () {
    return {
      username: '3422',
      password: ''
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible (val, oldVal) {
      if (val) {
        this.$refs.modal.show()
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.modal.hide()
      this.$store.dispatch('login', this.username)
    },
    onClose () {
      this.$root.$emit('hidden::login')
    }
  },
  created () {
    this.$root.$on('logined', () => {
      this.onClose()
    })
  },
  components: {
    Modal
  }
}
</script>

<style>

</style>

<template>
  <transition-group
    enter-class="fade"
    enter-active-class="fadein"
    leave-class=""
    leave-active-class="fade"
  >
    <div class="modal" tabindex="-1" :id="id" v-show="visible" key="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">
                <slot name="modal-title">{{title}}</slot>
              </h4>
            </slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer">
              <button type="button" class="btn btn-default" @click="$close">{{closeTitle}}</button>
              <button type="button" class="btn btn-primary" @click="$save">{{saveTitle}}</button>
            </slot>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal-backdrop in" v-if="visible" key="modal-backdrop"></div>
  </transition-group>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      visible: false
    }
  },
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    closeTitle: {
      type: String,
      default: 'Close'
    },
    onClose: {
      type: Function,
      default: null
    },
    saveTitle: {
      type: String,
      default: 'OK'
    },
    onSave: {
      type: Function,
      default: null
    }
  },
  methods: {
    show () {
      if (this.visible) {
        return
      }
      this.visible = true
      this.$root.$emit('shown::modal', this.id)
    },
    hide () {
      if (!this.visible) {
        return
      }
      this.visible = false
      this.$root.$emit('hidden::modal', this.id)
    },
    $save () {
      if (this.onSave) {
        if (this.onSave() === false) {
          // Cancel event
          return
        }
      }
      this.hide()
    },
    $close () {
      if (this.onClose) {
        this.onClose()
      }
      this.hide()
    }
  },
  created () {
    this.$root.$on('show::modal', id => {
      if (id === this.id) {
        this.show()
      }
    })
    this.$root.$on('hide::modal', id => {
      if (id === this.id) {
        this.hide()
      }
    })
  }
}
</script>

<style scoped>
  /* Make modal display as block instead of inline style, and because Vue's v-show deletes inline "display" style*/
  .modal {
    display:block;
  }
  .fadein {
    transition: opacity .5s
  }
</style>

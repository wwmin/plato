<template>
  <div :class="['c-cell', class]" @click="_click(model.click)">
    <c-icon class="c-cell-icon"
      :class="model.icon"></c-icon>
    <c-label class="c-cell-label">{{model.label}}</c-label>
    <c-value class="c-cell-value"
      :value="model.value"
      :extra="model.extra"></c-value>
  </div>
</template>

<script>
import CIcon from './c-icon'
import CLabel from './c-label'
import CValue from './c-value'
export default {
  props: {
    class: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    _click (callback) {
      if (typeof callback === 'function') {
        callback()
      }
      // if (this.model.type === 'link') {
      //   const e = document.createEvent('MouseEvents')
      //   // dispatch a non-bubble click event
      //   e.initEvent('click', false, true)
      //   this.$el.querySelector('.c-link-a').dispatchEvent(e)
      // }
    }
  },

  components: {
    CIcon,
    CLabel,
    CValue
  }
}
</script>

<style src="styles/components/cell"></style>

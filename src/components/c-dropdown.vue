<template>
  <div :class="['c-dropdown', class]">
    <select
      class="c-dropdown-select"
      :field="field"
      v-model="value"
      v-bind="_attrs">
      <option v-for="option in _options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import mField from './m-field'
export default {
  mixins: [mField],

  computed: {
    _options () {
      return this.extra.options || []
    }
  }
}
</script>

<style src="styles/components/dropdown"></style>

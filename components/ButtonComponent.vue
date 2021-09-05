<template>
  <button :style="style" @click="$emit('click')">
    <slot>Buy</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    styles: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  computed: {
    style () {
      return this.styles;
    }
  }
};
</script>

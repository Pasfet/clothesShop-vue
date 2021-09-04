<template>
  <button :style="style">
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
      default: () => ({
        color: '#000',
        fontSize: 14,
        backgroundColor: '#fff'
      })
    }
  },
  computed: {
    style () {
      return this.styles;
    }
  }
};
</script>

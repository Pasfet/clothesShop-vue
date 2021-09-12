<template>
  <button @click="$emit('click')">
    <slot>Buy</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent'
};
</script>

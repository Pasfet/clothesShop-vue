<template>
  <article class="flex justify-between items-center p-3 rounded-lg transition duration-500 hover:bg-gray-100">
    <div class="w-24 h-24 rounded-full overflow-hidden">
      <img :src="require(`~/assets/products/${goods.img[0]}.jpg`)" :alt="goods.title" class="w-inherit h-inherit block object-cover" />
    </div>
    <div class="text-lg">
      {{ goods.title }}
    </div>
    <div class="text-base text-primary">
      {{ goods.price }}$
    </div>
  </article>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    goods: {
      type: Object,
      required: true
    }
  }
};
</script>

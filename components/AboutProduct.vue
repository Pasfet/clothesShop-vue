<template>
  <section class="text-center specification">
    <div class="max-w-5xl mx-auto py-10 px-5 bg-white xl:border-1 xl:-mt-6 xl:z-20 xl:relative specification-wrap">
      <div class="font-light specification-about">
        <span class="uppercase text-primary text-sm specification__collection">
          {{ product.category }}
        </span>
        <div class="w-16 h-1 bg-primary my-3 mx-auto specification__collection-border"></div>
        <h3 class="uppercase font-light text-lg text-gray-500 mb-7 specification__title">
          {{ product.title }}
        </h3>
        <p class="text-sm text-gray-500 max-w-310 mx-auto mb-7 md:max-w-550 specification__desc">
          {{ product.description }}
        </p>
        <span class="text-primary text-2xl specification__price">
          ${{ product.price }}
        </span>
        <div class="w-44 h-1 bg-gray-100 mt-7 mx-auto mb-10 md:w-3/4 specification-about__border"></div>
      </div>
      <div class="flex align-center justify-center sorting specification-sorting">
        <select-component :options="product.colors" :default="product.colors[0]" class="mr-2" />
        <select-component :options="product.size" :default="product.size[0]" />
      </div>
      <button-component
        class="py-2 px-5 my-7 uppercase bg-transparent text-primary border-1 border-primary transition duration-500 hover:bg-primary hover:text-white"
        @click="addProduct(product)"
      >
        add to cart
      </button-component>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addProduct (product) {
      this.$emit('addToCart', product);
    }
  }
};
</script>

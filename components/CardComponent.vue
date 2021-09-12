<template>
  <div class="grid gap-4 grid-cols-1 justify-items-center md:grid-cols-2 2xl:gap-7 2xl:grid-cols-offer">
    <article v-for="product in products" :key="product.id" class="bg-featured-card max-w-360 transition duration-500 hover:shadow-lg transform hover:scale-95">
      <div class="w-360 h-420 relative transition group-hover duration-500">
        <img :src="require(`~/assets/products/${product.img}.jpg`)" :alt="product.title" width="360" height="420" class="block w-inherit h-inherit object-cover" />
        <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center opacity-0 bg-gray-700 group hover:opacity-80 transition duration-500 ease-in-out">
          <button-component
            class="py-2 px-4 bg-transparent border-1 border-white text-white flex items-center text-xs transition duration-500  transform hover:scale-95"
            @click="addProduct(product)"
          >
            <cart-icon class="w-25 h-25 mr-2" />
            Add to card
          </button-component>
        </div>
      </div>
      <div class="max-w-310 pt-6 pr-7 pb-5 pl-4">
        <NuxtLink to="#" class="no-underline inline-block mb-3">
          <h4 class="text-black text-sm uppercase">
            {{ product.title }}
          </h4>
        </NuxtLink>
        <p class="font-light text-sm text-featured-card-desc mb-5">
          {{ product.description }}
        </p>
        <span class="text-primary text-base">
          ${{ product.price }}
        </span>
      </div>
    </article>
  </div>
</template>

<script>
import CartIcon from '@/assets/cards/cart.svg?inline';

export default {
  name: 'CardComponent',
  components: { CartIcon },
  props: {
    products: {
      type: Array,
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

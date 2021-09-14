<template>
  <header class="h-header bg-gray-900">
    <div class="max-w-5xl mx-auto flex items-center justify-between py-4 px-8">
      <div class="flex items-center">
        <NuxtLink to="/" data-testid="home">
          <img src="~/assets/header/logo.png" alt="logo" class="w-11 mr-5 transition duration-150 ease-in-out transform hover:scale-95" />
        </NuxtLink>
        <search-component />
      </div>
      <div class="relative transition duration-150 ease-in-out transform hover:scale-95">
        <NuxtLink to="/cart" data-testid="cart">
          <img src="~/assets/svg/cart.svg" alt="cart" />
        </NuxtLink>
        <span class="block absolute -top-4 -right-4 text-white bg-primary py-1 px-3 rounded-full">
          {{ countCarts }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    countCarts () {
      return this.$store.getters.getCountCarts;
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchProducts');
    await this.$store.dispatch('fetchCarts');
  }
};
</script>

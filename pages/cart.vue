<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <header-component />
    <breadcrumb-component :path="path" />
    <main>
      <div class="max-w-5xl mx-auto cart__wrap grid grid-cols-1 gap-7 bg-white pt-10 px-2 pb-20 lg:grid-cols-3">
        <spinner-component v-if="loading" />
        <div v-if="isEmpty" class="mx-auto text-2xl">
          EMPTY
        </div>
        <div v-else class="grid gap-7 lg:col-start-1 lg:col-end-3">
          <template v-for="product in getUserCarts">
            <cart-card :key="product.id" :product="product" />
          </template>
          <div class="text-center md:mr-11">
            <button-component class="mr-2 text-xs text-gray-500 py-2 px-4 border-1 border-gray-500 cursor-pointer bg-transparent transition duration-500 hover:bg-black hover:text-white ease-out md:text-sm md:uppercase" @click="clearCarts">
              Clear shopping cart
            </button-component>
            <nuxt-link to="/catalog" class="mr-0 text-xs text-gray-500 py-2 px-4 border-1 border-gray-500 cursor-pointer bg-transparent transition duration-500 hover:bg-black hover:text-white ease-out md:text-sm md:uppercase">
              Continue shopping
            </nuxt-link>
          </div>
        </div>
        <form action="#" class="cart__form flex flex-col md:flex-row lg:flex-col">
          <div class="cart__form__address flex flex-col mb-12 md:flex-grow md:mr-3 lg:flex-grow-0">
            <h2 class="cart__form__heading uppercase text-black font-light text-base mb-5">
              shipping adress
            </h2>
            <input class="cart__form__input border-1 border-gray-600 text-base pt-3 px-4 pb-4 mb-5" type="text" placeholder="Bangladesh" />
            <input class="cart__form__input border-1 border-gray-600 text-base pt-3 px-4 pb-4 mb-5" type="text" placeholder="State" />
            <input class="cart__form__input border-1 border-gray-600 text-base pt-3 px-4 pb-4 mb-5" type="number" placeholder="Postcode / Zip" />
            <button-component class="cart__form__btn text-sm self-start border-1 border-gray-600 py-2 px-5 cursor-pointer bg-transparent transition duration-500 ease-in-out hover:bg-black hover:text-white">
              Get a quote
            </button-component>
          </div>
          <div class="cart__check bg-check-color py-10 px-11 text-right uppercase text-black font-bold md:self-start">
            <div class="cart__check__total text-sm mb-3">
              <span class="cart__check__total-text">sub total</span>
              <span class="cart__check__total-price ml-6">${{ getFullTotalPrice }}</span>
            </div>
            <div class="cart__check__grand font-bold text-black text-base mb-5">
              <span class="cart__check__grand-text">grand total</span>
              <span class="cart__check__grand-price text-primary ml-6">${{ getFullTotalPrice }}</span>
            </div>
            <div class="cart__check__hr min-w-275 h-1 bg-gray-300 mb-5"></div>
            <button-component class="cart__check__btn uppercase bg-primary text-white py-4 px-10 border-1 border-transparent cursor-pointer transition duration-500 hover:text-primary hover:border-primary hover:bg-white">
              proceed to checkout
            </button-component>
          </div>
        </form>
      </div>
    </main>
    <feedback-block />
    <footer-component />
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  asyncData ({ store, route }) {
    const path = route.path;
    store.dispatch('fetchCarts');
    return { path };
  },
  data () {
    return {
      isEmpty: false,
      loading: true
    };
  },
  head: {
    title: 'Cart'
  },
  computed: {
    getUserCarts () {
      return this.$store.getters.getUserCarts;
    },
    getFullTotalPrice () {
      return this.$store.getters.getTotalPrice;
    }
  },
  watch: {
    getUserCarts () {
      this.loading = true;
      if (this.getUserCarts.length !== 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
      this.loading = false;
    }
  },
  methods: {
    clearCarts () {
      this.$store.dispatch('clearCarts');
    }
  }
};
</script>

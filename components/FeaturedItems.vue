<template>
  <section>
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h3 class="text-xl capitalize">
          Fetured Items
        </h3>
        <p class="text-featured-text text-sm">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <card-component
        :products="currentProductsList"
        @addToCart="addProduct"
      />
      <div class="text-center mt-14 mb-28">
        <NuxtLink to="/catalog" class="inline-block no-underline text-base text-primary py-4 px-10 border-1 border-primary transition duration-500 hover:text-white hover:bg-primary">
          Browse All Product
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedItems',
  data () {
    return {
      perPage: 6,
      currentPage: 1
    };
  },
  computed: {
    getProductsList () {
      return this.$store.getters.getProducts;
    },
    startIndex () {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex () {
      return this.currentPage * this.perPage;
    },
    currentProductsList () {
      if (this.getProductsList) {
        return this.getProductsList.slice(this.startIndex, this.endIndex);
      }
      return [];
    },
    getCart () {
      return this.$store.getters.getUserCarts;
    }
  },
  methods: {
    addProduct (product) { // REFACTOR
      const productId = +product.id;
      const find = this.getCart.find(item => item.id === productId);
      if (find) {
        this.$store.dispatch('addOneProduct', product.id);
      } else {
        const newProduct = Object.assign({ quantity: 1 }, product);
        this.$store.dispatch('addProduct', newProduct);
      }
    }
  }
};
</script>

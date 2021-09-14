<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <header-component />
    <breadcrumb-component :path="path" />
    <spinner-component v-if="loading" />
    <main v-show="!loading" class="max-w-5xl mx-auto py-3">
      <card-component
        :products="currentProductsList"
        @addToCart="addProduct"
      />
      <pagination-component
        class="mx-auto"
        :total-length="getProductsList.length"
        :current-page="currentPage"
        :per-page="perPage"
        @pagechanged="onPageChange"
      />
    </main>
    <advantages-block />
    <feedback-block />
    <footer-component />
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  asyncData ({ route, store }) {
    const path = route.path;
    store.dispatch('fetchProducts');
    return { path };
  },
  data () {
    return {
      perPage: 6,
      currentPage: 1,
      loading: true
    };
  },
  head: {
    title: 'Catalog'
  },
  computed: {
    getProductsList () {
      return this.$store.getters.getProducts;
    },
    getCart () {
      return this.$store.getters.getUserCarts;
    },
    currentProductsList () {
      if (this.getProductsList) {
        return this.getProductsList.slice(this.startIndex, this.endIndex);
      }
      return [];
    },
    startIndex () {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex () {
      return this.currentPage * this.perPage;
    }
  },
  mounted () {
    this.loading = false;
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
    },
    onPageChange (page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>

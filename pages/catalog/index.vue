<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <header-component />
    <breadcrumb-component :path="path" />
    <spinner-component v-if="loading" />
    <main v-show="!loading" class="max-w-5xl mx-auto py-3">
      <client-only>
        <vue-range
          v-model="range"
          :lazy="true"
          :min="rangeInput[0]"
          :max="rangeInput[1]"
          :formatter="(rangeInput) => `$${rangeInput}`"
          :tooltip-merge="false"
          :enable-cross="false"
          :process-style="processStyle"
          :tooltip-style="tooltipStyle"
          class="my-8"
        />
        <button-component class="py-2 px-5 my-5 border-1 border-primary transition duration-500 hover hover:bg-primary hover:text-white" @click="sortByPrice">
          Sort by price
        </button-component>
      </client-only>
      <card-component
        :products="currentProductsList"
        @addToCart="addProduct"
      />
      <pagination-component
        class="mx-auto"
        :total-length="getFilterProducts.length"
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
import ClientOnly from 'vue-client-only';
export default {
  name: 'CatalogPage',
  components: {
    ClientOnly
  },
  async asyncData ({ route, store }) {
    const path = route.path;
    await store.dispatch('fetchProducts');
    const range = await store.getters.getMinMaxPrice;
    return { path, range };
  },
  data () {
    return {
      perPage: 6,
      currentPage: 1,
      loading: true,
      sortPrice: false,
      rangeInput: []
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
    getFilterProducts () {
      if (this.getProductsList) {
        return this.getProductsList.filter(goods => goods.price >= this.range[0] && goods.price <= this.range[1]);
      }
      return [];
    },
    currentProductsList () {
      if (this.getFilterProducts) {
        return this.getFilterProducts.slice(this.startIndex, this.endIndex);
      }
      return [];
    },
    startIndex () {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex () {
      return this.currentPage * this.perPage;
    },
    processStyle () {
      return {
        backgroundColor: '#f16d7f'
      };
    },
    tooltipStyle () {
      return {
        backgroundColor: '#f16d7f',
        borderColor: '#f16d7f'
      };
    }
  },
  watch: {
    range () {
      this.currentPage = 1;
    }
  },
  mounted () {
    this.rangeInput = this.range;
    this.loading = false;
  },
  methods: {
    addProduct (product) {
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
    },
    sortByPrice () {
      this.sortPrice = !this.sortPrice;
      this.$store.commit('sortByPrice', this.sortPrice);
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

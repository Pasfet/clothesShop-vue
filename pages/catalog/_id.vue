<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <header-component />
    <breadcrumb-component :path="product.title" />
    <spinner-component v-if="loading" />
    <main v-show="!loading">
      <swiper ref="mySwiper" :options="swiperOptions" class="md:h-768 bg-breadcrumbs-bg xl:pb-6 xl:overflow-x-hidden">
        <swiper-slide v-for="(img, idx) in product.img" :key="idx">
          <img :src="require(`~/assets/products/${img}.jpg`)" :alt="product" class="h-inherit mx-auto" />
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
      <about-product :product="product" class="mb-7" @addToCart="addProduct" />
    </main>
    <feedback-block />
    <footer-component />
  </div>
</template>
<script>
export default {
  async asyncData ({ params, redirect, $axios, store }) {
    store.dispatch('fetchCarts');
    const goods = await $axios.$get('/api/products');
    const goodsList = await JSON.parse(goods);
    const product = goodsList.products.find(el => el.id === +params.id);
    if (product) {
      return { product };
    } else {
      redirect('/catalog');
    }
  },
  data () {
    return {
      loading: true,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper;
    },
    getCart () {
      return this.$store.getters.getUserCarts;
    }
  },
  mounted () {
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
    }
  }
};
</script>

<style lang='scss'>
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 0;
  }
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 0;
}

.swiper-button-next, .swiper-button-prev {
    background: rgba(42, 42, 42, 0.15);
    border-radius: 5px;
    width: 47px;
    height: 47px;
    &:hover {
      background: rgba(42, 42, 42, 0.9);
    }
}
.swiper-button-next::after, .swiper-button-prev::after {
  font-size: 24px;
  color: #f16d7f;
}

</style>

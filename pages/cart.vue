<template>
  <div>
    <header-component />
    <breadcrumb-component class="cart__breadcrumb">
      shopping cart
    </breadcrumb-component>
    <main>
      <div class="max-w-5xl mx-auto cart__wrap grid grid-cols-1 gap-7 bg-white pt-10 px-2 pb-20 lg:grid-cols-3">
        <div class="cart__inner grid gap-7 lg:col-start-1 lg:col-end-3">
          <article v-for="product in getUserCarts" :key="product.id" class="cart__card flex relative shadow-md">
            <div class="cart__card__img w-140 h-full md:w-260">
              <img :src="require(`~/assets/products/${product.img}.jpg`)" :alt="product.title" class="block w-inherit h-inherit object-cover" />
            </div>
            <div class="cart__card__content flex flex-col justify-around items-start pt-4 pr-7 pb-2 pl-2 md:justify-between md:pt-4 md:px-7 md:mb-5">
              <button-component class="cart__card__content__icon border-none bg-transparent absolute top-2 right-2 cursor-pointer" @click="removeProduct(product)">
                <close-icon class="md:w-20px md:h-20px" />
              </button-component>
              <div class="cart__card__head mb-5 uppercase md:mb-10">
                <h3 class="cart__card__title text-sm text-black md:text-2xl">
                  {{ product.title }}
                </h3>
                <span class="cart__card__category">
                  {{ product.category_name }}
                </span>
              </div>
              <ul class="cart__card__list w-160 md:mb-auto md:w-260">
                <li class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3">
                  price:
                  <span class="cart__card__item__price text-primary">
                    {{ product.price }}$
                  </span>
                </li>
                <li class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3">
                  color:
                  <select-component :options="product.colors" :default="product.colors[0]" @input="select" />
                </li>
                <li class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3">
                  size:
                  <select-component :options="product.size" :default="product.size[0]" @input="select" />
                </li>
                <li class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-0 md:text-xl md:mb-3">
                  quantity:
                  <div class="cart__card__item__actions flex items-center">
                    <button-component
                      class="cursor-pointer bg-black border-1 border-black w-25 h-25 text-25 line-height-25 text-white transition duration-500 hover:bg-white hover:text-black md:w-32px md:h-32px"
                      @click="minusProduct(product)"
                    >
                      -
                    </button-component>
                    <span class="cart__card__category mx-2">
                      {{ product.quantity }}
                    </span>
                    <button-component
                      class="cursor-pointer bg-black border-1 border-black w-25 h-25 text-25 line-height-25 text-white transition duration-500 hover:bg-white hover:text-black md:w-32px md:h-32px"
                      @click="addProduct(product.id)"
                    >
                      +
                    </button-component>
                  </div>
                </li>
              </ul>
            </div>
          </article>
          <div class="cart__actions text-center md:mr-11">
            <button-component class="mr-2 text-xs text-gray-500 py-2 px-4 border-1 border-gray-500 cursor-pointer bg-transparent transition duration-500 hover:bg-black hover:text-white ease-out md:text-sm md:uppercase">
              Clear shopping cart
            </button-component>
            <button-component class="mr-0 text-xs text-gray-500 py-2 px-4 border-1 border-gray-500 cursor-pointer bg-transparent transition duration-500 hover:bg-black hover:text-white ease-out md:text-sm md:uppercase">
              Continue shopping
            </button-component>
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
import CloseIcon from '@/assets/cart/close.svg?inline';
export default {
  name: 'CartPage',
  components: {
    CloseIcon
  },
  asyncData ({ store }) {
    return store.dispatch('fetchCarts');
  },
  data () {
    return {
      color: null,
      isDesktop: false
    };
  },
  head: {
    title: 'Cart | ClothesShop'
  },
  computed: {
    getUserCarts () {
      return this.$store.getters.getUserCarts;
    },
    getFullTotalPrice () {
      return this.$store.getters.getTotalPrice;
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkView);
    this.checkView();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkView);
  },
  methods: {
    select (option) {
      this.color = option;
    },
    checkView () {
      if (document.documentElement.clientWidth > 768) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    },
    addProduct (productId) {
      this.$store.dispatch('addOneProduct', productId);
    },
    minusProduct (product) {
      if (product.quantity === 1) {
        this.$store.dispatch('removeProduct', product);
      }
      if (product.quantity > 1) {
        this.$store.dispatch('minusOneProduct', product.id);
      }
    },
    removeProduct (product) {
      this.$store.dispatch('removeProduct', product);
    }
  }
};
</script>

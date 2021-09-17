<template>
  <article
    class="cart__card flex relative shadow-md"
  >
    <div class="cart__card__img w-140 h-full md:w-260">
      <img
        :src="require(`~/assets/products/${product.img[0]}.jpg`)"
        :alt="product.title"
        class="block w-inherit h-inherit object-cover"
      />
    </div>
    <div
      class="cart__card__content flex flex-col justify-around items-start pt-4 pr-7 pb-2 pl-2 md:justify-between md:pt-4 md:px-7 md:mb-5"
    >
      <button-component
        class="cart__card__content__icon border-none bg-transparent absolute top-2 right-2 cursor-pointer"
        data-testid="removeFromCart"
        @click="removeProduct(product)"
      >
        <img
          src="~/assets/svg/close.svg"
          alt="close"
          class="md:w-20px md:h-20px"
        />
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
        <li
          class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3"
        >
          price:
          <span class="cart__card__item__price text-primary">
            {{ product.price }}$
          </span>
        </li>
        <li
          class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3"
        >
          color:
          <select-component
            :options="product.colors"
            :default="product.colors[0]"
            @input="select"
          />
        </li>
        <li
          class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-2 md:text-xl md:mb-3"
        >
          size:
          <select-component
            :options="product.size"
            :default="product.size[0]"
            @input="select"
          />
        </li>
        <li
          class="cart__card__item flex justify-between text-sm text-gray-500 capitalize mb-0 md:text-xl md:mb-3"
        >
          quantity:
          <div class="cart__card__item__actions flex items-center">
            <button-component
              class="cursor-pointer bg-black border-1 border-black w-25 h-25 text-25 line-height-25 text-white transition duration-500 hover:bg-white hover:text-black md:w-32px md:h-32px"
              data-testid="minus"
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
</template>

<script>
export default {
  name: 'CartCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      color: null
    };
  },
  methods: {
    select (option) {
      this.color = option;
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

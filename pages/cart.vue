<template>
  <div>
    <header-component />
    <breadcrumb-component class="cart__breadcrumb" :align-start="isDesktop">
      shopping cart
    </breadcrumb-component>
    <main>
      <div class="container cart__wrap">
        <div class="cart__inner">
          <article v-for="product in getUserCarts" :key="product.id" class="cart__card">
            <div class="cart__card__img">
              <img :src="require(`~/assets/products/${product.img}.jpg`)" :alt="product.title" />
            </div>
            <div class="cart__card__content">
              <button-component class="cart__card__content__icon" :styles="{border: 'none', background: 'transparent'}" @click="removeProduct(product)">
                <close-icon />
              </button-component>
              <div class="cart__card__head">
                <h3 class="cart__card__title">
                  {{ product.title }}
                </h3>
                <span class="cart__card__category">
                  {{ product.category_name }}
                </span>
              </div>
              <ul class="cart__card__list">
                <li class="cart__card__item">
                  price:
                  <span class="cart__card__item__price">
                    {{ product.price }}$
                  </span>
                </li>
                <li class="cart__card__item">
                  color:
                  <select-component :options="product.colors" :default="product.colors[0]" @input="select" />
                </li>
                <li class="cart__card__item">
                  size:
                  <select-component :options="product.size" :default="product.size[0]" @input="select" />
                </li>
                <li class="cart__card__item">
                  quantity:
                  <div class="cart__card__item__actions">
                    <button-component
                      :styles="{
                        cursor: 'pointer',
                        backgroundColor: '#000',
                        border: '1px solid #000',
                        color: '#fff',
                        fontSize: '25px',
                        lineHeight: '25px'
                      }"
                      @click="minusProduct(product)"
                    >
                      -
                    </button-component>
                    <span class="cart__card__category">
                      {{ product.quantity }}
                    </span>
                    <button-component
                      :styles="{
                        cursor: 'pointer',
                        backgroundColor: '#000',
                        border: '1px solid #000',
                        color: '#fff',
                        fontSize: '25px',
                        lineHeight: '25px'
                      }"
                      @click="addProduct(product.id)"
                    >
                      +
                    </button-component>
                  </div>
                </li>
              </ul>
            </div>
          </article>
          <div class="cart__actions">
            <button-component>
              Clear shopping cart
            </button-component>
            <button-component>
              Continue shopping
            </button-component>
          </div>
        </div>
        <form action="#" class="cart__form">
          <div class="cart__form__address">
            <h2 class="cart__form__heading">
              shipping adress
            </h2>
            <input class="cart__form__input" type="text" placeholder="Bangladesh" />
            <input class="cart__form__input" type="text" placeholder="State" />
            <input class="cart__form__input" type="number" placeholder="Postcode / Zip" />
            <button-component class="cart__form__btn">
              Get a quote
            </button-component>
          </div>
          <div class="cart__check">
            <div class="cart__check__total">
              <span class="cart__check__total-text">sub total</span>
              <span class="cart__check__total-price">${{ getFullTotalPrice }}</span>
            </div>
            <div class="cart__check__grand">
              <span class="cart__check__grand-text">grand total</span>
              <span class="cart__check__grand-price">${{ getFullTotalPrice }}</span>
            </div>
            <div class="cart__check__hr"></div>
            <button-component class="cart__check__btn">
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
import SelectComponent from '@/components/SelectComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue';
import FeedbackBlock from '@/components/FeedbackBlock.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import CloseIcon from '@/assets/cart/close.svg?inline';
export default {
  name: 'CartPage',
  components: {
    HeaderComponent,
    BreadcrumbComponent,
    FeedbackBlock,
    FooterComponent,
    ButtonComponent,
    CloseIcon,
    SelectComponent
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

<style lang="scss" scoped>
$primary: #f16d7f;
$dark: #222222;
$item-color: #575757;
$check-color: #f5f3f3;
$hr-color: #e2e2e2;
$width-img-375: 140px;
$width-img-768: 260px;
$f_size-12: 12px;
$f_size-14: 14px;
$f_size-16: 16px;
$f_size-22: 22px;
$f_size-24: 24px;
$l_height-14: 14px;
$l_height-17: 17px;
$l_height-19: 19px;
$l_height-26: 26px;
$l_height-29: 29px;
$transition-speed: .3s;

ul {
  margin: 0;
  padding: 0;
}

.cart {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    background-color: #fff;
    padding: 40px 10px 100px;
  }
  &__inner {
    display: grid;
    grid-gap: 30px;
  }
  &__card {
    display: flex;
    position: relative;
    box-shadow: 2px 2px 15px 0px rgba(0,0,0, .13);
    &__img {
      width: $width-img-375;
      height: 100%;
      img {
        display: block;
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding: 15px 30px 10px 10px;
      &__icon {
        position: absolute;
        top: 10px;
        right: 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &__head {
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    &__title {
      font-size: $f_size-14;
      line-height: $l_height-17;
      color: $dark;
    }
    &__list {
      width: 160px;
    }
    &__item {
      display: flex;
      justify-content: space-between;
      font-size: $f_size-14;
      line-height: $l_height-17;
      color: $item-color;
      text-transform: capitalize;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      &__price {
        color: $primary;
      }
      &__actions {
        display: flex;
        align-items: center;
        button {
          transition: background-color $transition-speed linear, color $transition-speed linear;
          &:hover {
            background-color: #fff !important;
            color: $dark !important;
          }
        }
        span {
          margin: 0 10px;
        }
      }
    }
  }
  &__actions {
    text-align: center;
    button {
      margin-right: 10px;
      font-size: $f_size-12;
      line-height: $l_height-14;
      color: $item-color;
      padding: 10px 16px;
      border: 1px solid $item-color;
      cursor: pointer;
      background-color: transparent;
      transition: background-color $transition-speed linear, color $transition-speed linear;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background-color: $dark !important;
        color: #fff !important;
      }
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    &__heading {
      text-transform: uppercase;
      color: $dark;
      font-weight: 300;
      font-size: $f_size-16;
      line-height: $l_height-19;
      margin-bottom: 20px;
    }
    &__address {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    &__input {
      font-family: 'Lato', sans-serif;
      border: 1px solid $item-color;
      font-size: $f_size-16;
      line-height: $l_height-19;
      font-weight: 300;
      padding: 13px 16px 16px;
      margin-bottom: 20px;
      &::placeholder {
        font-family: 'Lato', sans-serif;
        font-size: $f_size-16;
        line-height: $l_height-19;
        color: $item-color;
        font-weight: 300;
      }
    }
    &__btn {
      font-size: $f_size-14;
      line-height: $l_height-19;
      align-self: flex-start;
      border: 1px solid $item-color;
      padding: 11px 20px;
      cursor: pointer;
      background-color: transparent;
      transition: background-color $transition-speed linear, color $transition-speed linear;
      &:hover {
        background-color: $dark !important;
        color: #fff !important;
      }
    }
  }
  &__check {
    background: $check-color;
    padding: 40px 42px;
    text-align: right;
    text-transform: uppercase;
    color: $dark;
    font-weight: 700;
    &__total {
      font-size: $f_size-14;
      line-height: $l_height-19;
      margin-bottom: 12px;
      &-price {
          margin-left: 25px;
      }
    }
    &__grand {
      font-weight: 700;
      color: $dark;
      font-size: $f_size-16;
      line-height: $l_height-19;
      margin-bottom: 20px;
      &-price {
          color: $primary;
          margin-left: 25px;
      }
    }
    &__hr {
      min-width: 275px;
      height: 1px;
      background: $hr-color;
      margin-bottom: 20px;
    }
    &__btn {
      text-transform: uppercase;
      background-color: $primary;
      color: #fff;
      padding: 16px 42px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: border $transition-speed linear, color $transition-speed linear, background-color $transition-speed linear;
      &:hover {
        color: $primary !important;
        border: 1px solid $primary !important;
        background-color: #fff !important;
      }
    }
  }
}
@media (min-width: 768px) {
  .cart {
    &__card {
      &__img {
        width: $width-img-768;
      }
      &__head {
        margin-bottom: 40px;
      }
      &__content {
        justify-content: space-between;
        padding: 15px 30px 30px 20px;
        &__icon {
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
      &__title {
        font-size: $f_size-24;
        line-height: $l_height-29;
      }
      &__list {
        margin-bottom: auto;
        width: 260px;
      }
      &__item {
        font-size: $f_size-22;
        line-height: $l_height-26;
        margin-bottom: 15px;
        label {
          input {
            width: 100px;
          }
        }
      }
    }
    &__actions {
      margin-right: 45px;
      button {
        font-size: $f_size-14;
        line-height: $l_height-17;
        text-transform: uppercase;
      }
    }
    &__form {
      flex-direction: row;
      &__address {
        flex-grow: 1;
        margin-right: 15px;
      }
    }
    &__check {
      align-self: flex-start;
    }
  }
}
@media (min-width: 1024px) {
  .cart {
    &__wrap {
      grid-template-columns: repeat(3, 1fr);
    }
    &__inner {
      grid-column: 1 / 3;
    }
    &__form {
      flex-direction: column;
      &__address {
        flex-grow: 0;
      }
    }
  }
}
</style>

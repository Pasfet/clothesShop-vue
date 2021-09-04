<template>
  <div class="featureditems__wrap">
    <article v-for="product in products" :key="product.id" class="card">
      <div class="card__img__wrap">
        <img :src="require(`~/assets/products/${product.img}.jpg`)" :alt="product.title" width="360" height="420" />
        <div class="card__img__overlay">
          <button-component
            :styles="{
              padding: '10px 15px',
              cursor: 'pointer',
              background: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              lineHeight: '17px',
            }"
            class="card__img__overlay__btn"
            @click="addProduct(product)"
          >
            <cart-icon class="card__img__overlay__icon" />
            Add to card
          </button-component>
        </div>
      </div>
      <div class="card__content">
        <NuxtLink to="#" class="card__content__link">
          <h4 class="card__content__title">
            {{ product.title }}
          </h4>
        </NuxtLink>
        <p class="card__content__description">
          {{ product.description }}
        </p>
        <span class="card__content__price">
          ${{ product.price }}
        </span>
      </div>
    </article>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CartIcon from '@/assets/cards/cart.svg?inline';

export default {
  name: 'CardComponent',
  components: { ButtonComponent, CartIcon },
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

<style lang="scss" scoped>
$width-card: 360px;
$height-card-img: 420px;
$card-content-width: 310px;
$bg-card: #f8f8f8;
$card-title: #000;
$card-description: #5d5d5d;
$primary: #f16d7f;
$transition-speed: .3s;
$f_size-13: 13px;
$f_size-14: 14px;
$f_size-16: 16px;
$l_height-16: 16px;
$l_height-17: 17px;
$l_height-19: 19px;

.card {
  background-color: $bg-card;
  max-width: $width-card;
  &__img {
    &__wrap {
      width: $width-card;
      height: $height-card-img;
      position: relative;
      img {
        display: block;
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
      &:hover .card__img__overlay {
        opacity: 1;
      }
    }
    &__overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      background: rgba(58, 56, 56, 0.86);
      transition: opacity $transition-speed linear;
      &__btn {
        transition: transform $transition-speed linear;
        &:hover {
          transform: scale(.95);
        }
      }
      &__icon {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
  }
  &__content {
    max-width: $card-content-width;
    padding: 25px 30px 20px 15px;
    &__link {
      text-decoration: none;
      display: inline-block;
      margin-bottom: 10px;
    }
    &__title {
      color: $card-title;
      font-size: $f_size-13;
      line-height: $l_height-16;
      text-transform: uppercase;
    }
    &__description {
      font-weight: 300;
      font-size: $f_size-14;
      line-height: $l_height-17;
      color: $card-description;
      margin-bottom: 20px;
    }
    &__price {
      color: $primary;
      font-size: $f_size-16;
      line-height: $l_height-19;
    }
  }
}
</style>

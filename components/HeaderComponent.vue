<template>
  <header class="header">
    <div class="container header__wrap">
      <div class="header__left">
        <NuxtLink to="/">
          <img class="logo" src="~/assets/header/logo.png" alt="logo" />
        </NuxtLink>
        <search-component />
      </div>
      <div class="header__right">
        <NuxtLink to="/cart" class="header__right-cart__link">
          <cart-icon class="header__right-cart__icon" />
        </NuxtLink>
        <span class="header__right-cart__count">
          {{ countCarts }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import CartIcon from '@/assets/header/cart.svg?inline';
export default {
  name: 'HeaderComponent',
  components: {
    SearchComponent,
    CartIcon
  },
  computed: {
    countCarts () {
      return this.$store.getters.getCountCarts;
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchCarts');
  }
};
</script>

<style lang="scss" scoped>
$headerBgColor: #222222;
$primary: #f16d7f;
$header-height: 70px;
$transition-speed: .3s;

.header {
  background-color: $headerBgColor;
  height: $header-height;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
  }
  &__left {
    display: flex;
    align-items: center;
    .logo {
      width: 44px;
      margin-right: 20px;
      transition: transform $transition-speed linear;
      &:hover {
        transform: scale(.95);
      }
    }
  }
  &__right {
    position: relative;
    transition: transform $transition-speed linear;
    &:hover {
      transform: scale(.95);
    }
    &-cart {
      &__count {
        display: block;
        position: absolute;
        top: -15px;
        right: -15px;
        color: #fff;
        background-color: $primary;
        padding: 5px 10px;
        border-radius: 50%;
      }
    }
  }
}
</style>

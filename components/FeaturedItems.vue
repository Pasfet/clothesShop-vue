<template>
  <section class="featureditems">
    <div class="container">
      <div class="featureditems__head">
        <h3 class="featureditems__head__heading">
          Fetured Items
        </h3>
        <p class="featureditems__head__text">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <card-component
        :products="currentProductsList"
        @addToCart="addProduct"
      />
      <div class="featureditems__link">
        <NuxtLink to="#" class="featureditems__catalog">
          Browse All Product
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
export default {
  name: 'FeaturedItems',
  components: {
    CardComponent
  },
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

<style lang="scss" scoped>
$text-color: #9f9f9f;
$catalog-color: #f26376;
$f_size-14: 14px;
$f_size-16: 16px;
$f_size-30: 30px;
$l_height-17: 17px;
$l_height-19: 19px;
$l_height-36: 36px;
$transition-speed: .3s;

.featureditems {
  &__head {
    text-align: center;
    margin-bottom: 65px;
    &__heading {
      font-size: $f_size-30;
      line-height: $l_height-36;
      text-transform: capitalize;
    }
    &__text {
      color: $text-color;
      font-size: $f_size-14;
      line-height: $l_height-36;
    }
  }
  &__wrap {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
  &__link {
    text-align: center;
    margin: 55px 0 110px;
  }
  &__catalog {
    display: inline-block;
    text-decoration: none;
    font-size: $f_size-16;
    line-height: $l_height-19;
    color: $catalog-color;
    padding: 15px 40px;
    border: 1px solid $catalog-color;
    transition: background-color $transition-speed linear, color $transition-speed linear;
    &:hover {
      background-color: $catalog-color;
      color: #fff;
    }
  }
}
@media (min-width: 768px) {
  .featureditems {
    &__wrap {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (min-width: 1440px) {
  .featureditems {
    &__wrap {
      grid-gap: 30px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

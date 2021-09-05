<template>
  <div>
    <header-component />
    <main>
      <index-intro />
      <offer-component />
      <featured-items />
    </main>
    <advantages-block />
    <feedback-block />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import IndexIntro from '@/components/IndexIntro.vue';
import OfferComponent from '@/components/OfferComponent.vue';
import FeaturedItems from '@/components/FeaturedItems.vue';
import AdvantagesBlock from '@/components/AdvantagesBlock.vue';
import FeedbackBlock from '@/components/FeedbackBlock.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'IndexPage',
  components: {
    HeaderComponent,
    IndexIntro,
    OfferComponent,
    FeaturedItems,
    AdvantagesBlock,
    FeedbackBlock,
    FooterComponent
  },
  asyncData ({ store }) {
    return store.dispatch('fetchProducts');
  },
  head: {
    title: 'Home Page | ClothesShop'
  }
};
</script>

<style lang="scss">
$f_size_14: 14px;

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
body {
  display: flex;
  flex-direction: column;
  font-size: $f_size_14;
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
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px;
}
</style>

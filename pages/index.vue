<template>
  <div class="flex flex-col min-h-screen flex-grow">
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
export default {
  name: 'IndexPage',
  asyncData ({ store }) {
    return store.dispatch('fetchProducts');
  },
  head: {
    title: 'Home Page | ClothesShop'
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

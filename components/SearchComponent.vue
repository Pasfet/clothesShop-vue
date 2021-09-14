<template>
  <form class="flex items-center relative">
    <button-component class="bg-transparent border-none mr-2">
      <img src="~/assets/header/search.svg" alt="search" class="block w-7" />
    </button-component>
    <label>
      <input v-model="searchLine" type="text" class="bg-transparent border-b-2 border-white p-1 text-white" data-testid="searchLine" />
    </label>
    <transition name="fade">
      <div v-if="searchLine && filterList.length" class="absolute overflow-auto top-10 -left-20 w-345 max-h-96 bg-white rounded-md z-10 shadow-md p-4 md:max-w-400 md:left-0">
        <template v-for="goods in filterList">
          <NuxtLink :key="goods.id" :to="`/catalog/${goods.id}`" data-testid="linkFromSearch">
            <search-card :goods="goods" class="mb-5" />
          </NuxtLink>
        </template>
      </div>
      <div v-if="searchLine && !filterList.length" class="absolute w-96 top-10 p-4 bg-white rounded-md text-lg">
        Is empty
      </div>
    </transition>
  </form>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      searchLine: ''
    };
  },
  computed: {
    getSearchList () {
      return this.$store.getters.getSearchList;
    },
    filterList () {
      const regExp = new RegExp(this.searchLine, 'i');
      const filteredList = this.getSearchList.filter(goods => regExp.test(goods.title));
      return filteredList;
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

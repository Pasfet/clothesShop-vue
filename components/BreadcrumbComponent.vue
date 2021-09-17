<template>
  <section class="bg-breadcrumbs-bg uppercase h-36">
    <div class="max-w-5xl mx-auto flex flex-col justify-center items-center h-full md:flex-row md:items-center md:justify-between md:px-7">
      <h2 class="text-2xl text-primary mb-7 md:mb-0">
        {{ getCurrentPage }}
      </h2>
      <ul class="flex font-light text-sm text-gray-600">
        <li class="mr-2">
          <NuxtLink to="/">
            home
          </NuxtLink>
        </li>
        <li v-for="link in getLinks" :key="link">
          <NuxtLink :to="link" class="text-primary">
            / {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    getCurrentPage () {
      const curPage = [];
      const pathArr = this.path.split('/');
      pathArr.forEach((link) => {
        if (link) {
          curPage.push(link);
        }
      });
      return curPage[curPage.length - 1];
    },
    getLinks () {
      const links = [];
      const pathArr = this.path.split('/');
      pathArr.forEach((link) => {
        if (link) {
          links.push(link);
        }
      });
      return links;
    }
  }
};
</script>

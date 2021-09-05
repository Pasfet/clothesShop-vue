<template>
  <section class="breadcrumb">
    <div class="container breadcrumb__wrap" :class="flexWrap">
      <h2 class="breadcrumb__heading">
        <slot></slot>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  props: {
    alignStart: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    flexWrap () {
      return {
        'align-flex-start ': this.alignStart
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #f16d7f;
$bg-breadcrumb: #f8f3f4;
$height-breadcrumb: 148px;
$f_size-24: 24px;
$l_height-29: 29px;

.breadcrumb {
  background-color: $bg-breadcrumb;
  text-transform: uppercase;
  height: $height-breadcrumb;
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__heading {
    font-size: $f_size-24;
    line-height: $l_height-29;
    color: $primary;
  }
}
.align-flex-start {
  align-items: flex-start;
}

</style>

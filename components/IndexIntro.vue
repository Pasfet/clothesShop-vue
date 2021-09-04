<template>
  <section class="intro">
    <div class="container intro__wrap">
      <h1 class="intro__heading">
        <span class="intro__heading_black">the brand</span><br />
        of luxerious
        <span class="intro__heading_accent">fashion</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexIntro'
};
</script>

<style lang="scss" scoped>
$primary: #f16d7f;
$bg-intro: #f1e4e6;
$min-height: 360px;
$f-size-heading: 20px;
$f-size-heading-768: 24px;
$f-size-heading-1024: 32px;
$f-size-heading-black: 38px;
$f-size-heading-black-768: 44px;
$f-size-heading-black-1024: 48px;
$l-height-heading: 24px;
$l-height-heading-768: 29px;
$l-height-heading-1024: 38px;
$l-height-heading-black: 46px;
$l-height-heading-black-768: 53px;
$l-height-heading-black-1024: 58px;
$color-heading: #222;
$max-width-heading: 270px;
$max-width-heading-768: 310px;
$max-width-heading-1024: 400px;
$header-height: 70px;

.intro {
  background-color: $bg-intro;
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: $min-height;
  }
  &__heading {
    text-transform: uppercase;
    font-size: $f-size-heading;
    line-height: $f-size-heading;
    font-weight: 700;
    color: $color-heading;
    max-width: $max-width-heading;
    border-left: 12px solid $primary;
    padding-left: 15px;
    &_black {
      font-size: $f-size-heading-black;
      line-height: $l-height-heading-black;
    }
    &_accent {
      color: $primary;
    }
  }
}
@media (min-width: 768px) {
  .intro {
    height: calc(100vh - #{$header-height});
    &__wrap {
      height: 100%;
      background-image: url('~/assets/bg-intro.png');
      background-repeat: no-repeat;
      background-position: -200px bottom;
      background-size: contain;
      justify-content: flex-end;
    }
    &__heading {
      max-width: $max-width-heading-768;
      font-size: $f-size-heading-768;
      line-height: $l-height-heading-768;
      &_black {
        font-size: $f-size-heading-black-768;
        line-height: $l-height-heading-black-768;
      }
    }
  }
}

@media(min-width: 1024px) {
  .intro {
    &__wrap {
      height: 100%;
    }
    &__heading {
      max-width: $max-width-heading-1024;
      font-size: $f-size-heading-1024;
      line-height: $l-height-heading-1024;
      &_black {
        font-size: $f-size-heading-black-1024;
        line-height: $l-height-heading-black-1024;
      }
    }
  }
}

@media(min-width: 1440px) {
  .intro {
    height: 765px;
  }
}
</style>

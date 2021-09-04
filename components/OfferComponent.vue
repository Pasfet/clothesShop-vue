<template>
  <section class="offer">
    <div class="container offer__wrap">
      <div class="offer__card">
        <NuxtLink to="#">
          <div class="offer__card__wrap">
            <img src="~assets/offer/for-women.jpg" alt="for women" class="offer__card__img" />
            <div class="offer__card__overlay">
              <p class="offer__card__overlay__text">
                30% off
              </p>
              <h2 class="offer__card__overlay__title">
                for women
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="offer__card">
        <NuxtLink to="#">
          <div class="offer__card__wrap">
            <img src="~assets/offer/for-men.jpg" alt="for men" class="offer__card__img" />
            <div class="offer__card__overlay">
              <p class="offer__card__overlay__text">
                hot deal
              </p>
              <h2 class="offer__card__overlay__title">
                for men
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="offer__card">
        <NuxtLink to="#">
          <div class="offer__card__wrap">
            <img src="~assets/offer/for-kids.jpg" alt="for kids" class="offer__card__img" />
            <div class="offer__card__overlay">
              <p class="offer__card__overlay__text">
                new arrivals
              </p>
              <h2 class="offer__card__overlay__title">
                for kids
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="offer__card offer__card__acces">
        <NuxtLink to="#">
          <div class="offer__card__wrap">
            <picture class="offer__card__img">
              <source media="(min-width: 768px)" srcset="~assets/offer/acces.jpg" />
              <img src="~assets/offer/acces-mob.jpg" alt="accesories" />
            </picture>
            <div class="offer__card__overlay">
              <p class="offer__card__overlay__text">
                luxirous & trendy
              </p>
              <h2 class="offer__card__overlay__title">
                accesories
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferComponent'
};
</script>

<style lang="scss" scoped>
$primary: #f16d7f;
$img-width-375: 345px;
$img-width-768: 230px;
$img-width-1440: 360px;
$f_size-16: 16px;
$f_size-24: 24px;
$l_height-19: 19px;
$l_height-29: 29px;
$transition-speed: .3s;

.offer {
  &__wrap {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
  &__card {
    &:hover .offer__card__overlay {
      background-color: rgba(33, 22, 22, 0.9);
    }
    &__wrap {
      width: $img-width-375;
      position: relative;
    }
    &__img {
      display: block;
      width: inherit;
      img {
        width: inherit;
      }
    }
    &__overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(33, 22, 22, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      transition: background-color $transition-speed linear;
      &__text {
        color: #fff;
        font-size: $f_size-16;
        line-height: $l_height-19;
      }
      &__title {
        color: $primary;
        font-size: $f_size-24;
        line-height: $l_height-29;
        font-weight: 700;
      }
    }
  }
  @media (min-width: 768px) {
    .offer {
      &__wrap {
        grid-gap: 15px;
        grid-template-columns: repeat(3, 1fr);
      }
      &__card {
        &__wrap {
          width: $img-width-768;
          &:last-child {
            width: 100% !important;
          }
        }
        &__acces {
          grid-column: 1 / 4;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .offer {
      &__wrap {
        grid-gap: 30px;
      }
      &__card {
        &__wrap {
          width: $img-width-1440;
        }
      }
    }
  }
}
</style>

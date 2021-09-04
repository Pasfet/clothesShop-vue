<template>
  <aside class="advantages">
    <div class="container advantages__wrap">
      <div class="advantages__card">
        <div class="advantages__card__img">
          <img src="~/assets/aside/delivery.svg" alt="delivery" />
        </div>
        <h4 class="advantages__card__heading">
          Free Delivery
        </h4>
        <p class="advantages__card__description">
          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
        </p>
      </div>
      <div class="advantages__card">
        <div class="advantages__card__img">
          <img src="~/assets/aside/sales.svg" alt="sales" />
        </div>
        <h4 class="advantages__card__heading">
          Sales & discounts
        </h4>
        <p class="advantages__card__description">
          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
        </p>
      </div>
      <div class="advantages__card">
        <div class="advantages__card__img">
          <img src="~/assets/aside/quality.svg" alt="quality" />
        </div>
        <h4 class="advantages__card__heading">
          Quality assurance
        </h4>
        <p class="advantages__card__description">
          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdvantagesBlock'
};
</script>

<style lang="scss" scoped>
$bg-color: #222224;
$text-color: #fbfbfb;
$f_size-14: 14px;
$f_size-20: 20px;
$l_height-17: 17px;
$l_height-24: 24px;
$card-width: 360px;

.advantages {
  background-color: $bg-color;
  color: $text-color;
  &__wrap {
    padding: 50px 0 80px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    grid-gap: 45px;
  }
  &__card {
    max-width: $card-width;
    &__img {
      width: 40px;
      height: 40px;
      margin: 0 auto 20px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    &__heading {
      font-size: $f_size-20;
      line-height: $l_height-24;
      text-transform: capitalize;
      font-weight: 400;
      margin-bottom: 15px;
    }
    &__description {
      font-weight: 300;
      font-size: $f_size-14;
      line-height: $l_height-17;
      color: $text-color;
      opacity: .8;
    }
  }
}
@media (min-width: 1024px) {
  .advantages {
    &__wrap {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

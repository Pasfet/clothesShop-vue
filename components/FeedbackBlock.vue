<template>
  <section class="feedback">
    <div class="container feedback__wrap">
      <div class="feedback__left">
        <figure class="feedback__left__avatar">
          <img src="~/assets/feedback/feedback-avatar.png" alt="avatar" />
          <figcaption class="feedback__left__description">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
          </figcaption>
        </figure>
      </div>
      <div class="feedback__right">
        <div class="feedback__right__head">
          <h4 class="feedback__right__heading">
            subscribe
          </h4>
          <p class="feedback__right__description">
            for our newletter and promotion
          </p>
        </div>
        <form class="feedback__sibscribe">
          <input type="email" class="feedback__sibscribe__input" placeholder="Enter Your Email" />
          <button-component
            :styles="{
              padding: '14px',
              fontSize: '14px',
              lineHeight: '17px',
              textTransform: 'capitalize',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              border: '1px solid #f16d7f',
              cursor: 'pointer'
            }"
            class="feedback__sibscribe__btn"
          >
            Subscribe
          </button-component>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
  name: 'FeedbackBlock',
  components: {
    ButtonComponent
  }
};
</script>

<style lang="scss" scoped>
$primary: #f16d7f;
$text-color: #222224;
$f_size-14: 14px;
$f_size-18: 18px;
$f_size-24: 24px;
$l_height-22: 22px;
$l_height-37: 37px;
$transition-speed: .3s;

.feedback {
  background-image: url('~/assets/feedback/bg-feedback.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -400px 0;
  padding: 60px 0;
  &__left {
    margin-bottom: 60px;
    &__avatar {
      margin: 0 auto;
      max-width: 340px;
      text-align: center;
      img {
        width: 90px;
        height: 90px;
        margin-bottom: 30px;
      }
    }
    &__description {
      color: $text-color;
      font-size: $f_size-18;
      line-height: $l_height-22;
    }
  }
  &__right {
    text-align: center;
    &__head {
      text-transform: uppercase;
      color: $text-color;
      margin-bottom: 20px;
    }
    &__heading {
      font-size: $f_size-24;
      line-height: $l_height-37;
      font-weight: 700;
    }
    &__description {
      font-size: $f_size-14;
      line-height: $l_height-22;
    }
  }
  &__sibscribe {
    &__input {
      margin-right: -2px;
      padding: 16px 20px;
      opacity: .67;
      color: $text-color;
      background-color: #e1e1e1;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      border: none;
    }
    &__btn {
      background-color: $primary;
      color: #fff;
      transition: background-color $transition-speed linear, color $transition-speed linear;
      &:hover {
        color: $primary;
        background-color: #fff;
      }
    }
  }
}
@media (min-width: 1024px) {
  .feedback {
    background-position: 0 0;
    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

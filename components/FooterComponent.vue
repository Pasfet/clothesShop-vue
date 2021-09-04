<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="social">
        <a href="#" class="social__link">
          <facebook-icon class="social__icon" />
        </a>
        <a href="#" class="social__link">
          <instagram-icon class="social__icon" />
        </a>
        <a href="#" class="social__link">
          <pinterest-icon class="social__icon" />
        </a>
        <a href="#" class="social__link">
          <twitter-icon class="social__icon" />
        </a>
      </div>
      <div class="footer__copy">
        &copy;2021  Brand  All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import FacebookIcon from '@/assets/footer/facebook.svg?inline';
import InstagramIcon from '@/assets/footer/instagram.svg?inline';
import PinterestIcon from '@/assets/footer/pinterest.svg?inline';
import TwitterIcon from '@/assets/footer/twitter.svg?inline';
export default {
  name: 'FooterComponent',
  components: {
    FacebookIcon,
    InstagramIcon,
    PinterestIcon,
    TwitterIcon
  }
};
</script>

<style lang="scss" scoped>
$primary: #f16d7f;
$bg-footer: #222224;
$transition-speed: .3s;
$f_size-16: 16px;
$l_height-19: 19px;

.footer {
  margin-top: auto;
  background-color: $bg-footer;
  padding: 45px 0 10px;
  text-align: center;
  &__copy {
    color: #fff;
    font-size: $f_size-16;
    line-height: $l_height-19;
  }
}
.social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: #fff;
    margin-right: 10px;
    transition: background-color $transition-speed linear;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: $primary;
    }
    &:hover .social__icon {
      fill: #fff;
    }
  }
  &__icon {
    transition: fill $transition-speed linear;
    fill: #000;
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 15px 0;
    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .social {
    margin-bottom: 0;
    order: 1;
  }
}
</style>

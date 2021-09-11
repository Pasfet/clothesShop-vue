<template>
  <footer class="mt-auto bg-gray-900 pt-11 pb-3 text-center md:py-4">
    <div class="max-w-5xl mx-auto md:flex md:justify-between md:items-center md:px-4">
      <div class="flex justify-center items-center mb-10 md:mb-0 md:order-1">
        <a v-for="social in $options.socials" :key="social.social" href="#" class="flex items-center justify-center w-32px h-32px bg-white mr-2 last:mr-0 transition duration-500 hover:bg-primary">
          <component :is="social.icon" class="fill-black" />
        </a>
      </div>
      <div class="text-white text-base">
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
  },
  socials: [
    { social: 'facebook', icon: 'FacebookIcon' },
    { social: 'instagram', icon: 'InstagramIcon' },
    { social: 'pinterest', icon: 'PinterestIcon' },
    { social: 'twitter', icon: 'TwitterIcon' }
  ]
};
</script>

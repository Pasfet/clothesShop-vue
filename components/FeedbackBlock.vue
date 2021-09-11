<template>
  <section class="bg-feedback-bg bg-no-repeat bg-cover bg-feedback-pos-sm py-14 md:bg-feedback-pos-md">
    <div class="max-w-5xl mx-auto lg:flex lg:justify-between lg:items-center">
      <div class="mb-14">
        <figure class="mx-auto max-w-xs text-center">
          <img src="~/assets/feedback/feedback-avatar.png" alt="avatar" width="90" height="90" class="w-90 h-90 mx-auto mb-7" />
          <figcaption class="text-black text-lg max-w-360 mx-auto">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
          </figcaption>
        </figure>
      </div>
      <div class="text-center">
        <div class="uppercase text-black mb-5">
          <h4 class="text-2xl font-bold">
            subscribe
          </h4>
          <p class="text-sm">
            for our newletter and promotion
          </p>
        </div>
        <form>
          <input type="email" class="-mr-1 py-3 px-3 opacity-70 text-black bg-feedback-subs-color rounded-tl-3xl rounded-bl-3xl border-none" placeholder="Enter Your Email" />
          <button-component
            class="p-3 text-sm capitalize rounded-tr-3xl rounded-br-3xl border-1 border-primary bg-primary text-white transition duration-500 hover:text-primary hover:bg-white"
          >
            Subscribe
          </button-component>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackBlock'
};
</script>

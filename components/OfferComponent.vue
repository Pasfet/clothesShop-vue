<template>
  <section>
    <div class="max-w-5xl mx-auto p-4 grid gap-7 grid-cols-1 justify-items-center md:gap-4 md:grid-cols-offer xl:gap-7">
      <div class="group hover">
        <NuxtLink to="#">
          <div class="w-345 relative md:w-230 2xl:w-360">
            <img src="~assets/offer/for-women.jpg" alt="for women" class="block w-inherit" />
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center uppercase transition duration-500 ease-in-out group-hover:bg-opacity-80">
              <p class="text-white text-xs">
                30% off
              </p>
              <h2 class="text-primary text-base font-bold">
                for women
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="group hover">
        <NuxtLink to="#">
          <div class="w-345 relative md:w-230 2xl:w-360">
            <img src="~assets/offer/for-men.jpg" alt="for men" class="block w-inherit" />
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center uppercase transition duration-500 ease-in-out group-hover:bg-opacity-80">
              <p class="text-white text-xs">
                hot deal
              </p>
              <h2 class="text-primary text-base font-bold">
                for men
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="group hover">
        <NuxtLink to="#">
          <div class="w-345 relative md:w-230 2xl:w-360">
            <img src="~assets/offer/for-kids.jpg" alt="for kids" class="block w-inherit" />
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center uppercase transition duration-500 ease-in-out group-hover:bg-opacity-80">
              <p class="text-white text-xs">
                new arrivals
              </p>
              <h2 class="text-primary text-base font-bold">
                for kids
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="group hover md:col-start-1 md:col-end-4">
        <NuxtLink to="#">
          <div class="md:w-full relative">
            <picture class="block w-inherit">
              <source media="(min-width: 768px)" srcset="~assets/offer/acces.jpg" />
              <img src="~assets/offer/acces-mob.jpg" alt="accesories" class="w-inherit" />
            </picture>
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center uppercase transition duration-500 ease-in-out group-hover:bg-opacity-80">
              <p class="text-white text-xs">
                luxirous & trendy
              </p>
              <h2 class="text-primary text-base font-bold">
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

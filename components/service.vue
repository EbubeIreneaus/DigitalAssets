<script lang="ts" setup></script>

<template>
  <section class="px-5 md:mx-20 ">
    <div class="py-10 px-1">
      <h2
        class="text-4xl font-extrabold relative py-5 before:absolute before:border before:w-32 before:bottom-0 before:border-primary-hover text-center">
       Our Service
      </h2>
      <p class="text-justify mt-4">
        We always put our valued customers first and dedicate ourselves time and
        expertise in making our customers ever grateful for investing with us..
        However, our clients get much more including our selection of
        comprehensive investment choices. Incase of any complaints, we are ever
        ready to serve our customers much better.
      </p>

      <div class= "grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:flex-row flex-wrap gap-x-5 mt-10 justify-center ">
            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/service-forex.png" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl font-bold text-center">Forex</h2>
              <p class="text-center ">
                Forex is one of those areas that most people feel is complicated. In reality, it's like many
                 other forms of investment where a little knowledge can be dangerous.
              </p><nuxt-link to="/service/forex" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>

            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/service-binary.jpg" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl  text-center font-bold
                 ">Binary Options</h2>
              <p class="text-center ">
                We offer a top notch assistance in helping our clients trade and make suitable profits through ..
              </p><nuxt-link to="/service/binary" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>


            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/btc-1.jpg" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl font-bold text-center">Cryptocurrencies</h2>
              <p class="text-center ">
                Cryptocurrencies are sets of software protocols for generating digital tokens and for tracking.
              </p><nuxt-link to="/service/crypto" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>

            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/service-estate.jpg" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl font-bold text-center ">Real Estate</h2>
              <p class="text-center ">
                Real estate trading is the wild side of real estate investment. Like day traders, who
              </p><nuxt-link to="/service/estate" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>
            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/service-gold.jpg" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl font-bold text-center ">Gold</h2>
              <p class="text-center ">
                Investing in precious metals comes with some certain benefits over investing in stocks, such as being a hedge against inflation,
              </p><nuxt-link to="/service/gold" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>

            <div class="flex flex-col gap-3 shadow-md items-center shadow-primary-hover px-5  py-7">
                <img src="~/assets/media/service-retirement.jpg" alt="" class="w-20 h-20 object-cover rounded-full shadow-md shadow-slate-300">
                <h2 class=" text-3xl font-bold text-center ">Retirements</h2>
              <p class="text-center ">
                Our software automatically rebalances your investments and handles all the trades to save your time and help maximize your returns. 
              </p><nuxt-link to="/service/retirement" class="text-green-700 font-semibold underline 
              underline-offset-3">read more</nuxt-link>
            </div>

        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

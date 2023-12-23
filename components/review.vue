<script setup>
import Splide from "@splidejs/splide";

const reviews = reactive([
  {
    name: "John Max",
    image: "reviews-1.jpg",
    location: "New York",
    review: "Great service! Will definitely use again.",
  },
  {
    name: "Vic Ky",
    image: "reviews-2.jpg",
    location: "London",
    review: "I am extremely satisfied with the product.",
  },
  {
    name: "Michael Imelda",
    image: "reviews-3.jpg",
    location: "Paris",
    review: "Best experience I've ever had!",
  },
  {
    name: "Emma Johnson",
    image: "reviews-4.jpg",
    location: "Tokyo",
    review: "Highly recommended for everyone.",
  },
  {
    name: "Joshua ",
    image: "reviews-5.jpg",
    location: "Tokyo",
    review: "Highly recommended for everyone.",
  },
  // Add more objects as needed
]);

onMounted(() => {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    gap: '2rem',
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
      },
  }).mount();
});
</script>

<template>
 <div class=" py-10 px-9 bg-[url('~/assets/media/review-bg.jpg')] relative
  before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/50" data-aos="fade-up">
  <h2 id="carousel-heading" class="text-3xl relative py-5 font-bold text-white text-center ">
       Client Reviews</h2>
       <br>
    <section class="splide container mx-auto" aria-label="carousel-heading">
  
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide" v-for="(x, index) in reviews" :key="index" 
          style="box-shadow: 0 4px 10px rgba(0, 0, 0, .6);">
            <div class="gap-x-28"  >
              <div class="h-28  relative " style="background-color:white; position: relative;">
                <div class="w-full " style="position: absolute !important; bottom: -40px;">
                  <img :src="`/img/${x.image}`" alt="" class="w-20 h-20 mx-auto rounded-full object-cover object-center"></div>
              </div>
              <div class=" ">
                <div class="text-center " style="margin-top: 50px; color:white; font-size:bold">
                  <h2 class="text-2xl">{{ x.name }}</h2>
                  <p style="color:white">{{ x.location }}</p>
                  <hr class="w-[80%] mx-auto">
                  <p class="" style="padding:0 20px; margin: 30px 0;color:white">
                    <i class="fas fa-quote-left"></i> {{ x.review}}  <i class="fas fa-quote-right"></i>
                  </p>
                  <br><br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
</template>

<style lang="scss" scoped></style>

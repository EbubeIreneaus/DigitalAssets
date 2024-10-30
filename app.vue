<template>
  <div>
    <NuxtLayout :api="api">
      <NuxtLoadingIndicator />
      <NuxtPage :api="api" />
    </NuxtLayout>
    <div class="gtranslate_wrapper"></div>
  </div>
</template>

<script setup>
const api = "https://digitalassets.com.ng/";
// const api = "http://127.0.0.1:8000/"

provide("api", api);

onMounted(() => {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  window.gtranslateSettings = {
    default_language: "en",
    wrapper_selector: ".gtranslate_wrapper",
    switcher_open_direction: "top",
    flag_style: "3d",
  };

  const gt_script = document.createElement("script");
  gt_script.setAttribute(
    "src",
    "https://cdn.gtranslate.net/widgets/latest/dwf.js"
  );
  gt_script.setAttribute("defer", true);
  document.head.appendChild(gt_script);
});
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>


<script setup>

onMounted(() => {

})
</script>
<template>
    <div class="w-screen h-screen  relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <video src="~/assets/media/company-bg.mp4" autoplay loop class="h-full w-full object-cover">
        </video>
        <div class="flex justify-center absolute z-30 bottom-[30%] w-full left-0 ">
            <div class=" text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-full mx-3  
            bg-green-700/50 px-5 py-12 animate__animated animate__slideInUp">
           <h1 class="text-4xl font-bold my-3">Our Investment Plans</h1>
           <p class="text-xl font-semibold ">Help us build the future by empowering everyday people to generate income and control their wealth</p>
        </div>
        </div>
       
    </div>
    <invest></invest>
</template>


<style lang="scss" scoped></style>
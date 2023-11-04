
<script setup>

onMounted(() => {

})
</script>
<template>
    <div class="w-screen h-screen  relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <video src="~/assets/media/video4.mp4" autoplay loop class="h-full w-full object-cover">
        </video>
        <div class="absolute z-30 sm:left-10 md:left-20 bottom-[30%] max-w-sm sm:max-w-md md:max-w-lg w-full ps-2">
            <h2 class="text-2xl text-white">Comprehensive financial advice and investment services that are tailored to meet
                your individual needs.</h2>
            <div class="flex flex-col md:flex-row md:gap-5 mt-3 sm:flex-row flex-column">
                <div>
                    <link-btn-fa>Start membership</link-btn-fa>
                </div>
                <div class="w-fit">
                    <link-btn-fa>Login</link-btn-fa>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
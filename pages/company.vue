
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
            <div
                class="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-full mx-3  
                bg-green-700/50 px-5 py-12 animate__animated animate__slideInUp">
                <h1 class="text-4xl font-bold my-3">Company Overview</h1>
                <p class="text-xl font-semibold ">We’re here because more people across the economic spectrum deserve to
                    live secure and rewarding lives.</p>
            </div>
        </div>

    </div>

    <div class="">
        <div class="grid sm:gap-5 md:gap-10 sm:grid-cols-2 md:px-24 my-10 px-3 shadow-md">
            <img src="~/assets/media/about.jpg" alt="" class="h-full w-full object-cover object-center" />
            <div class="">
                <h2
                    class="text-4xl font-extrabold mb-5 tracking-wider relative py-5 before:absolute before:border before:w-24 before:bottom-0 before:border-primary-hover text-center">
                    Welcome to Digital Assets
                </h2>
                <p>
                    At Digital Assets, we are committed to helping you navigate the world of cryptocurrency
                    investments with confidence and ease. Our platform is designed to provide you with a secure and
                    efficient way to grow your wealth through strategic digital asset management.
                </p>
                <h2 class="text-2xl my-5 font-bold">
                    Who We Are
                </h2>
                <p>
                    Digital Assets was founded by a team of experienced financial experts and tech enthusiasts who
                    recognized the immense potential of cryptocurrencies in shaping the future of global finance. With
                    our in-depth knowledge of blockchain technology and investment strategies, we aim to empower individuals
                    and businesses to make informed decisions in the ever-evolving landscape of digital assets.
                </p>
                <h2 class="text-2xl my-5 font-bold">
                    Our Mission
                </h2>
                <p>
                    Our mission is to simplify the complexities of cryptocurrency investments, making it accessible to
                    everyone, regardless of their background or expertise. We prioritize transparency, security, and
                    user-centric services, ensuring that our clients have the necessary tools and resources to achieve
                    their financial goals.
                </p>
                <h2 class="text-2xl my-5 font-bold">
                    Our Commitment to Security
                </h2>
                <p>
                    Security is at the core of everything we do. We implement cutting-edge security measures and
                    adhere to industry best practices to safeguard your investments and personal information. Rest assured
                    that your funds are protected with the highest level of security protocols.
                </p>
            </div>
        </div>
    </div>
    <div class="my-5">
        <use-count></use-count>
    </div>
</template>


<style lang="scss" scoped></style>
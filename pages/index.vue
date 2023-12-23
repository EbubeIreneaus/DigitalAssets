
<script setup>

onMounted(() => {
AOS.refreshHard()
})
</script>
<template>
   <div>
    <div class="w-screen h-screen  relative ">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <video src="~/assets/media/video4.mp4" autoplay loop class="h-full w-full object-cover">
        </video>
        <div class="absolute z-30 sm:left-10 md:left-20 bottom-[30%] max-w-sm sm:max-w-md md:max-w-lg w-full ps-2">
            <h2 class="text-2xl text-white animate__animated animate__slideInLeft">Comprehensive financial advice and investment services that are tailored to meet
                your individual needs.</h2>
            <div class="flex flex-col md:flex-row md:gap-5 gap-y-2 mt-3 sm:flex-row flex-column">
                <div class="w-fit animate__animated animate__slideInLeft">
                    <link-btn-fa link="auth/register/">Start membership</link-btn-fa>
                </div>
                <div class="w-fit animate__animated animate__slideInRight">
                    <link-btn-fa link="auth/login">Login</link-btn-fa>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="flex flex-col lg:flex-row gap-x-5 gap-y-8 mt-5 px-5 overflow-hidden">
            <div class="flex items-center gap-7 py-10 px-5 shadow-md" data-aos="fade-right">
                <i class="fa fa-user fa-2xl text-orange-700"></i>
                <div>
                    <h2 class="text-2xl font-semibold">Explore With Us</h2>
                    <p>First you need to become a member of Digital Assets by registering.</p>
                </div>
            </div>

            <div class="flex items-center gap-7 px-5 py-10 shadow-md" data-aos="fade-up"> 
                <i class="fa fa-pie-chart fa-2xl text-orange-700"></i>
                <div>
                    <h2 class="text-2xl font-semibold">Choose your Plan, Create a Joint Plan</h2>
                    <p>Select any of our unique financial earning plans that best works for you.</p>
                </div>
            </div>
            <div class="flex items-center gap-7 px-5 py-10 shadow-md" data-aos="fade-left">
                <i class="fas fa-money-bill fa-2xl text-orange-700"></i>
                <div>
                    <h2 class="text-2xl font-semibold">Earn Passively and Compounding</h2>
                    <p>Start earning passively and get paid immediately you request for a withdrawal.</p>
                </div>
            </div>
        </div>
    </div>

    <why-us></why-us>
    <div class="lg:mt-[350px] md:mt-[400px] mt-[600px]">
        <review></review>
    </div>

    <div class="max-w-lg mx-10 my-20">
        <h2 class="text-4xl font-extrabold py-5" data-aos="fade-right">Investing has never been easier</h2>
        <p data-aos="fade-up">With years of experience in providing funds management services and a team of seasoned experts working
            hand in hand with top tier trading AI bots, we provide clients with the means to achieve their trading
            and investment goals. We have group of professionals which are highly expertise in the financial markets,
            quipped with combined experiences of over 8 decades which carefully conduct market studies for trading
            purposes in other to achieve success trading in the market.</p>

        <!-- <div class="w-fit my-5">
            <link-btn-fa>Start Membership &nbsp; </link-btn-fa>
        </div> -->
    </div>

    <div class="bg-[url('~/assets/media/review-bg.jpg')] relative h-fit py-44 text-center 
        before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/50" data-aos="fade-up">
        <div class="absolute w-full text-center top-20">
            <p class="text-2xl text-white z-20">SERVER AIRDROP ACTIVE</p>
            <h1 class="text-4xl text-white z-20">Register now to claim your Airdrops. Offer Ends Soon</h1>

            <div class="w-fit mx-auto my-5">
            <link-btn-fa link="/auth/register/" data-aos="fade-up">Start Membership &nbsp;</link-btn-fa>
            </div>
        </div>
    </div>

    <div class="max-w-lg mx-10 my-20" data-aos="fade-right">
        <h2 class="text-4xl font-extrabold py-5">Let Us Do The Work For You.</h2>
        <p>We help individuals, businesses and institutions build, preserve and manage wealth so they can pursue their financial goals.</p>

        <div class="w-fit my-5">
            <link-btn-fa link="/auth/register/">Start Membership &nbsp; </link-btn-fa>
        </div>
    </div>
   </div>
</template>


<style lang="scss" scoped>
.dark-mode p{
    color: white !important;
}
</style>
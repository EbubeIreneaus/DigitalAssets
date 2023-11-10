<script lang="ts" setup></script>

<template>
    <section
        class="relative text-green-600  bg-[url('~/assets/media/review-bg.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:top-0
         before:left-0 before:bg-slate-950/70">

        <div class="py-10 z-40">
            <h2
                class="text-3xl font-extrabold relative  py-5 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center ">
                Pricing Plans
            </h2>


            <div class="flex lg:flex-row flex-wrap gap-5 mt-10 justify-center py-14 px-5 ">
                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl text-green-500 font-bold">Choose a Package</h2>
                    <p class="text-center">
                        You can choose from our robust packages that have been tailored to suit your quest.
                        No hidden Charges, what you see is what you get. Upgrades are also inclusive.
                    </p>
                </div>
                <div class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl text-green-500 font-bold">Deposit Funds</h2>
                    <p class="text-center font-semibold">
                        Choose from Paypal and all the Money Order (Netteler, Skrill, Master Card) to Bitcoin and
                        effortlessly fund your account.
                    </p>
                </div>

                <div class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl text-green-500 font-bold">Withdraw Profits</h2>
                    <p class="text-center font-semibold">
                        With Quick and Fast Withdrawals, you can be sure to receive your profit into your desired channel of
                        withdrawal within 5 business working days.
                    </p>
                </div>
            </div>

            <h2
                class="text-3xl relative py-5 my-14 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center">
                Choose Package
            </h2>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center  gap-y-7 gap-x-5 relative px-5 w-fit mx-auto">
                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center font-extrabold">Standard</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $100 - $2000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">3.5% Daily</li>
                        <li class="py-3">5 days</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <link-btn-fa link="/auth/register">Get Started</link-btn-fa></div>
                    </ul>
                </div>

                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center font-extrabold"> Silver</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $2,001 - $20,000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">6.6% Daily</li>
                        <li class="py-3">7 days</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <link-btn-fa   link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div> 
                 <!-- <div class="flex flex-col gap-5 shadow-lg items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold"> Gold Plan</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $900 - $4999
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">60% ROI</li>
                        <li class="py-3">Withdraw 72hrs</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div>  -->

                   <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center  font-extrabold">Premuim</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $20,001 - $100,000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">10% Daily</li>
                        <li class="py-3">30 days</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <link-btn-fa  link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div>  
                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center font-extrabold">Ultra</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                       &gt; $100,000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">12% Daily</li>
                        <li class="py-3">90 days</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <link-btn-fa link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div>


            </div>
    </div>
</section></template>

<style lang="scss" scoped></style>

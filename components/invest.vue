<script lang="ts" setup></script>

<template>
    <section
        class="relative font-sans">

        <div class="py-10 z-40">
            <h2 data-aos="fade-down"
                class="text-3xl font-extrabold relative  py-5 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center ">
                Pricing Plans
            </h2>


            <div class="flex lg:flex-row flex-wrap gap-5 mt-10 justify-center py-14 px-5 ">
                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40" data-aos="fade-right">
                    <h2 class=" text-2xl  font-bold">Choose a Package</h2>
                    <p class="text-center">
                        You can choose from our robust packages that have been tailored to suit your quest.
                        No hidden Charges, what you see is what you get. Upgrades are also inclusive.
                    </p>
                </div>
                <div class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40" data-aos="fade-up">
                    <h2 class=" text-2xl  font-bold">Deposit Funds</h2>
                    <p class="text-center font-semibold">
                        Choose from Paypal and all the Money Order (Netteler, Skrill, Master Card) to Bitcoin and
                        effortlessly fund your account.
                    </p>
                </div>

                <div data-aos="fade-left" class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl  font-bold">Withdraw Profits</h2>
                    <p class="text-center font-semibold">
                        With Quick and Fast Withdrawals, you can be sure to receive your profit into your desired channel of
                        withdrawal within 5 business working days.
                    </p>
                </div>
            </div>

            <h2 data-aos="fade-up"
                class="text-3xl relative py-5 my-14 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center">
                Choose Package
            </h2>

            <div class="grid sm:grid-cols-2 md:grid-colw-3 lg:grid-cols-5 place-items-center  gap-y-7 gap-x-5 relative px-5 ">
                <div class="flex flex-col gap-5 shadow-lg items-center shadow-black/30 px-5  py-7 w-full"
                data-aos="fade-right">
                <div ><i class="fa fa-shield text-[70px] "></i></div>
                    <h2
                        class=" text-3xl text-center font-extrabold">Standard</h2>
                    <ul role="list" class="text-center">
                        <li class="py-1">Minimum: $100</li>
                        <li class="py-2">Maximum: $2000</li>
                        <li class="py-1">Minimum ROI: 3.5% daily</li>
                        <li class="py-2">Duration: 5days</li>
                        <li class="py-1">Referral Commision: 10%</li>

                       <div class="mt-14"> <link-btn-fa link="/auth/register">Get Started</link-btn-fa></div>
                    </ul>
                </div>

                <div class="flex flex-col gap-5 shadow-lg items-center shadow-black/30 px-5  py-7 w-full"
                data-aos="fade-up">
                    <div  ><i class="fa fa-pencil-square text-[70px]"></i></div>
                    <h2
                        class=" text-3xl text-center font-extrabold"> Silver</h2>
                
                    <ul role="list" class="text-center">
                        <li class="py-1">Minimum: $2,001</li>
                        <li class="py-2">Maximum: $20,000</li>
                        <li class="py-1">Minimum ROI: 6.6% daily</li>
                        <li class="py-2">Duration: 7days</li>
                        <li class="py-1">Referral Commision: 10%</li>

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

                   <div class="flex flex-col gap-5 shadow-xl items-center shadow-black/50 px-5  py-7 w-full"
                   data-aos="fade-up">
                    <div  ><i class="fa fa-lock text-[70px] "></i></div>
                    <h2
                        class=" text-3xl text-center  font-extrabold">Premuim</h2>
                    <ul role="list" class="text-center">
                        <li class="py-1">Minimum: $20,001</li>
                        <li class="py-2">Maximum: $100,000</li>
                        <li class="py-1">Minimum ROI: 10% daily</li>
                        <li class="py-2">Duration: 30days</li>
                        <li class="py-1">Referral Commision: 10%</li>


                       <div class="mt-14"> <link-btn-fa  link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div>  
                <div class="flex flex-col gap-5 shadow-lg items-center shadow-black/30 px-5  py-7 w-full"
                data-aos="fade-down">
                    <div ><i class="fa fa-bar-chart text-[50px] "></i></div>
                    <h2
                        class=" text-3xl text-center font-extrabold">Ultra</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                       &gt; $100,000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-1">Minimum: $100,001</li>
                        <!-- <li class="py-2">Maximum: $20,000</li> -->
                        <li class="py-1">Minimum ROI: 12% daily</li>
                        <li class="py-2">Duration: 90days</li>
                        <li class="py-1">Referral Commision: 10%</li>


                       <div class="mt-14"> <link-btn-fa link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div>

                <div class="flex flex-col gap-5 shadow-lg items-center shadow-black/30 px-5  py-7 w-full" data-aos="fade-left">
                    <div  ><i class="fa fa-lock text-[70px] "></i></div>
                    <h2
                        class=" text-3xl text-center  font-extrabold">Visa</h2>
                    <ul role="list" class="text-center">
                        <li class="py-1">Minimum: $100,000</li>
                        <li class="py-2">Maximum: </li>
                        <li class="py-1">Minimum ROI: 10% daily</li>
                        <li class="py-2">Duration: 14days</li>
                        <li class="py-1">Referral Commision: 10%</li>


                       <div class="mt-14"> <link-btn-fa  link="/auth/register" >Get Started</link-btn-fa></div>
                    </ul>
                </div>  


            </div>
    </div>
</section></template>

<style lang="scss" scoped></style>

<script setup>
import Cookies from 'js-cookie'
import Axios from 'axios'

useHead({
    script: [
        // {
        //     // src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
        //     // tagPosition: 'head'
        // },
        {
            src: '/main.js',
            tagPosition: "bodyClose"
        }
    ]
})

const props = defineProps(['api'])

const profileId = useCookie('profileId')

const account = ref(null)

// const url = 'https://digital-assets-b.vercel.app/'
const url = props.api

if (profileId.value == undefined) {
    useRouter().push('/auth/login')
}

const { data: res, pending, error } = await useFetch(`${url}account/details/${profileId.value}`, {
    watch: false
})
if (res.value.profile) {
    account.value = res.value
}


provide('account', account)

let sideLinks

const nav = ref([
    { title: "dashboard", link: "/user/", icon: 'fas fa-home' },
    { title: "deposit", link: "/user/deposit", icon: 'fas fa-download' },
    { title: "trading plan", link: "/user/invest", icon: 'fa-solid fa-money-bill-trend-up' },
    { title: "my plan", link: "/user/activePlan", icon: 'fa-solid fa-hand-holding-dollar' },
    { title: "withdraw", link: "/user/withdraw", icon: "fa-solid fa-circle-arrow-up" },
    { title: "transactions", link: "/user/transactions", icon: "fa-solid fa-hand-holding-dollar" },
    { title: "account", link: "/user/account", icon: "fa-solid fa-address-card" },
    { title: "referral", link: "/user/referral", icon: "fa-solid fa-down-left-and-up-right-to-center" },
    { title: "contact us", link: "/user/contact", icon: 'fa-solid fa-phone' },
    { title: "transfer", link: "/user/transfer", icon: "fa-solid fa-share" },
    { title: "logout", link: "/auth/logout", icon: "fa-solid fa-right-from-bracket" },
])


const toogleSidebar = () => {
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    aside.classList.toggle('opacity-0')
    aside.classList.toggle('!w-full')
    // main.classList.toggle('!hidden')
    // //    aside.classList.toggle('w-0')
    
}



const closeSidebar = () => {
    const aside = document.querySelector('aside')
    const main = document.querySelector('main')
    aside.classList.toggle('opacity-0')
    aside.classList.toggle('!w-full')
}
onMounted(() => {

})

</script>

<template>
    <div v-if="account" class="  border  border-transparent border-t-black main w-full  font-sans ">
        <div class="h-[65vh] bg-slate-950 rounded-bl-[70px]">
            <header class="w-full border-b border-white/10  z-[9999]  top-0">
                <div class="flex justify-end pe-8 py-3 font-thin px-5">

                    <div class="flex gap-7">
                        <button @click="toogleSidebar" class="px-3 m-4  py-1  text-white hover:text-white/30 ">
                            <i class="fa fa-bars"></i>
                        </button>
                        <div class="flex justify-end items-center  gap-3 ">
                            <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                                alt="" class="h-8 w-8 rounded-full ">
                            <p class="capitalize font-semibold text-white">{{ account.profile.user.username }}</p>
                        </div>
                    </div>
                </div>

            </header>
            <h2 class="text-white text-2xl mt-10 border-b py-1 w-[90%] lg:w-[60%] lg:ml-[30%] mx-auto">
                Welcome {{ account.profile.user.username }} 
                <sup class="text-orange-500">({{ account.profile.type }} Account)</sup></h2>

        </div>

        <aside class="max-w-[100vw] sm:max-w-sm  fixed lg:absolute z-[999] lg:z-0 bg-white top-0 h-screen lg:h-fit overflow-y-auto opacity-0 w-0 lg:opacity-100 lg:!w-full flex
                 flex-col gap-y-10 transition-all duration-500 rounded-bl-[70px]">

            <div class="max-w-[100vw] md:max-w-sm">

                <div class="bg-slate-950 h-[65vh] rounded-bl-[70px]">
                    <button class="float-right px-5 py-3 lg:hidden" @click="toogleSidebar"><i class="fa fa-close text-white"></i></button>
                    <div class=" flex flex-col justify-center items-center w-full gap-y-3 lg:h-full h-[80%] ">
                        <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                            alt="" class="h-20 w-20 rounded-full">
                        <div class="text-center">
                            <p class="capitalize font-semibold text-white">{{ account.profile.user.first_name }} {{
                                account.profile.user.last_name }}</p>
                            <small class="font-serif text-white block my-2">online</small>
                            <small
                                class="block font-mono font-bold !text-black/70 text-center  px-10 py-2.5 rounded-2xl bg-white">
                                ${{ account.balance }}</small>
                        </div>
                    </div>
                </div>

                <div class="mb-5  lg:ms-5 w-fit py-7 px-5 ">
                    <div role="list" class=" grid grid-cols-2 gap-y-3 place-items-center text-black text-center mx-2">
                        <nuxt-link :to="x.link" v-for="x, index in nav" :key="index" @click="toogleSidebar"
                            class="py-5 rounded-2xl hover:bg-slate-100 w-fit px-7 font-sans">
                            <i :class="x.icon" class="fa-lg"></i>
                            <p class="capitalize side-links  py-3 px-2 rounded-e-full">{{ x.title }}</p>
                        </nuxt-link>
                    </div>

                    <div class="border-4 bg-slate-950 text-white w-64 px-7 py-10 rounded-xl">
                        <div>
                        <h2 class="text-lg font-bold">Need Help?</h2>
                            <p class="my-5">Contact our 24/7 customer support center</p>
                            <NuxtLink to="/user/contact" 
                            class="bg-white text-black px-10 py-2 rounded-xl font-semibold">contact us</NuxtLink>
                        </div>
                    </div>

                </div>
            </div>

        </aside>

        <main class="shadow-md shadow-black/30 px-5 ms-0 -mt-[43vh] md:-mt-[37vh] bg-white md:px-6 w-full 
                lg:w-[calc(100vw-415px)]  lg:ms-[385px] relative overflow-hidden ">
            <slot></slot>

        </main>

        <!-- <footer class="relative bg-slate-900 text-white pt-8 pb-6">
            <div class="container mx-auto px-4">
                <google-translate></google-translate>


                <hr class="my-6 border-blueGray-300">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2016 - {{ year }}</span><a href="#"
                                class="text-blueGray-500 hover:text-gray-800" target="_blank"> Digital Assets</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer> -->
    </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
   background-color: rgba(2, 6, 23, 1);

}

::-webkit-scrollbar-thumb {
    
    border-radius: 40px;
    background-color: orangered;
}

aside {
    .router-link-active {
        color: white;
        // margin-left: 10px;
        // // border-inline-start-width: 4px;
        // border-inline-start-color: rgb(21 128 61);
        background-color: rgba(234, 88, 12, 1);

    }
}
</style>

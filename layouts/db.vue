<script setup>
import Cookies from 'js-cookie'
import Axios from 'axios'

useHead({
    script: [
        {
            src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
            tagPosition: 'head'
        },
        {
            src: '/main.js',
            tagPosition: "bodyClose"
        }
    ]
})


const profileId = Cookies.get('profileId')
const account = ref(null)
provide('profileId', profileId)


// const url = 'https://digital-assets-b.vercel.app/'
const url = "http://127.0.0.1:8000/"

provide('url', url)

const getAccount = async () => {


    const res = await Axios.get(`${url}account/details/${profileId}`)
    if (res.data.profile) {
        account.value = res.data
    }

}

provide('account', account)

let sideLinks

const nav = ref([
    { title: "dashboard", link: "/user/", icon: 'fas fa-home' },
    { title: "deposit", link: "/user/deposit", icon: 'fas fa-download' },
    { title: "buy plan", link: "/user/invest", icon: 'fa-solid fa-money-bill-trend-up' },
    { title: "withdraw", link: "/user/withdraw", icon: "fa-solid fa-circle-arrow-up" },
    { title: "account", link: "/user/account", icon: "fa-solid fa-address-card" },
    { title: "referral", link: "/user/referral", icon: "fa-solid fa-down-left-and-up-right-to-center" },
    { title: "contact us", link: "/user/contact", icon: 'fa-solid fa-phone' },
    { title: "logout", link: "/auth/logout", icon: "fa-solid fa-right-from-bracket" },
])

const checkUser = () => {
    if (profileId) {

    } else {
        useRouter().push('/auth/signin')
    }
}
onBeforeMount(() => {
    checkUser()
    getAccount()
})

const toogleSidebar = () => {
    const aside = document.querySelector('aside')
    aside.classList.toggle('!w-full')
    //    aside.classList.toggle('w-0')
    aside.classList.toggle('!opacity-100')
    //    aside.classList.toggle('w-0')
}


onMounted(() => {

})

</script>

<template>
    <div v-if="account" class=" min-h-screen border  border-transparent border-t-black main w-full  font-serif ">
        <header class="w-full h-16 fixed z-50 bg-black top-0">
            <div class="flex items-center justify-between h-full pe-8">

                <div class="logo hidden md:flex items-center  gap-2 mx-4">

                </div>

                <button @click="toogleSidebar"
                    class="px-3 m-4 block md:hidden ring-1 py-1 rounded-lg hover:ring-4 hover:ring-offset-1 text-green-700">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="flex justify-end items-center  gap-3 ">
                    <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                        alt="" class="h-10 w-10 rounded-full ring ring-green-400">
                    <p class="capitalize font-semibold text-green-500">{{ account.profile.user.username }}</p>
                </div>
            </div>
        </header>

        <div class="mt-12 ">
            <aside class="bg-black h-[calc(100vh-64px)] max-w-md w-0 opacity-0 md:!w-[300px] md:opacity-100 z-40
                flex flex-col gap-y-10 fixed overflow-hidden overflow-y-scroll transition-all duration-500">
                <div class="flex  w-full gap-3 mt-5 mx-3">
                    <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                        alt="" class="h-10 w-10 rounded-full">
                    <div class="text-green-500">
                        <p class="capitalize font-semibold">{{ account.profile.user.first_name }} {{
                            account.profile.user.last_name }}</p>
                        <small>{{ account.profile.user.username }}</small>
                        <small class="block font-sans font-bold text-green-700">${{ account.balance }}</small>
                    </div>
                </div>
                <div class="mb-5">
                    <div role="list" class="mt-5 grid grid-cols-2 gap-y-7 gap-x-2 text-green-700 text-center mx-2">
                        <nuxt-link :to="x.link" v-for="x, index in nav" :key="index" @click="toogleSidebar"
                            class="py-3 rounded-2xl hover:bg-green-300">
                            <i :class="x.icon" class="fa-lg"></i>
                            <p class="capitalize side-links  py-3 px-2 rounded-e-full">{{ x.title }}</p>
                        </nuxt-link>
                    </div>

                </div>
            </aside>
            <main class="w-screen ms-0 px-4 sm:px-6 md:w-[calc(100vw-300px)] md:ms-[300px] relative overflow-hidden">
                <slot></slot>
                <footer class="relative bg-black text-green-700 pt-8 pb-6">
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
                </footer>
            </main>

        </div>

    </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background-color: green;

}

::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 40px;

}

aside {
    .router-link-active {
        color: rgb(34 197 94);
        // margin-left: 10px;
        // // border-inline-start-width: 4px;
        // border-inline-start-color: rgb(21 128 61);
        background-color: rgba(21, 128, 61, 0.5);

    }
}
</style>

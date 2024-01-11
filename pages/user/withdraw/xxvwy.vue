<script setup>
definePageMeta({
    layout: "db",
});
const payMethod = [
    {name:'usdt', min: 10, max: 50000, duration: 48},
    {name:'ethereum', min: 10, max: 50000, duration: 48},
    {name:'bitcoin', min: 10, max: 50000, duration: 48},
    // {name:'litcoin', min: 10, max: 50000, duration: 48},
]
const withdrawal_charges = ref(0)
const account = inject("account");
const props = defineProps(['api'])
const url = props.api

const {data: res, error} = await useFetch(`${url}manager/charges/`,{
    method: 'get',
    watch: false,
})
if(res.value.charges){
    withdrawal_charges.value = res.value.charges
}
// const withdraw_success = ref(false)
// const form = reactive({
//     profileId: account.value.profile.id,
//     amount: '',
//     wallet: "",
//     password: "",
//     channel: "BTC",
// });


</script>

<template>
    <div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10 py-14">
            <div 
            class="border w-full bg-slate-900 text-white relative min-h-[250px] px-7 transition-all duration-200 hover:scale-110"
             v-for="coin in payMethod">
                <div class="absolute bg-transparent top-0 left-0 flex justify-center w-full">
                    <p class="bg-white text-black w-fit py-1 px-10 font-semibold rounded-b-lg">{{ coin.name.toUpperCase() }}</p>
                </div>
                <div class="mt-5 py-20 mb-5 border-b border-slate-100/50">
                    <img src="~/assets/media/wallet.png" class="w-20 mx-auto object-fit"/>
                </div>
               
                <div class="text-center">
                    <div class="mb-5">
                        <small>Minimum withdrawable amount</small><br>
                        <h2 class="font-bold text-xl font-mono"><i class="fa fa-dollar-sign"></i>10</h2>
                    </div>
                    <div class="mb-7">
                        <small>Maximum withdrawable amount</small><br>
                        <h2 class="font-bold text-xl font-mono"><i class="fa fa-dollar-sign"></i>50,000</h2>
                    </div>
                    <div class="mb-7">
                        <h2 class=" text-lg font-sans">Charge Type: <span class="font-semibold">Percentage</span></h2>
                    </div>
                    <div class="mb-7">
                        <h2 class=" text-lg font-sans">Charge Amount: <span class="font-semibold">{{withdrawal_charges}}%</span></h2>
                    </div>
                    <div class="mb-7">
                        <h2 class=" text-lg font-sans">Duration: 
                        <span class="font-semibold"> within 48 hours of request</span></h2>
                    </div>
                </div>
                <div class="flex justify-center">
                    <NuxtLink :to="`/user/withdraw/${coin.name}`" class="py-2 my-7 px-7 bg-white text-slate-900 font-semibold rounded-lg">
                    <i class="fa fa-plus"></i>&nbsp;<span>Request Withdrawal</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

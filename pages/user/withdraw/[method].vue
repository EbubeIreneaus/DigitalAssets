<template>
    <div class="py-10">
        <div class="max-w-lg w-full py-10 px-5 md:px-10 shadow-md shadow-black/40 mx-auto">
            <p class="w-full py-3 bg-green-300/50 text-green-500 px-3 my-5 text-sm rounded" v-if="email_success">
                <i class="fa fa-thumbs-up me-3"></i>
                OTP have been sent to your email
                <i class="float-right fa fa-close" @click="email_success = false"></i>
            </p>
            <div class="text-xs border w-fit py-2 px-8 rounded-full bg-green-300/70 mb-7">
                <span class="bg-green-600/80 px-5 py-[3px] text-white rounded-full">Your payment method</span>
                &nbsp; <span class="capitalize text-sm font-semibold">{{ channel }}</span>
            </div>

            <div class="text-black/60 mb-7">
                <label class="font-semibold px-1">Enter Amount to withdraw($)</label>
                <input type="number" placeholder="Enter Amount" class="block outline-none py-3 border px-5 w-full mt-3" />
            </div>
            <div class="text-black/60 mb-7">
                <label class="font-semibold w-full px-1">Enter OTP
                    <span @click="withdrawOTP($event)"
                        class="float-right font-normal bg-orange-600 hover:bg-slate-950 text-white px-5 py-1.5 rounded">
                        <i class="fa fa-envelope"></i> Request OTP
                    </span>
                </label>
                <input type="number" placeholder="Enter OTP" class="block outline-none py-3 border px-5 w-full mt-5" />
                <small class="px-3">OTP will be sent to your email when you request</small>
            </div>
            <div>
                <button class="px-10 py-3 bg-orange-600 hover:bg-slate-950 text-white rounded">Complete Request</button>
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: "db"
})
const account = inject("account");
const props = defineProps(['api'])
const url = props.api
const email_success = ref(false)
const { method: channel } = useRoute().params

async function withdrawOTP(e) {
    e.target.innerText = 'requesting...'
    const { data: res, pending, error } = await useFetch(`${url}/transaction/otp/`, {
        method: 'get',
        params: { 'profileId': account.value.profile.id }
    })
    if (res.value.status == 'success') {
        const email_success = true
        
    }
    if (error.value) {
        alert('could not send you mail at the moment \n status: Server Error')
    }
    
    e.target.innerHTML = '<i class="fa fa-envelope"></i> Request OTP'
}
</script>

<style lang="scss" scoped></style>
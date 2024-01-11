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
                <input type="number" placeholder="Enter Amount" v-model="form.amount"
                    class="block outline-none py-3 border px-5 w-full mt-3" />
            </div>
            <div class="text-black/60 mb-7">
                <label class="font-semibold px-1">Network</label>
                <select v-model="net_work" class="block outline-none py-3 border px-5 w-full mt-3">
                    <option v-for="network in networkList[channel]" :value="network">{{ network }}</option>
                </select>
            </div>
            <div class="text-black/60 mb-7">
                <label class="font-semibold px-1">Enter Wallet Address</label>
                <input type="text" placeholder="Wallet Address" v-model="form.address"
                    class="block outline-none py-3 border px-5 w-full mt-3" />
            </div>
            <div class="text-black/60 mb-7">
                <label class="font-semibold w-full px-1">Enter OTP
                    <span @click="withdrawOTP($event)"
                        class="float-right font-normal bg-orange-600 hover:bg-slate-950 text-white px-5 py-1.5 rounded">
                        <i class="fa fa-envelope"></i> Request OTP
                    </span>
                </label>
                <input type="text" maxlength="5" placeholder="Enter OTP"
                    class="block outline-none py-3 border px-5 w-full mt-5" />
                <small class="px-3">OTP will be sent to your email when you request</small>
            </div>
            <h2 class="font-semibold mb-3">Withdraw Charges: <span class="font-mono text-red-500">{{charges.charges}}%</span></h2>
            <div>
                <button @click="initiate($event)"
                    class="px-10 py-3 bg-orange-600 hover:bg-slate-950 text-white rounded">Complete Request</button>
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
const networkList = {
    'usdt': ['Tron TRC20', 'BNB SMART CHAIN (BEP 20)', 'ETH (ERC20)'],
    'ethereum': ['ETH', 'BNB SMART CHAIN (BEP 20)'],
    'bitcoin': ['BITCOIN', 'Ethereum(ERC20)', 'BNB SMART CHAIN (BEP 20)'],
}
const { method: channel } = useRoute().params

const withdrawOTP = async (e) => {
    e.target.innerText = 'requesting...'
    const { data: res, pending, error } = await useFetch(`${url}transaction/otp/`, {
        method: 'get',
        params: { 'profileId': account.value.profile.id },
        watch: false,
    })
    if (res.value.status == 'success') {
        const email_success = true
    }
    if (error.value) {
        alert('could not send you mail at the moment \n status: Server Error')
    }

    e.target.innerHTML = '<i class="fa fa-envelope"></i> Request OTP'
}
const net_work = ref('')
const form = reactive({
    amount: '',
    address: '',
    channel: channel.toUpperCase(),
    profileId: account.value.profile.id

})
const validate_withdrawal = () => {
    if (form.amount == '' || form.channel == '') {
        alert("please fill in the form completely before initiating transaction")
        return false
    }
    if (account.value.balance < form.amount) {
        alert("insufficient funds on your account balance")
        return false
    }
    return true
}

const initiate = async (e) => {
    if (!validate_withdrawal()) {
        return false;
    }
    form.channel += '-' + net_work.value

    e.target.innerText = "please wait..."
    e.target.disabled = true

    const { data: res, error: error } = await useFetch(`${url}transaction/withdraw/`, {
        method: "post",
        watch: false,
        body: form,
        key: new Date().getTime().toString(),
    });

    if (res.value) {
        if (res.value.status == "success") {
            alert("Withdrawl initiated successfully!!");
            useRouter().push('/user/')
        } else {
            alert("could not initiate this transaction, Error details \n" + res.value.code);
            sbutton.disabled = false;
        }
    } else {
        alert("could not initiate this transaction at this moment try again later!!!");
        sbutton.disabled = false;
    }
}

const { data: charges, error: error } = await useFetch(`${url}manager/charges/`)

</script>

<style lang="scss" scoped></style>
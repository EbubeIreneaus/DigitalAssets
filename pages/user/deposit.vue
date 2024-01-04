<template>
    <div>
        <p v-if="payment_confirmed"
        class="text-sm px-5 md:px-7 border py-3 bg-green-400 text-white/70 rounded-md flex items-center gap-5 w-fit my-1">
            <i class="fa fa-thumbs-up"></i>
            <span> Account fund successfuly, please wait for the system to validate you transaction</span>
            <i class="fa fa-close" @click="payment_confirmed = false"></i>
        </p>

        <div class="py-10 flex md:flex-row flex-col">
            <div class="flex-grow">
                <div class="">
                    <label for="">Enter Amount(USD):</label>
                    <input type="number" min="100" step="50" max="100000000"
                        class="appearance-none w-full py-2 border border-slate-200 outline-none rounded-lg
                                             ps-4 font-mono font-bold focus:border-4 invalid:border-red-500 invalid:!border" placeholder="500" v-model="deposit.amount">
                </div>
                <div class="my-10">
                    <p class="font-bold text-xl my-3">Choose Payment Method From THe List Below:</p>

                    <div class="grid md:grid-cols-2 gap-y-7 gap-x-3">
                        <label class="flex items-center border border-black justify-between h-24 px-5 max-w-sm "
                            :class="{ 'border-2 border-slate-950  rounded-lg': deposit.channel == x.name }"
                            v-for="x in paymentMethod">
                            <input type="radio" class="hidden peer" :value="x.name" v-model="deposit.channel">
                            <p class="font-semibold">{{ x.name }}</p>
                            <i
                                class="fas fa-check-circle text-transparent border border-black rounded-full peer-checked:text-black"></i>
                        </label>

                    </div>
                </div>
            </div>

            <div class="max-w-sm w-full">
                <div class="font-bold mx-5 px-3 shadow-sm shadow-black py-10 overflow-hidden">
                    <h1 class="text-2xl mb-5 text-orange-500 font-extrabold">Summary</h1>
                    <div class="flex justify-between ">
                        <p>Amount:</p>
                        <p class="font-mono sm:pe-3">{{ format_amount(deposit.amount) }}</p>
                    </div><br>
                    <div class="flex justify-between ">
                        <p>Channel:</p>
                        <p class="sm:pe-3">{{ deposit.channel }}</p>
                    </div>
                    <button type="button" class="bg-orange-600 text-white w-full py-5 rounded mt-5 hover:bg-slate-900 relative group
                                            disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                        @click="initiate($event)">
                        <i class="fas fa-spinner invisible group-disabled:visible animate-spin "></i>Make Deposit
                    </button>
                </div>
            </div>
            <modal :visible="deposit_success">
                <div class="">
                    <div>
                        <div class="flex rounded-ld text-xsm border rounded-2xl  py-2 px-3 bg-slate-100">
                            <small class="px-3 rounded-xl text-xsm font-mono bg-black text-green-500">
                                Your payment method</small>
                            <small class="px-3 rounded-xl text-xsm font-mono ">
                                {{ depo_modal.channel }}</small>
                        </div>

                        <p class="my-10 font-semibold">You are to make payment of
                            {{ format_amount(depo_modal.amount) }} using your selected payment method.</p>

                        <div class="mb-5">
                            <label for="">{{ depo_modal.channel }} Address</label>
                            <div class="flex items-center border my-2">
                                <input type="text" v-model="depo_modal.wallet_address" id="address_field" readonly
                                    class="block w-full py-2 border-0 outline-0 px-2">
                                <button class="px-4 border py-2 bg-slate-100" @click="copy_to_clipboard()"><i
                                        class="fa fa-copy"></i></button>
                            </div>
                            <small>Network Type: {{ depo_modal.network_type }}</small>
                        </div>

                        <div>
                            <label for="">Upload Payment Proof after payment</label>
                            <div class="flex items-center border my-2 py-2 px-3">
                                <input type="file" readonly class="block w-full py-2 border-0 outline-0" id="payment_file">

                            </div>
                            <button class="ring ring-black py-3 px-14 " @click="confirm_payment($event)">Confirm
                                Payment</button>



                        </div>
                    </div>
                </div>

            </modal>

            <alert :visible="copied_success">copied to clipboard
                <i class="fas fa-check-circle "></i>
            </alert>

        </div>
    </div>
</template>

<script setup>
import Axios from 'axios'
definePageMeta({
    layout: 'db'
})
const props = defineProps(['api'])
const url = props.api
const account = inject("account")

const paymentMethod = reactive([
    { "name": "BTC", "address": "1Jr8ccXSnWroUS16FGTb8kkxskPQPDdcNJ", 'network': 'BITCOIN' },
    { "name": "TETHER USDT", "address": "TDTNc7pDy92C912xwKBFVGvY7o1ndTnDgY", 'network': 'TRC 20' },
    { "name": "ETHEREUM", "address": "0x9658244393da3C49A542978a151F6b41385B68c5", 'network': 'ETH' },
    { "name": "BNB", "address": "0xaf21a952416affee925deb5e7dc277a4e379a6e1", 'network': 'BNB' },
])
const deposit_success = ref(false)
const deposit_wallet = ref(null)
const deposit_channel = ref('')
const copied_success = ref(false)
const payment_confirmed = ref(false)

const depo_modal = reactive({
    wallet_address: '',
    network_type: '',
    channel: '',
    amount: '',
    transactId: '',
})

const deposit = reactive({
    channel: "BTC",
    amount: '',
    wallet: ''
})

const format_amount = (amount) => {
    let formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        currency: "USD",
        style: "currency"

    })

    return formatter.format(amount)
}
const change_wallet_address = () => {
    for (let index = 0; index < paymentMethod.length; index++) {
        if (paymentMethod[index].name == deposit.channel) {
            deposit.wallet = paymentMethod[index].address
            depo_modal.wallet_address = paymentMethod[index].address
            depo_modal.network_type = paymentMethod[index].network
            depo_modal.amount = deposit.amount
            depo_modal.channel = paymentMethod[index].name
        }
    }
}
const initiate = async (e) => {
    change_wallet_address()
    e.target.disabled = true

    const res = await Axios.post(`${url}transaction/deposit/`, deposit, {
        headers: {
            "profile-id": account.value.profile.id,
        }
    })

    console.log(res);
    if (res.data) {
        if (res.data.status == 'success') {
            let channel = res.data.channel
            depo_modal.transactId = res.data.id
            deposit_success.value = true
            deposit.amount = ''
            deposit.channel = 'BTC'
            e.target.disabled = false
        } else {
            alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled = false
        }

    } else {
        alert("could not initiate this transaction, Try again letter!!!")
        e.target.disabled = false
    }

}

const copy_to_clipboard = (e) => {
    let ad_F = document.getElementById('address_field')
    ad_F.select()
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            if (window.navigator.clipboard.writeText(ad_F.value)) {
                copied_success.value = true

                setTimeout(() => {
                    copied_success.value = false
                }, 2000);
            }
        } else {

        }
    });
};

const confirm_payment = async (e) => {
    e.target.disabled = true
    e.target.innerText = 'please wait...'
    const pay_f = document.getElementById('payment_file')
    const form = new FormData()
    form.append('file', pay_f.files[0])
    form.append('id', depo_modal.transactId)
    form.append('amount', depo_modal.amount)
    form.append('channel', depo_modal.channel)

    const res = await Axios.post(`${url}transaction/pay_slip/`, form, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
    if (res.data.status == "success") {
        deposit_success.value = false
        payment_confirmed.value = true
        deposit.amount = ''
        deposit.channel = 'BTC'
        deposit.wallet = ''
        return
    }
    e.target.disabled = false
    e.target.innerText = 'Confirm'
    alert("We could not confirm your payment at the moment, try reaching us via email or send a DM via contact page!!")

}


</script>

<style lang="scss" scoped></style>
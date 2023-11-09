<template>
    <div class="py-10 flex md:flex-row flex-col">
        <div class="flex-grow">
            <div class="">
                <label for="">Enter Amount(USD):</label>
                <input type="number" min="100" step="50" max="100000000" class="appearance-none w-full py-2 border border-slate-200 outline-none rounded-lg
                                     ps-4 font-mono font-bold focus:border-4 invalid:border-red-500 invalid:!border"
                    placeholder="500" v-model="deposit.amount">
            </div>
            <div class="my-10">
                <p class="font-bold text-xl my-3">Choose Payment Method From THe List Below:</p>

                <div class="grid md:grid-cols-2 gap-y-7 gap-x-3">
                    <label class="flex items-center border border-black justify-between h-24 px-5 max-w-sm "
                        :class="{ 'ring-2 ring-green-600 border-0 rounded-lg': deposit.channel == x.name }"
                        v-for="x in paymentMethod">
                        <input type="radio" class="hidden peer" :value="x.name" v-model="deposit.channel">
                        <p class="font-semibold">{{ x.name }}</p>
                        <i
                            class="fas fa-check-circle text-transparent border border-black rounded-full peer-checked:text-green-800"></i>
                    </label>

                </div>
            </div>
        </div>

        <div class="max-w-sm w-full">
            <div class="font-bold mx-5 px-3 shadow-sm shadow-black py-10 overflow-hidden">
                <h1 class="text-2xl mb-5 text-green-500 font-extrabold">Summary</h1>
                <div class="flex justify-between ">
                    <p>Amount:</p>
                    <p class="font-mono sm:pe-3">{{ format_amount(deposit.amount) }}</p>
                </div><br>
                <div class="flex justify-between ">
                    <p>Channel:</p>
                    <p class="sm:pe-3">{{ deposit.channel }}</p>
                </div>
                <button type="button" class="ring ring-black w-full py-5 mt-5 hover:ring-green-600 relative group
                                    disabled:cursor-not-allowed disabled:ring-0 disabled:border" @click="initiate($event)">
                    <i class="fas fa-spinner invisible group-disabled:visible animate-spin "></i>Make Deposit
                </button>
            </div>
        </div>
        <modal :visible="deposit_success">
            <div>
                <div class="flex gap-5 items-center ">
                    <img src="~/assets/media/successful.png" alt="" class="w-14 h-14 object-cover">
                    <h2 class="text-2xl font-bold">Deposit Initiated Succesfull</h2>
                </div>
                <div>
                    <p>Kindly make payment to the {{ deposit_channel }} wallet address below</p>
                    <textarea @click="copy_to_clipboard($event)" rows="2" readonly class="w-full outline-none border p-3" v-model="deposit_wallet"></textarea>
                    <p class="text-sm font-bold italic">A summary of this transaction have been sent to your email.
                        send or email us a proof of payment and the id of this transaction <small class="text-xsm">
                            see dashboard for transaction details</small></p>
                </div>
            </div>
        </modal>

        <alert :visible="copied_success">copied to clipboard 
         <i class="fas fa-check-circle "></i>
         </alert>
        
    </div>
</template>

<script setup>
import Axios from 'axios'
definePageMeta({
    layout: 'db'
})

const url = inject('url')
const account = inject("account")

const paymentMethod = reactive([
    { "name": "BTC", "address": "1Jr8ccXSnWroUS16FGTb8kkxskPQPDdcNJ" },
    { "name": "TETHER USDT", "address": "TDTNc7pDy92C912xwKBFVGvY7o1ndTnDgY" },
    { "name": "ETHEREUM", "address": "0x9658244393da3C49A542978a151F6b41385B68c5" },
    { "name": "BNB", "address": "0xaf21a952416affee925deb5e7dc277a4e379a6e1" },
])
const deposit_success = ref(false)
const deposit_wallet = ref(null)
const deposit_channel = ref('')
const copied_success = ref(false)

const deposit = reactive({
    channel: "BTC",
    amount: '',
    wallet:''
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
            deposit_channel.value = channel
            deposit_wallet.value = res.data.address
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
    e.target.select();
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            if (window.navigator.clipboard.writeText(e.target.value)) {
               copied_success.value = true
              
                setTimeout(() => {
                    copied_success.value = false
                }, 2000);
            }
        } else {

        }
    });
};
</script>

<style lang="scss" scoped></style>
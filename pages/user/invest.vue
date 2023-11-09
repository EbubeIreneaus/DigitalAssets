<script  setup>
definePageMeta({
    layout: "db",
});
const account = inject('account')
const url = inject('url')

const invest_success = ref(false)
const invest = reactive({
    profileId: account.value.profile.id,
    plan: "standard",
    amount: null,
});
const min_amount = computed(() => {
    let min;
    switch (invest.plan) {
        case "standard":
            min = 100;
            break;
        case "silver":
            min = 2001;
            break;
        case "premium":
            min = 20001;
            break;
        case "ultra":
            min = 100001;
            break;
        default:
            min = 100;
            break;
    }
    return min;
});
const max_amount = computed(() => {
    let max;
    switch (invest.plan) {
        case "standard":
            max = 2000;
            break;
        case "silver":
            max = 20000;
            break;
        case "premium":
            max = 100000;
            break;
        case "ultra":
            max = 1000000000;
            break;

        default:
            max = 2000;
            break;
    }
    return max;
});
const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
};
const roi = computed(() => {
    let pct = 0;
    if (invest.amount == null) {
        pct = 0;
    } else {
        if (
            invest.plan == "standard" &&
            invest.amount >= 100 &&
            invest.amount <= 2000
        ) {
            pct = 0.25 * invest.amount;
        } else if (
            invest.plan == "silver" &&
            invest.amount > 2000 &&
            invest.amount <= 20000
        ) {
            pct = 0.599 * invest.amount;
        } else if (
            invest.plan == "premium" &&
            invest.amount > 20000 &&
            invest.amount <= 100000
        ) {
            pct = 3.6 * invest.amount;
        } else if (
            invest.plan == "ultra" &&
            invest.amount > 100000 &&
            invest.amount < 100000000
        ) {
            pct = 9 * invest.amount;
        } 
    }
    return pct;
});
const total_return = computed(() => {
    if (roi.value == 0) {
        return 0;
    } else {
        return roi.value + invest.amount;
    }
});


const copyAddress = (e) => {
    e.target.select();
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            if (window.navigator.clipboard.writeText(wallet_address.value)) {
                let alert = document.getElementsByClassName("alert")[0];
                alert.classList.add("alert-show");
                setTimeout(() => {
                    alert.classList.remove("alert-show");
                }, 2000);
            }
        } else {

        }
    });
};

const initiate = async (e) => {
    e.target.disabled =true
   
    const {data: res, error: error} = await useFetch(`${url}transaction/invest/`, {
        method: 'post', watch: false, body: invest, key: new Date().getTime().toString()
    })

    if(res.value){
        if(res.value.status == 'success'){
            invest_success.value = true
            e.target.disabled = false
             invest.amount = ''
        }else{
            alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled =false
        }
        
    }else{
        alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled =false
    }

}

</script>

<template>
    <div>
        <div class="grid md:grid-cols-2 py-5 gap-7">
            <div class="w-full px-3 py-5 shadow-xl ">
                <div class="flex justify-between">
                    <p>Balance</p>
                    <p>{{ format_amount(account.balance) }}</p>
                </div>
                <div class="my-5">
                    <img src="~/assets/media/logo.jpg" alt="" class="shadow-md h-[200px] w-full object-cover" />
                </div>

                <div>
                    <div class="flex flex-col gap-2">
                        <label class="flex  px-2 py-2 rounded-lg ring-1 ring-black"
                            :class="{ 'ring-4 ring-green-600': invest.plan == 'standard' }">
                            <input type="radio" class="peer hidden" value="standard" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring ring-green-700 h-fit rounded-full text-transparent peer-checked:text-green-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Standard</h3>
                                    <p class="font-thin">$100-$2000</p>
                                </div>
                                <p class="font-thin font-mono">+25% in 5days</p>
                            </div>
                        </label>

                        <label class="flex b px-2 py-2 rounded-lg ring-1 ring-black"
                            :class="{ 'ring-4 ring-green-600': invest.plan == 'silver' }">
                            <input type="radio" class="peer hidden" value="silver" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring ring-green-700 h-fit rounded-full 
                                text-transparent peer-checked:text-green-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Silver</h3>
                                    <p class="font-thin">$2001-$20,000</p>
                                </div>
                                <p class="font-thin font-mono">+59.9% in 7days</p>
                            </div>
                        </label>

                        <label class="flex b px-2 py-2 rounded-lg ring-1 ring-black"
                            :class="{ 'ring-4 ring-green-600': invest.plan == 'premium' }">
                            <input type="radio" class="peer hidden" value="premium" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring ring-green-700 h-fit rounded-full 
                                text-transparent peer-checked:text-green-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Premium</h3>
                                    <p class="font-thin">$20,001-$100,000</p>
                                </div>
                                <p class="font-thin font-mono">+360% in 30days</p>
                            </div>
                        </label>

                        <label class="flex  px-2 py-2 rounded-lg ring-1 ring-black"
                            :class="{ 'ring-4 ring-green-600': invest.plan == 'ultra' }">
                            <input type="radio" class="peer hidden" value="ultra" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring ring-green-700 h-fit rounded-full text-transparent 
                                peer-checked:text-green-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Ultra</h3>
                                    <p class="font-thin">&gt; $100,000</p>
                                </div>
                                <p class="font-thin font-mono">+900% in 90days</p>
                            </div>
                        </label>
<!-- 
                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'pro' }">
                            <input type="radio" class="peer hidden" value="pro" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Trading Pro</h3>
                                    <p class="font-thin">$15000 - $500,000</p>
                                </div>
                                <p class="font-thin font-mono">+100% per complete cycle</p>
                            </div>
                        </label> -->
                    </div>
                </div>
            </div>

            <div class="w-full py-5 shadow-xl px-7">
                <div class="position-relative">
                    <p>Payment Details</p>
                    <p class="text-sm">
                        Complete your payment by providing your payment details
                    </p>
                    <div class="my-2">
                        <label for="">Amount(USD):</label>
                        <input type="number" v-model="invest.amount" step="50" :min="min_amount" :max="max_amount"
                            :placeholder="min_amount"
                            class="appearance-none w-full py-2 my-2 px-3 font-mono border outline-none 
                            out-of-range:ring-1 out-of-range:ring-red-500 rounded-lg" />
                    </div>
                    <div class="my-2">
                        <label for="">Pay with:</label>
                        <select
                            class="appearance-none w-full py-2  my-2 px-3 font-mono border outline-none rounded-lg">
                            <option selected>Account Balance</option>
                        </select>
                    </div>
                    <div>
                        <p class="flex justify-between my-4 text-sm">
                            <span>Amount</span>
                            <span class="font-mono">{{ format_amount(invest.amount) }}</span>
                        </p>
                        <p class="flex justify-between text-sm">
                            <span>ROI</span>
                            <span class="font-mono">{{ format_amount(roi) }}</span>
                        </p>
                        <p class="flex justify-between my-4 text-sm">
                            <span>Total Return</span>
                            <span class="font-mono">{{ format_amount(total_return) }}</span>
                        </p>
                    </div>

                    <button type="button" class="ring w-full py-2 mt-3 hover:ring-primary-hover relative group
                    disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                        @click="initiate($event)">
                        <i class="fas fa-spinner invisible group-disabled:visible animate-spin "></i> Procceed
                    </button>
                </div>
            </div>
        </div>
        <modal :visible="invest_success">
            <div>
                <div class="flex gap-5 items-center ">
                    <img src="~/assets/media/successful.png" alt="" class="w-14 h-14 object-cover">
                    <h2 class="text-2xl font-bold">Investment Initiated Succesfull</h2>
                </div>
                <div>
                        <p class="text-sm font-bold italic">A summary of this transaction have been sent to your email.
                         <small class="text-xsm">see dashboard for transaction details</small></p>
                </div>
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
.alert {
    transform: translateX(100vw);
    opacity: 0;
    transition: all 0.5s ease;
    display: none;
}

.alert-show {
    transform: translateX(0) !important;
    opacity: 1 !important;
    display: block;
}
</style>

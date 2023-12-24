<script  setup>
definePageMeta({
    layout: "db",
});
const props = defineProps(['api'])
const plans = ref({
    'standard': { 'plan': 'standard', 'min': 100, 'max': 2000, 'duration': '5 days', 'roi': 3.5, 'bonus': 0 },
    'silver': { 'plan': 'silver', 'min': 2001, 'max': 20000, 'duration': '1 weeks', 'roi': 6.6, 'bonus': 0 },
    'premium': { 'plan': 'premium', 'min': 20001, 'max': 100000, 'duration': '1 months', 'roi': 10, 'bonus': 0 },
    'ultra': { 'plan': 'ultra', 'min': 100001, 'max': 1000000, 'duration': '3 months', 'roi': 12, 'bonus': 0 },
    'visa': { 'plan': 'visa', 'min': 1000001, 'max': 100000000, 'duration': '6 months', 'roi': 20, 'bonus': 20 },
})
const account = inject('account')
const url = props.api

const invest_success = ref(false)
const invest = reactive({
    profileId: account.value.profile.id,
    plan: "visa",
    amount: 100,
});

const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
};

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
    e.target.disabled = true

    const { data: res, error: error } = await useFetch(`${url}transaction/invest/`, {
        method: 'post', watch: false, body: invest, key: new Date().getTime().toString()
    })

    if (res.value) {
        if (res.value.status == 'success') {
            invest_success.value = true
            e.target.disabled = false
            invest.amount = ''
        } else {
            alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled = false
        }

    } else {
        alert("could not initiate this transaction, Try again letter!!!")
        e.target.disabled = false
    }

}


</script>

<template>
    <div>
        <div class="flex flex-col md:flex-row py-5 gap-7">
            <div class="w-full flex-grow px-5 py-5 shadow-xl  ">
                <select v-model="invest.plan" class=" appearance-none outline-none border py-3 w-full ps-3 font-semibold">
                    <option value="visa">Visa Plan</option>
                    <option value="ultra">Ultra Plan</option>
                    <option value="premium">Premium Plan</option>
                    <option value="silver">Silver Plan</option>
                    <option value="standard">Standard Plan</option>
                </select>

                <div class="py-10 my-10">
                    <p>Choose Quick Amount to Invest</p><br>
                    <div class="flex gap-5 flex-wrap">
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 100">
                            <i class="fa fa-dollar-sign"></i>100
                        </button>
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 250">
                            <i class="fa fa-dollar-sign"></i>250
                        </button>
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 500">
                            <i class="fa fa-dollar-sign"></i>500
                        </button>
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 1000">
                            <i class="fa fa-dollar-sign"></i>1000
                        </button>
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 1500">
                            <i class="fa fa-dollar-sign"></i>1500
                        </button>
                        <button class="px-7 py-3 rounded-md bg-slate-200 font-mono" @click="invest.amount = 2000">
                            <i class="fa fa-dollar-sign"></i>2000
                        </button>

                    </div>
                </div>

                <div class="mb-10">
                    <p>Or Enter Your Amount</p>
                    <input type="text" v-model="invest.amount" class="w-full py-3 mt-2 outline-none border font-mono font-semibold ps-3"/>
                </div>

                <div>
                    <p>Choose Payment Method</p>
                    <div class="flex items-center gap-5 border py-3 px-5 bg-slate-300 rounded-lg mt-3">
                        <i class="fa fa-wallet"></i>
                        <span>Account Balance</span>
                    </div>
                </div>

            </div>


            <div class="max-w-sm w-full py-5 shadow-xl px-7 text-black/50 font-sans font-semibold">
                <div>
                    <p>Your Investment Details</p>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-5 py-7">
                        <div class="">
                            <small>Name of Plan</small><br>
                            <small class="capitalize text-black/80">{{ invest.plan }} plan</small>
                        </div>
                        <div class="">
                            <small>Plan Price</small><br>
                            <small class="capitalize text-black/80">{{ format_amount(2000) }}</small>
                        </div>
                        <div class="">
                            <small>Duration</small><br>
                            <small class="capitalize text-black/80">{{ plans[invest.plan].duration }}</small>
                        </div>
                        <div class="">
                            <small>Profit</small><br>
                            <small class="capitalize text-black/80">{{ plans[invest.plan].roi }}% daily</small>
                        </div>
                        <div class="">
                            <small>Minimum Deposit</small><br>
                            <small class="capitalize text-black/80">{{ format_amount(plans[invest.plan].min) }}</small>
                        </div>
                        <div class="">
                            <small>Maximum Deposit</small><br>
                            <small class="capitalize text-black/80">{{ format_amount(plans[invest.plan].max) }}</small>
                        </div>
                        <div class="">
                            <small>Minimum Return</small><br>
                            <small class="capitalize text-black/80">{{ plans[invest.plan].roi }}%</small>
                        </div>
                        <div class="">
                            <small>Maximum Return</small><br>
                            <small class="capitalize text-black/80">{{ plans[invest.plan].roi }}% x {{ plans[invest.plan].duration }}</small>
                        </div>
                        <div class="">
                            <small>Bonus</small><br>
                            <small class="capitalize text-black/80">{{ format_amount(plans[invest.plan].bonus) }}</small>
                        </div>
                    </div>
                    <div class="my-7">
                        <hr>
                        <div class="flex justify-between py-10 ">
                            <small>Payment Method:</small>
                            <small class="text-black/80">Account Balance</small>
                        </div>
                        <hr>
                    </div>
                </div>

                <button type="button" class="w-44 py-3 bg-orange-500 mx-auto relative group text-white
                    disabled:cursor-not-allowed disabled:ring-0 disabled:border" @click="initiate($event)">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin "></i>confirm &amp; invest
                </button>
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
                        <small class="text-xsm">see dashboard for transaction details</small>
                    </p>
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

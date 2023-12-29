<template>
    <div class="min-h-[400px]">
        <div v-if="plan" class="py-7 md:px-10 text-black/70">
            <div class="mb-8">
                <h2 class="text-3xl font-semibold capitalize">{{ plan.plan }} - {{ plans_arr[plan.plan].roi }}% Daily for {{ plans_arr[plan.plan].duration }}</h2>
            </div>
            <hr>
            <div>
                <p class="font-bold text-lg">Plan Information</p>
                <div class="flex gap-3 lg:gap-7 mt-4">
                    <div>
                        <h2 class="text-lg font-mono font-bold">{{ format_amount(plan.amount) }}</h2>
                        <p>Principal</p>
                    </div>
                    +
                    <div>
                        <h2 class="text-lg font-mono font-bold text-green-400">{{ format_amount(0) }}</h2>
                        <p>Profit</p>
                    </div>
                    <div>
                        <h2 class="text-lg font-mono font-bold text-green-400">{{ plan.amount }}</h2>
                        <p>Total Return</p>
                    </div>
                </div>  
                <div class="grid  gap-x-2 gap-y-5 py-7">
                        <div class="">
                            <small>Duration</small><br>
                            <small class="capitalize text-black/80">{{ plans_arr[plan.plan].duration }} plan</small>
                        </div>
                        <div class="">
                            <small>Start Date</small><br>
                            <small class="capitalize text-black/80">{{ new Date(plan.start_date).toLocaleString() }}</small>
                        </div>
                        <div class="">
                            <small>End Date</small><br>
                            <small class="capitalize text-black/80">{{ new Date(plan.end_date).toLocaleString()}}</small>
                        </div>
                        <div>
                        <hr>
                        </div>
                        <div class="">
                            <small>Minimum Return</small><br>
                            <small class="capitalize text-black/80">{{ plans_arr[plan.plan].roi }}% </small>
                        </div>
                       
                        <div class="">
                            <small>Maximum Return</small><br>
                            <small class="capitalize text-black/80">{{ plans_arr[plan.plan].roi + 5}}%</small>
                        </div>
                        <div class="">
                            <small>ROI Interval</small><br>
                            <small class="capitalize text-black/80">Daily</small>
                        </div>
                       
                    </div>

            </div>
            <table class="table-auto w-full text-left border-separate border-spacing-y-1" v-if="transactions">
                    <thead class="w-full">
                        <tr class="capitalize bg-slate-200">
                            <th class="py-5 px-4">Date</th>
                            <th class="py-5 px-4">type</th>
                            <th class="py-5 px-4">Amount</th>
                            <!-- <th class="py-5 px-4">progress</th> -->
                        </tr>
                    </thead>
            </table>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'db'
})
const transaction = ref(null)
const plans_arr = ref({
    'standard': { 'plan': 'standard', 'min': 100, 'max': 2000, 'duration': '5 days', 'roi': 3.5, 'bonus': 0 },
    'silver': { 'plan': 'silver', 'min': 2001, 'max': 20000, 'duration': '1 weeks', 'roi': 6.6, 'bonus': 0 },
    'premium': { 'plan': 'premium', 'min': 20001, 'max': 100000, 'duration': '1 months', 'roi': 10, 'bonus': 0 },
    'ultra': { 'plan': 'ultra', 'min': 100001, 'max': 1000000, 'duration': '3 months', 'roi': 12, 'bonus': 0 },
    'promo': { 'plan': 'promo', 'min': 1000, 'max': 100000, 'duration': '1 months', 'roi': 5.5, 'bonus': 0 },
    'visa': { 'plan': 'visa', 'min': 2000, 'max': 1000000, 'duration': '1 months', 'roi': 8.5, 'bonus': 20 },
})
const props = defineProps(['api'])
const account = inject('account')
const url = props.api
const plan = ref(null)

const { data: transactions, error: error } = await useFetch(`${url}transaction/getTransact/`, {
    method: "get",
    query: { profileId: account.value.profile.id },
    watch: false,
    cache: false,
});

if (transactions.value) {
    for (let index = 0; index < transactions.value.length; index++) {
        if (transactions.value[index].transact_id == useRoute().params.id) {
            plan.value = transactions.value[index]
        }

    }


}
const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
};
</script>

<style lang="scss" scoped></style>
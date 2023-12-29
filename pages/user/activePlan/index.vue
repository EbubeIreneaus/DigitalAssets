<template>
    <div>
        <div class=" min-h-[400px] d-flex items-center justify-center">
            <div class="py-20  font-sans">
                <div class="flex flex-col gap-3 justify-center items-center" v-if="plans.length < 1">
                    <p class="text-black/50 font-semibold ">You have <span class="font-mono">({{ plans.length }})</span>
                        active
                        plan available, buy new plan!!</p>
                    <NuxtLink to="/user/invest" class="px-7 py-3 w-fit text-white bg-orange-600 hover:bg-orange-400">Buy
                        Plans
                    </NuxtLink>
                </div>

                <ul>
                    <NuxtLink :to="`/user/activePlan/${plan.transact_id}`" v-for="(plan, index) in plans" >
                        <li class="flex justify-between items-center  text-black/70 md:px-7 py-3 hover:bg-slate-200 mb-4">
                            <h4 class="font-bold capitalize text-lg">{{ plan.plan }} -
                                <span class="text-base font-mono font-semibold">Amount-{{ format_amount(plan.amount) }}</span>
                            </h4>
                            <p>
                                <span class="bg-green-600/80 text-white py-px px-1 rounded-md">
                                    {{ plan.status }}
                                </span>
                                -status
                            </p>
                            <i class="fa fa-angle-right"></i>
                        </li>
                    </NuxtLink>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'db'
})
const props = defineProps(['api'])
const account = inject('account')
const url = props.api
const plans = ref([])

const { data: transactions, error: error } = await useFetch(`${url}transaction/getTransact/`, {
    method: "get",
    query: { profileId: account.value.profile.id },
    watch: false,
    cache: false,
});

if (transactions.value) {
    for (let index = 0; index < transactions.value.length; index++) {
        if (transactions.value[index].plan && transactions.value[index].status == "approved" && transactions.value[index].progress != "completed") {
            plans.value.push(transactions.value[index])
        }

    }
    provide('ts', plans.value)

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
<template>
    <div class="">

        <div class="py-5  flex gap-3 lg:justify-between mb-7">
            <button class="w-64 text-center py-4 bg-slate-300 text-white rounded-lg"
                :class="{ '!bg-orange-600': _index == 0 }" @click="_index = 0">
                <i class="fa fa-download"></i>
                <span class=" hidden lg:block">Deposit</span>
            </button>

            <button class="w-64 text-center py-4 bg-slate-300 text-white rounded-lg"
                :class="{ '!bg-orange-600': _index == 1 }" @click="_index = 1">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                <span class=" hidden lg:block">Withdraw</span>
            </button>

            <button class="w-64 text-center py-4 bg-slate-300 text-white rounded-lg"
                :class="{ '!bg-orange-600': _index == 2 }" @click="_index = 2">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="hidden lg:block">Others</span>
            </button>
        </div>
        <div class="py-10 bg-slate-100 px-4">
            <div class="flex items-center font-semibold text-black/60 gap-2 py-5">
                <p>Show</p>
                <select name="" id="" class="outline-none border px-10 py-3 appearance-none" v-model="limit" >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="all">all</option>
                </select>
                <p> entries</p>
            </div>
            <Transition name="cp">
                <component :is='components[_index]' :trs="transactions" :limit="limit"></component>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { LazyTransactionsDeposit } from "#components";
import { LazyTransactionsWithdraw } from "#components";
import { LazyTransactionsOthers } from "#components";
definePageMeta({
    layout: 'db'
})

const limit = ref('10')

const components = [LazyTransactionsDeposit, LazyTransactionsWithdraw, LazyTransactionsOthers]
const _index = ref(0)



const props = defineProps(['api'])
const url = props.api;

const account = inject('account')

const plans = ref([])

const { data: transactions, error: error } = await useFetch(`${url}transaction/getTransact/`, {
    method: "get",
    query: { profileId: account.value.profile.id },
    watch: false,
    cache: false,
});

</script>

<style scoped>
.cp-enter-active,
.cp-leave-active {
    transition: all 0.4s;
}

.cp-enter-from,
.cp-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
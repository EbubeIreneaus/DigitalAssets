
<template>
    <div >
       <div>
        <table class="w-full text-black/60 overflow-scroll font-sans bg-slate-100">
            <tr class="font-thin text-sm border h-10">
                <th >Amount</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>Date Created</th>
            </tr>
            <tr v-for="data, index in otherTransactions.slice(0, limit=='all'?otherTransactions.length:limit)" class="h-10 text-center text-base font-semibold border">
                <td class="font-mono ">{{money(data.amount)}}</td>
                <td>{{data.channel}}</td>
                <td class="capitalize text-yellow-600" 
                :class="{'!text-green-500': data.status=='approved', '!text-red-500': data.status=='declined'}">{{data.status}}</td>
                <td>{{new Date(data.date).toLocaleString()}}</td>
            </tr>
        </table>
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
    trs: {
        type: Object
    },
    limit: {
        type: String
    }
})
const otherTransactions = ref([])
function filterDeposit() {
    for (const transaction of props.trs) {
        if (transaction.type != 'withdraw' && transaction.type != 'deposit') {
            otherTransactions.value.push(transaction)
        }
    }
}

function money(num){
    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency', currency:  'USD', maximumFractionDigits:2
    })

    return formater.format(num)
}
onMounted(() => {
    filterDeposit()
})
</script>

<style lang="scss" scoped></style>
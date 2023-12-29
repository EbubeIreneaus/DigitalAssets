<template>
    <div>
        <div v-if="transaction">
            {{ transaction }}
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'db'
})
const transaction = ref(null)
const plans = ref({
    'standard': { 'plan': 'standard', 'min': 100, 'max': 2000, 'duration': '5 days', 'roi': 3.5, 'bonus': 0 },
    'silver': { 'plan': 'silver', 'min': 2001, 'max': 20000, 'duration': '1 weeks', 'roi': 6.6, 'bonus': 0 },
    'premium': { 'plan': 'premium', 'min': 20001, 'max': 100000, 'duration': '1 months', 'roi': 10, 'bonus': 0 },
    'ultra': { 'plan': 'ultra', 'min': 100001, 'max': 1000000, 'duration': '3 months', 'roi': 12, 'bonus': 0 },
    'promo': { 'plan': 'promo', 'min': 1000, 'max': 100000, 'duration': '1 months', 'roi': 5.5, 'bonus': 0 },
    'visa': { 'plan': 'visa', 'min': 2000, 'max': 1000000, 'duration': '1 months', 'roi': 8.5, 'bonus': 20 },
})
const ts = inject('ts') //ts for transactions
for (let index = 0; index < ts.length; index++) {
    if(ts[index].transact_id == useRoute().params.id){
        transaction.value = ts[index]
    }
    
}

</script>

<style lang="scss" scoped>

</style>
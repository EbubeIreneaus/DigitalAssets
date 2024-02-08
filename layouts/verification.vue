<template>
    <div class="w-full min-h-screen flex justify-center items-center bg-slate-200">
            <slot></slot>
       
    </div>
</template>

<script setup>
const props = defineProps(['api'])

const profileId = useCookie('profileId')

const account = ref(null)

// const url = 'https://digital-assets-b.vercel.app/'
const url = props.api

if (profileId.value == undefined) {
    useRouter().push('/auth/login')
}

const { data: res, pending, error } = await useFetch(`${url}account/details/${profileId.value}`, {
    watch: false
})
if (res.value.profile) {
    account.value = res.value
}


provide('account', account)
</script>

<style lang="scss" scoped>

</style>
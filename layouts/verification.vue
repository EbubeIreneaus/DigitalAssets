<template>
    <div class="w-full min-h-screen flex  bg-slate-200">
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
}else{
    useRouter().push('/auth/login')
}
    provide('account', account.value)
    provide('username', account.value.profile.user.username)
    provide('email', account.value.profile.user.email)


onMounted(() => {
    
})
</script>

<style lang="scss" scoped>

</style>
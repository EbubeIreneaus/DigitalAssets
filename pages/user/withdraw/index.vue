<template>
    <div>
        <div class="w-screen h-screen bg-slate-900 py-14 fixed left-0 top-0">
            <div class="max-w-sm w-full border py-10 mx-auto text-white/90 px-7 ">
                <p class="text-center">This is a secure area. Please confirm your password before continuing</p>
                <div class="py-5">
                    <form @submit.prevent="confirmUser($event)">
                        <p class="py-1.5 bg-red-600/50 px-7 my-2 text-red-500/80 rounded" v-if="error">
                            <i class="fa fa-warning"></i>&nbsp;
                            {{ error_msg }}
                        </p>
                        <label>Enter your password<span class="text-red-500">*</span></label><br>
                        <input type="password" autofocus v-model="password"
                            class="w-full py-2.5 rounded bg-slate-100 text-black/60 outline-none border my-3 ps-6" />
                        <br><br>
                        <button type="submit" id="btn"
                            class="block w-full py-3 bg-orange-600 hover:bg-orange-500 rounded-md">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "db"
})
const error = ref(false)
const error_msg = ref('')
const props = defineProps(['api'])
const url = props.api
const account = inject('account')
const password = ref('')
const confirmUser = async (e) => {
    const btn = document.getElementById('btn')
    btn.disabled = true;
    btn.innerHTML = 'please wait..'
    const { data: res, pending, error:err } = await useFetch(`${url}auth/`, {
        method: 'get',
        query: { 'username': account.value.profile.user.username, 'password': password.value },
        key: new Date().getTime().toString(),
        watch: false,
    })
    if (res.value.status == 'success') {
        e.target.reset()
        useRouter().push('/user/withdraw/xxvwy/')
        return
    }
    if (res.value.status == 'failed') {
        error.value = true
        error_msg.value = res.value.code
        btn.disabled = false;
        btn.innerHTML = 'Confirm'
        return
    }
    if (err.value) {
        error.value = true
        error_msg.value = err.value.message
        btn.disabled = false;
        btn.innerHTML = 'Confirm'
        return
    }
}
</script>

<style lang="scss" scoped></style>
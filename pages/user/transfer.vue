<template>
    <div>
        <div class="py-10">
            <div class="flex items-center justify-center gap-10 w-[300px] border mx-auto py-10">
                <i class="fa fa-wallet"></i>
                <div>
                    <h2 class="font-mono font-bold text-xl"><i class="fa fa-dollar-sign"></i>{{ account.balance }}</h2>
                    <p>Account balance</p>
                </div>
            </div>
            <div class="max-w-xl w-full mx-auto my-10 font-sans">
                <form @submit.prevent="transfer">
                    <div>
                        <label class="text-black/50 mb-1">Enter Email or Username</label>
                        <input type="text" class="block py-3.5 w-full ps-2 outline-none border mt-2"
                            placeholder="enter receipant email address or username" v-model="form.user" />
                    </div><br>
                    <div>
                        <label class="text-black/50 ">Amount(<i class="fa fa-dollar-sign"></i>)</label>
                        <input type="text" class="block py-3.5 w-full ps-2 outline-none border mt-2"
                            placeholder="enter amount" v-model="form.amount" />
                    </div><br>
                    <p class="font-semibold text-[1.2em] text-black/50">Transfer Charges: <span
                            class="text-red-500">12%</span></p>
                    <br>
                    <button type="submit" id="sbtn"
                        class="w-full text-center py-3 bg-orange-600 text-white">proceed</button>
                </form>
            </div>
        </div>
        <LazyModal :visible="scsmodal">
            <div class="flex items-center gap-x-7">
                <div class="border w-fit px-5 py-4 rounded-full bg-green-500 text-white">
                    <i class="fa fa-check font-bold text-xl"></i>
                </div>
                <h2 class="font-bold text-xl">Transfer Successful</h2>
            </div>
        </LazyModal>
        <LazyModal :visible="errmodal">
            <div class="flex items-center gap-x-7">
                <div class="border w-fit px-5 py-4 rounded-full text-red-500">
                    <i class="fa fa-warning font-bold text-xl"></i>
                </div>
                <div class="font-bold text-xl">Transfer Failed <br>
                    <small class="text-sm text-black/50">{{ errmsg }}</small>
                </div>
            </div>
        </LazyModal>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'db'
})
const props = defineProps(['api'])
const url = props.api
const account = inject('account')

const errmodal = ref(false) //error
const errmsg = ref('') //error
const scsmodal = ref(false) //success
const form = reactive({
    'user': '',
    'amount': ''
})
const transfer = async () => {
    const sbtn = document.getElementById('sbtn')
    sbtn.innerText = 'wait...'
    sbtn.disabled = true
    const { data: res, error: err } = await useFetch(`${url}account/transfer/`, {
        params: form,
        watch: false,
        headers: {
            'profile-id': account.value.profile.id
        }
    })

    if (err.value) {
        errmodal.value = true
        errmsg.value = err.value.statusCode + ' ' + err.value.statusMessage
        return false

    }
    if (res.value.status == 'success') {
        scsmodal.value = true
        return true
    }
    if (res.value.status == 'failed') {
        errmodal.value = true
        errmsg.value = res.value.code
        return false
    }
    sbtn.innerText = 'wait...'
    sbtn.disabled = true
}
</script>

<style lang="scss" scoped></style>
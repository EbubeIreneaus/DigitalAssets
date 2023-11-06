<script setup>
import Axios from 'axios'
definePageMeta({
    layout:'auth'
})
const url = inject('url')
const username = ref('')
const success = ref(false)
const dnrl = ref(false) // did not recieve link 
let timeout
const send_psreset_email = async (e) =>{
    e.target.disabled = true
    const res = await Axios.get(`${url}auth/psreset_link/`, {
        params: { username: username.value.trim() },
    })
    if(res.data.status == 'success'){
        success.value = true
        timeout = setTimeout(()=>{
            e.target.disabled = false
            dnrl.value = true
            clearTimeout(timeout)
        }, 40000)
    }else{
        alert('No user with this username on our record!!!')
        e.target.disabled = false
    }
}
</script>

<template>
    <div class="border border-transparent">
        <div class="w-full h-screen -mt-10 relative grid content-center">
            <div class="max-w-sm sm:max-w-md md:max-w-lg !w-full mx-auto text-center py-10 rounded-xl px-2 shadow-md">
                <h2 class="text-2xl font-bold my-5">Send Me Reset Email</h2>
                <div class="mb-6 text-left sm:px-4">
                    <label for="">Enter account Username:</label>
                    <input type="text" v-model="username" placeholder="username" focus class="w-full rounded-lg mt-1 py-2 ps-3 bg-transparent border">
                </div>
                <p class="py-7 font-bold font-sans" v-if="success" >
                    we have sent a reset link to your email account
                </p>
                <p class="font-serif font-bold" v-if="dnrl">didn't recieve the link?</p>
                <button class="mt-3 group border max-w-sm w-full py-2 rounded-lg ring-2 disabled:ring-0"
                 @click="send_psreset_email($event)" id="resend_button">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                    send Reset Link
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>

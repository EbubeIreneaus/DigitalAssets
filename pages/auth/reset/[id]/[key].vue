<template>
    <div>
        <div class="border border-transparent bg-black text-green-500">
        <div class="w-full h-[100vh] -mt-[50px] relative grid content-center">
            <div class="max-w-sm !w-full mx-auto text-center py-5 px-2 shadow-md shadow-violet-300">
                <h2 class="text-2xl">Reset your Password</h2>

                <div class="my-5 text-left">
                    <label for="">new password:</label>
                    <input type="password" v-model="password" placeholder="password" focus 
                    class="w-full mt-1 py-2.5 ps-3 bg-transparent outline-none text-white border">
                </div>

                <div class="my-5 text-left">
                    <label for="">comfirm password:</label>
                    <input :class="{'!border-red-300': cpassword != password }"
                    type="password" v-model="cpassword" placeholder="confirm password" focus 
                    class="w-full mt-1 py-2.5 ps-3 bg-transparent outline-none text-white border">
                </div>
                
                
                <button class="mt-3 group px-20 py-2.5 ring-1 hover:ring-4 rounded-lg"
                 @click="reset_password($event)" id="resend_button">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                    save
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import Axios from 'axios'
definePageMeta({
    layout:'auth'
})
const url = inject('url')
const password = ref('')
const cpassword = ref('')

const { id, key } = useRoute().params

const reset_password = async (e) => {
    if (password.value != cpassword.value) {
        alert('password does not match!!!')
        return false
    }
    e.target.disabled = true
    const res = await Axios.post(`${url}auth/reset/`, {
         'password': password.value,
         'key':key
        }, 
        {
        headers: {
            "Content-Type": 'application/json',
            "profile-id": id
        }
    })
    definePageMeta({
    layout:'auth'
})
    if (res.data.status == 'success') {
        useRouter().push('/auth/login')
    } else {
        
        alert('could not save password!! try again later')
    }
    e.target.disabled = false
}
</script>


<style lang="scss" scoped></style>
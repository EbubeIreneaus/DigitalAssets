<script setup>
import Axios from 'axios'
const url = inject('url')
const password = ref('')
const cpassword = ref('')
const {id} = useRoute().params

const reset_password = async (e) =>{
    if(password.value != cpassword.value){
        alert('password does not match!!!')
        return false
    }
    e.target.disabled = true
    const res = await Axios.post(`${url}auth/reset/`, {'password':password.value},{
        headers: {
            "Content-Type": 'application/json',
            "id": id
        }
    })
    if(res.data.status == 'success'){
       useRouter().push('/auth/signin')
    }else{
        e.target.disabled = false
        alert('could not save password!! try again later')
    }
}
</script>

<template>
    <div class="border border-transparent">
        <div class="w-full h-[calc(100vh-100px)] mt-[10px] relative grid content-center">
            <div class="max-w-sm !w-full mx-auto text-center py-5 px-2 shadow-md shadow-violet-300">
                <h2 class="text-2xl">Reset your Password</h2>
                <div class="my-3 text-left">
                    <label for="">new password:</label>
                    <input type="password" v-model="password" placeholder="password" focus class="w-full mt-1 py-2 ps-3 bg-transparent border">
                </div>
                <div class="my-3 text-left">
                    <label for="">comfirm password:</label>
                    <input :class="{'!border-red-300': cpassword != password }"
                    type="password" v-model="cpassword" placeholder="confirm password" focus class="w-full mt-1 py-2 ps-3 bg-transparent border">
                </div>
                
                
                <btn class="mt-3 group" @click="reset_password($event)" id="resend_button">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                    save
                </btn>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>

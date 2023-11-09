<template>
    <div>
        <div class="border p-10">
            <h2 class="text-2xl font-bold my-2">Users Info</h2>
            <div class="grid md:grid-cols-2 gap-x-2 gap-y-4 mb-10">
                <div class="w-full">
                    <label for="">First Name</label>
                    <input type="text" v-model="user_data.first_name" class="block py-3 w-full ps-3 border 
                                    outline-none">
                </div>
                <div class="w-full">
                    <label for="">Last Name</label>
                    <input type="text" v-model="user_data.last_name" class="block py-3 w-full ps-3 border 
                                    outline-none">
                </div>
                <div class="w-full">
                    <label for="">Username</label>
                    <input type="text" readonly v-model="account.profile.user.username" class="block py-3 w-full ps-3 border 
                                    outline-none">
                </div>
                <div class="w-full">
                    <label for="">Email</label>
                    <input readonly type="text" v-model="account.profile.user.email" class="block py-3 w-full ps-3 border 
                                    outline-none">
                </div>
                <div class="contact_form_button">
                    <button type="submit"  @click="update_user_data($event)"
                    class="mt-2 px-20 py-3 rounded-lg group mb-3 ring-1 hover:ring-4 disabled:!ring-1" id="sbtn" >
                        <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        Update
                    </button>
                </div>
            </div>

            <h2 class="text-2xl font-bold my-2">Profile Info</h2>
            <div class="grid md:grid-cols-2 gap-x-2 gap-y-4 mb-10">
                <div class="w-full">
                    <label for="country" class="block mb-2 text-sm font-medium">Country</label>
                    <select @change="changeCountryCode" v-model="profile_data.country"
                        class=" border  rounded-lg appearance-none outline-0 w-full p-3 ">
                        <option :value="x.country" v-for="(x, index) in countries" :key="index">
                            {{ x.country }}
                        </option>
                    </select>
                </div>

                <div class="w-full">
                    <label for="" class="block mb-2 text-sm font-medium">Phone</label>

                    <div class="flex  border  rounded-lg ">
                        <input type="text" v-model="profile_data.code" id="" readonly
                            class="p-3 w-20 appearance-none outline-none rounded-s-lg" />
                        <input type="text" v-model="profile_data.phone" placeholder="000 000 0000"
                            class="flex-grow outline-none rounded-e-lg" @change="formatPhone" required />
                    </div>
                </div>

                <div class="contact_form_button">
                    <button type="submit" @click="update_profile($event)"
                    class="mt-2 px-20 py-3 rounded-lg group mb-3 ring-1 hover:ring-4" id="sbtn">
                        <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        Update
                    </button>
                </div>
            </div>

            <h2 class="text-2xl font-bold my-2">Security</h2>
            <div class="grid md:grid-cols-2 gap-x-2 gap-y-4 mb-10">
                <div class="w-full">
                    <label for="">Old Password</label>
                    <input type="password" v-model="security_data.old" class="block py-3 w-full ps-3 border 
                                    outline-none" placeholder="old password">
                </div>
                <div class="w-full">
                    <label for="">New Password</label>
                    <input type="password" v-model="security_data.new" class="block py-3 w-full ps-3 border 
                                    outline-none" placeholder="new password">
                </div>
                <div class="w-full">
                    <label for="">Confirm Password</label>
                    <input type="password" v-model="cpass" class="block py-3 w-full ps-3 border 
                                    outline-none" :class="{'border-red-500':security_data.new != cpass}"
                                    placeholder="new password">
                </div><br>
                <div class="contact_form_button">
                    <button type="button" @click="update_password($event)"
                     class="mt-2 px-20 py-3 rounded-lg group mb-3 ring-1 hover:ring-4" id="sbtn">
                        <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Axios from 'axios'
definePageMeta({
    layout: "db"
})
const account = inject('account')
const url = inject('url')

const cpass = ref('')

const countries = ref([
    { country: "Afghanistan", code: "+93" },
    { country: "Albania", code: "+355" },
    { country: "Algeria", code: "+213" },
    { country: "Andorra", code: "+376" },
    { country: "Angola", code: "+244" },
    { country: "Antigua and Barbuda", code: "+1-268" },
    { country: "Argentina", code: "+54" },
    { country: "Armenia", code: "+374" },
    { country: "Australia", code: "+61" },
    { country: "Austria", code: "+43" },
    { country: "Azerbaijan", code: "+994" },
    { country: "Bahamas", code: "+1-242" },
    { country: "Bahrain", code: "+973" },
    { country: "Bangladesh", code: "+880" },
    { country: "Barbados", code: "+1-246" },
    { country: "Belarus", code: "+375" },
    { country: "Belgium", code: "+32" },
    { country: "Belize", code: "+501" },
    { country: "Benin", code: "+229" },
    { country: "Bhutan", code: "+975" },
    { country: "Bolivia", code: "+591" },
    { country: "Bosnia and Herzegovina", code: "+387" },
    { country: "Botswana", code: "+267" },
    { country: "Brazil", code: "+55" },
    { country: "Brunei", code: "+673" },
    { country: "Bulgaria", code: "+359" },
    { country: "Burkina Faso", code: "+226" },
    { country: "Burundi", code: "+257" },
    { country: "Cabo Verde", code: "+238" },
    { country: "Cambodia", code: "+855" },
    { country: "Cameroon", code: "+237" },
    { country: "Canada", code: "+1" },
    { country: "Central African Republic", code: "+236" },
    { country: "Chad", code: "+235" },
    { country: "Chile", code: "+56" },
    { country: "China", code: "+86" },
    { country: "Colombia", code: "+57" },
    { country: "Comoros", code: "+269" },
    { country: "Congo", code: "+242" },
    { country: "Costa Rica", code: "+506" },
    { country: "Croatia", code: "+385" },
    { country: "Cuba", code: "+53" },
    { country: "Cyprus", code: "+357" },
    { country: "Czechia", code: "+420" },
    { country: "Côte d'Ivoire", code: "+225" },
    { country: "Denmark", code: "+45" },
    { country: "Djibouti", code: "+253" },
    { country: "Dominica", code: "+1-767" },
    { country: "Dominican Republic", code: "+1-809, +1-829, +1-849" },
    { country: "Ecuador", code: "+593" },
    { country: "Egypt", code: "+20" },
    { country: "El Salvador", code: "+503" },
    { country: "Equatorial Guinea", code: "+240" },
    { country: "Eritrea", code: "+291" },
    { country: "Estonia", code: "+372" },
    { country: "Eswatini", code: "+268" },
    { country: "Ethiopia", code: "+251" },
    { country: "Fiji", code: "+679" },
    { country: "Finland", code: "+358" },
    { country: "France", code: "+33" },
    { country: "Gabon", code: "+241" },
    { country: "Gambia", code: "+220" },
    { country: "Georgia", code: "+995" },
    { country: "Germany", code: "+49" },
    { country: "Ghana", code: "+233" },
    { country: "Greece", code: "+30" },
    { country: "Grenada", code: "+1-473" },
    { country: "Guatemala", code: "+502" },
    { country: "Guinea", code: "+224" },
    { country: "Guinea-Bissau", code: "+245" },
    { country: "Guyana", code: "+592" },
    { country: "Haiti", code: "+509" },
    { country: "Honduras", code: "+504" },
    { country: "Hungary", code: "+36" },
    { country: "Iceland", code: "+354" },
    { country: "India", code: "+91" },
    { country: "Indonesia", code: "+62" },
    { country: "Iran", code: "+98" },
    { country: "Iraq", code: "+964" },
    { country: "Ireland", code: "+353" },
    { country: "Israel", code: "+972" },
    { country: "Italy", code: "+39" },
    { country: "Jamaica", code: "+1-876" },
    { country: "Japan", code: "+81" },
    { country: "Jordan", code: "+962" },
    { country: "Kazakhstan", code: "+7" },
    { country: "Kenya", code: "+254" },
    { country: "Kiribati", code: "+686" },
    { country: "Kuwait", code: "+965" },
    { country: "Kyrgyzstan", code: "+996" },
    { country: "Laos", code: "+856" },
    { country: "Latvia", code: "+371" },
    { country: "Lebanon", code: "+961" },
    { country: "Lesotho", code: "+266" },
    { country: "Liberia", code: "+231" },
    { country: "Libya", code: "+218" },
    { country: "Liechtenstein", code: "+423" },
    { country: "Lithuania", code: "+370" },
    { country: "Luxembourg", code: "+352" },
    { country: "Madagascar", code: "+261" },
    { country: "Malawi", code: "+265" },
    { country: "Malaysia", code: "+60" },
    { country: "Maldives", code: "+960" },
    { country: "Mali", code: "+223" },
    { country: "Malta", code: "+356" },
    { country: "Marshall Islands", code: "+692" },
    { country: "Mauritania", code: "+222" },
    { country: "Mauritius", code: "+230" },
    { country: "Mexico", code: "+52" },
    { country: "Micronesia", code: "+691" },
    { country: "Moldova", code: "+373" },
    { country: "Monaco", code: "+377" },
    { country: "Mongolia", code: "+976" },
    { country: "Montenegro", code: "+382" },
    { country: "Morocco", code: "+212" },
    { country: "Mozambique", code: "+258" },
    { country: "Myanmar", code: "+95" },
    { country: "Namibia", code: "+264" },
    { country: "Nauru", code: "+674" },
    { country: "Nepal", code: "+977" },
    { country: "Netherlands", code: "+31" },
    { country: "New Zealand", code: "+64" },
    { country: "Nicaragua", code: "+505" },
    { country: "Niger", code: "+227" },
    { country: "Nigeria", code: "+234" },
    { country: "North Korea", code: "+850" },
    { country: "North Macedonia", code: "+389" },
    { country: "Norway", code: "+47" },
    { country: "Oman", code: "+968" },
    { country: "Pakistan", code: "+92" },
    { country: "Palau", code: "+680" },
    { country: "Panama", code: "+507" },
    { country: "Papua New Guinea", code: "+675" },
    { country: "Paraguay", code: "+595" },
    { country: "Peru", code: "+51" },
    { country: "Philippines", code: "+63" },
    { country: "Poland", code: "+48" },
    { country: "Portugal", code: "+351" },
    { country: "Qatar", code: "+974" },
    { country: "Romania", code: "+40" },
    { country: "Russia", code: "+7" },
    { country: "Rwanda", code: "+250" },
    { country: "Saint Kitts and Nevis", code: "+1-869" },
    { country: "Saint Lucia", code: "+1-758" },
    { country: "Saint Vincent and the Grenadines", code: "+1-784" },
    { country: "Samoa", code: "+685" },
    { country: "San Marino", code: "+378" },
    { country: "Sao Tome and Principe", code: "+239" },
    { country: "Saudi Arabia", code: "+966" },
    { country: "Senegal", code: "+221" },
    { country: "Serbia", code: "+381" },
    { country: "Seychelles", code: "+248" },
    { country: "Sierra Leone", code: "+232" },
    { country: "Singapore", code: "+65" },
    { country: "Slovakia", code: "+421" },
    { country: "Slovenia", code: "+386" },
    { country: "Solomon Islands", code: "+677" },
    { country: "Somalia", code: "+252" },
    { country: "South Africa", code: "+27" },
    { country: "South Korea", code: "+82" },
    { country: "South Sudan", code: "+211" },
    { country: "Spain", code: "+34" },
    { country: "Sri Lanka", code: "+94" },
    { country: "Sudan", code: "+249" },
    { country: "Suriname", code: "+597" },
    { country: "Sweden", code: "+46" },
    { country: "Switzerland", code: "+41" },
    { country: "Syria", code: "+963" },
    { country: "Taiwan", code: "+886" },
    { country: "Tajikistan", code: "+992" },
    { country: "Tanzania", code: "+255" },
    { country: "Thailand", code: "+66" },
    { country: "Timor-Leste", code: "+670" },
    { country: "Togo", code: "+228" },
    { country: "Tonga", code: "+676" },
    { country: "Trinidad and Tobago", code: "+1-868" },
    { country: "Tunisia", code: "+216" },
    { country: "Turkey", code: "+90" },
    { country: "Turkmenistan", code: "+993" },
    { country: "Tuvalu", code: "+688" },
    { country: "Uganda", code: "+256" },
    { country: "Ukraine", code: "+380" },
    { country: "United Arab Emirates", code: "+971" },
    { country: "United Kingdom", code: "+44" },
    { country: "United States of America", code: "+1" },
    { country: "Uruguay", code: "+598" },
    { country: "Uzbekistan", code: "+998" },
    { country: "Vanuatu", code: "+678" },
    { country: "Vatican City", code: "+379" },
    { country: "Venezuela", code: "+58" },
    { country: "Vietnam", code: "+84" },
    { country: "Yemen", code: "+967" },
    { country: "Zambia", code: "+260" },
    { country: "Zimbabwe", code: "+263" },
]);
const formatPhone = () => {
    if (profile_data.phone == '') {
        return false
    }
    profile_data.phone =
        profile_data.phone.slice(0, 3) +
        " " +
        profile_data.phone.slice(3, 6) +
        " " +
        profile_data.phone.slice(6);
};

const user_data = reactive({
    first_name: account.value.profile.user.first_name,
    last_name: account.value.profile.user.last_name,
})

const profile_data = reactive({
    country: account.value.profile.country,
    code: account.value.profile.country_code,
    phone: account.value.profile.phone,
})

const security_data = reactive({
    old: '',
    new: ''
})

const changeCountryCode = () => {
    for (let index = 0; index < countries.value.length; index++) {
        if (countries.value[index].country == profile_data.country) {
            profile_data.code = countries.value[index].code;
        }
    }
};


const update_user_data = async(e) =>{
    e.target.disabled = true
    const res = await Axios.post(`${url}account/user_data/`, user_data, {
        headers:{
            'profile-id': account.value.profile.id
        }
    })
    if(res.data.status == 'success'){
        e.target.disabled = false
    }else{
        alert("Could not update user settings at the momment !!!")
    }
}

const update_profile = async(e) =>{
    e.target.disabled = true
    const res = await Axios.post(`${url}account/profile_data/`, profile_data, {
        headers:{
            'profile-id': account.value.profile.id
        }
    })
    if(res.data.status == 'success'){
        e.target.disabled = false
    }else{
        alert("Could not update user settings at the momment !!!")
    }
}


const update_password = async(e) =>{
    if(security_data.old == '' || security_data.new ==''){
        alert("Fill in all Information Correctly")
        return false
    }else if(security_data.new != cpass.value){
        alert("Password Mismatch !!!")
        return false
    }
    e.target.disabled = true
    const res = await Axios.post(`${url}account/security/`, security_data, {
        headers:{
            'profile-id': account.value.profile.id
        }
    })
    if(res.data.status == 'success'){
        e.target.disabled = false
        security_data.old = ''
        security_data.new = ''
        cpass.value = ''
    }else{
        alert("Could not update your password at the momment, password does not match user password !!!")
        e.target.disabled = false
    }
}

</script>

<style lang="scss" scoped></style>
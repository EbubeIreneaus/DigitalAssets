<script setup>
import Cookies from "js-cookie";
definePageMeta({
  layout: 'auth'
})
const url = inject("url");
const cpass = ref(null);
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

const form = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  country: "Afghanistan",
  code: "+93",
  phone: "",
  password: "",
});

const changeCountryCode = () => {
  for (let index = 0; index < countries.value.length; index++) {
    if (countries.value[index].country == form.country) {
      form.code = countries.value[index].code;
    }
  }
};
const formatPhone = () => {
  if (form.phone == '') {
    return false
  }
  form.phone =
    form.phone.slice(0, 3) +
    " " +
    form.phone.slice(3, 6) +
    " " +
    form.phone.slice(6);
};

const validate = () => {
  if (form.firstname == '' || form.lastname == '') {
    alert('First name and Last name cannot be empty!!')
    return false
  }
  if (form.username == '') {
    alert('username cannot be empty!!')
    return false
  } else {
    form.username = form.username.trim()
  }
  if (form.email == '') {
    alert('Email cannot be empty!!')
    return false
  }
  if (form.password != cpass.value) {
    alert('password does not match!!')
    return false
  }
  return true
}
const Register = async (e) => {
  if (!validate()) {
    return false
  }
  let submit_btn = document.getElementById("sbutton");
  submit_btn.disabled = true;
  const res = await useFetch(`${url}auth/`, {
    method: "post",
    body: form,
    key: new Date().getTime().toString(),
    watch: false
  });

  if (res.data.value.status == "success") {
    document.getElementById('reg_form').reset();
    Cookies.set('profileId', res.data.value.profileId)
    // Cookies.set('vkey', res.data.value.key, { expires: 1 / 48 })
    useRouter().push('/auth/verify')
  } else {
    switch (res.data.value.code) {
      case "username_already_exist":
        alert("Someone already taken your username!!");
        break;
      case "email_already_exist":
        alert("somone already registered with this email!!");
        break;
      default:
        alert("Could not Register You at the moment, Try Again Later!!!");

        break;
    }
    submit_btn.disabled = false;
  }
};
</script>

<template>
  <div class="flex justify-center bg-black text-green-500">
    <div class="h-max py-2 w-full ">
      <section class="">
        <div class="flex items-center justify-center px-4 py-8 mx-auto sm:px-10 sm:py-0">
          <div class="w-full rounded-lg md:mt-0 xl:p-0 px-4 py-8 shadow-lg shadow-violet-300">
            <div class="space-y-4 md:space-y-6 sm:p-8">
             
              <div class="grid md:grid-cols-2 gap-x-7 gap-y-5">
                <div class="hidden md:block">
                  <img src="~/assets/media/logo.jpg" alt="" class="w-full h-full object-cover object-center">
                </div>

                <form class="space-y-4 md:space-y-6" id="reg_form" @submit.prevent="Register">
                    <div class="w-fit mx-auto"><logo></logo></div>
                  <div class="flex flex-col md:flex-row gap-3">
                    <div class="w-full">
                      <label for="firstname" class="mb-2 text-sm font-medium">First Name</label>
                      <input type="text" v-model="form.firstname" id="firstname"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg appearance-none focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
                        placeholder="first name" required />
                    </div>
                    <div class="w-full">
                      <label for="lastname" class="mb-2 text-sm font-medium">Last Name</label>
                      <input type="text" v-model="form.lastname" id="lastname"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg appearance-none focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
                        placeholder="last name" required />
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row gap-3">
                    <div class="w-full">
                      <label for="email" class="block mb-2 text-sm font-medium">
                        Username</label>
                      <input type="text" v-model="form.username" id="username"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
                        placeholder="username" required />
                    </div>
                    <div class="w-full">
                      <label for="email" class="block mb-2 text-sm font-medium">
                        Email</label>
                      <input type="email" v-model="form.email" id="email"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
                        placeholder="Email" required />
                    </div>
                  </div>

                  <div class="flex flex-col md:flex-row gap-3">
                    <div class="w-full">
                      <label for="country" class="block mb-2 text-sm font-medium">Country</label>
                      <select @change="changeCountryCode" v-model="form.country"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg appearance-none focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 ">
                        <option :value="x.country" v-for="(x, index) in countries" :key="index">
                          {{ x.country }}
                        </option>
                      </select>
                    </div>

                    <div class="w-full">
                      <label for="" class="block mb-2 text-sm font-medium">Phone</label>

                      <div
                        class="flex focus-within:ring-2 focus-within:border-0 ring-black ring-offset-1 rounded-lg bg-gray-50 border-2 border-gray-300">
                        <input type="text" v-model="form.code" id="" readonly
                          class="p-2.5 w-14 appearance-none outline-none rounded-s-lg" />
                        <input type="text" v-model="form.phone" placeholder="000 000 0000"
                          class="flex-grow outline-none rounded-e-lg" @change="formatPhone" required />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row gap-3">
                    <div class="w-full">
                      <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                      <input type="password" v-model="form.password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required />
                    </div>
                    <div class="w-full">
                      <label for="password" class="block mb-2 text-sm font-medium">Confirm</label>
                      <input type="password" v-model="cpass" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required />
                    </div>

                  </div>

                  <div class="mt-5 text-center">
                    <button type="submit" class="mt-2  group mb-3 ring-2 max-w-sm w-full rounded-lg py-2 font-bold
                                      ring-green-700 hover:ring-green-500 hover:ring-4 disabled:ring-0" id="sbutton">
                      <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                      Register
                    </button>
                  </div>

                  <p class="text-sm text-center font-semibold font-serif">
                    Already have an account?
                    <NuxtLink to="/auth/login"
                      class="text-primary-600 text-green-500 hover:text-green-700 font-bold font-sans">
                     Login</NuxtLink>
                  </p>
                </form>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

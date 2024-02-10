<template>
    <div class="border  max-w-lg !w-full  min-h-[300px] max-h-screen mx-auto py-[50px] overflow-y-scroll shadow-md shadow-slate-100">
        <!-- verification concent -->
		<Transition>
        <div class="mt-10" v-if="component == 'intro'">
            <div>
                <div>
                    <div class="border p-1 bg-orange-500 rounded-full w-fit mx-auto">
                        <i class="fa fa-warning  p-1 text-white"></i>
                    </div>
                    <p class="px-5 py-5 text-center font-bold text-black/60">
                        Complete intermediate identity verification
                        to access the full range of digital assets product and services
                    </p>
                    <div class="w-full my-3">
                        <button @click="move('intro', $event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        Verify now
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>
		</Transition>

        <!-- verification requirement list -->
		<Transition>
        <div class="" v-if="component == 'requirements'">
            <div class="px-4">
                <h2 class="font-semibold">Requirements</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                    <li>
                        <i class="fa fa-user"></i> &nbsp;
                        <span>Personnal Information</span>
                    </li>
                    <li>
                        <i class="fa fa-id-card"></i> &nbsp;
                        <span>Goverment-Issued Id</span>
                    </li>
                    <li>
                        <i class="fa fa-camera"></i> &nbsp;
                        <span>Facial Recognition</span>
                    </li>
                </ul>

                <h2 class="font-semibold">Features &amp; Limits</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                    <li class="flex justify-between">
                       <span>Deposit</span>
                        <span><b>$50k</b> Daily</span>
                    </li>
                    <li class="flex justify-between">
                       <span>Withdraw</span> &nbsp;&nbsp;
                        <span><b>$50k</b> Daily</span>
                    </li>
                    
                </ul>

                <h2 class="font-semibold">Trading Transaction Limits</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                
                    <li class="flex justify-between">
                       <span>Trading</span> &nbsp;&nbsp;
                        <span><b>Unlimited</b></span>
                    </li>
                    
                </ul>
                <h2 class="font-semibold">Crypto Limit</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                
                    <li class="flex justify-between">
                       <span>withdraw</span> &nbsp;&nbsp;
                        <span><b>180</b> BUSD</span>
                    </li>
                    
                </ul>
                <br />
                <div class="w-full ">
                    <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p>
					<div class="w-full my-3">
                        <button @click="move('requirements', $event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        start now
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>
		</Transition>

        <!-- country and username form -->
		<Transition>

        <div class="px-5" v-if="component == 'user'">
            <div>
                <div>
                    <label for="" class="text-sm font-semibold px-1 ">Country of Issue:</label>
                    <select v-model="form.country" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                        <option :value="x" v-for="x,index in countryList" :key="index">{{ x }}</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 my-7 gap-5">
                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Firstname:</label>
                    <input type="text" v-model="form.firstname" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Lastname:</label>
                    <input type="text" v-model="form.lastname" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Middlename:</label>
                    <input type="text" v-model="form.middlename" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Date of Birth:</label>
                    <input type="date" v-model="form.dob" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>
                </div>
                <h2 class="font-bold text-2xl text-black/80 my-3">Additional Information</h2>
                <div>
                    
                    <label for="" class="text-sm font-semibold px-1 ">Residential address:</label>
                    <input type="text" v-model="form.address" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                     
                </div>
                <div class="grid grid-cols-2 my-7 gap-5">
                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">postal code:</label>
                    <input type="text" v-model="form.postal" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">city:</label>
                    <input type="text" v-model="form.city" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>
                </div>

				<div class="w-full my-3">
                        <button @click="move('user', $event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        next
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                
            </div>
        </div>
		</Transition>

        <!-- identification selection -->
		<Transition>

        <div class="px-5" v-if="component == 'docs_selection'">
            <div>
                <div class="mb-7">
                    <label for="" class="text-sm font-semibold px-1 ">Country of Issue:</label>
                    <input readonly :value="form.country" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                </div>
                <div>
                    <div class="mb-7">
                        <p class="font-bold text-sm text-black text-center mb-1">Use a valid goverment-issued identity document</p>
                        <p class="font-semibold text-sm text-black/50 text-center">
                            only the following document listed bellow will be accepted, all other document will be rejected
                        </p>
                    </div><br>
                    <div>
                        <ul class="">
                            <li>
                                <label class="flex justify-between items-center py-5 mb-3 border font-bold text-black/50 px-3">
                                    
                                   <div>
                                    <p class="text-sm">Goverment Issue ID card</p>
                                    
                                   </div>
                                   <input type="radio" class="hidden peer"  value="NIN" v-model="form.id">
                                   <i
                                class="fas fa-check-circle peer-checked:text-orange-500"></i>
                                </label>
                            </li>
                            <li>
                                <label class="flex justify-between items-center py-5 mb-3 border font-bold text-black/50 px-3">
                                    
                                   <div>
                                    <p class="text-sm">Passport</p>
                                   </div>
                                   <input type="radio" class="hidden peer"  value="passport" v-model="form.id">
                                   <i
                                class="fas fa-check-circle peer-checked:text-orange-500"></i>
                                </label>
                            </li>
                            <li>
                                <label class="flex justify-between items-center py-5 mb-3 border font-bold text-black/50 px-3">
                                    
                                   <div>
                                    <p class="text-sm">Drivers Lincence</p>
                                   </div>
                                   <input type="radio" class="hidden peer"  value="lincence" v-model="form.id">
                                   <i
                                class="fas fa-check-circle peer-checked:text-orange-500"></i>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <br />
                <div class="w-full ">
                    <!-- <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p> -->
					<div class="w-full my-3">
                        <button @click="move('docs_selection', $event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        next
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
		</Transition>

		<!-- upload Identificatin requirement
		 -->
		 <Transition>

		 <div class="px-5" v-if="component == 'docs_upload'">
			<div>
				<h2 class="text-2xl font-bold ">Identity Verification</h2><br>
				<p class="font-semibold">Take A photo of Your ID card </p>
				<div>

				</div>
				<div>
					<ul class="px-4 py-5 *:text-sm  *:mb-2.5 *:font-semibold text-black/80">
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> &nbsp; Goverment Issued</li>
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> &nbsp; Original full size, unedited docs</li>
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> &nbsp; place document against a single colourd background</li>
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> &nbsp; readable well-lit coloured image</li>
						<li> <i class="fa fa-close text-red-500 fa-lg"></i> &nbsp; no black and white</li>
						<li> <i class="fa fa-close text-red-500 fa-lg"></i> &nbsp; no edited or expire documents</li>
					</ul>
					<p class="text-sm font-bold my-2">File size must be between <b>10kb</b> to <b>1mb</b> in .jpg/.png/.jpeg format</p>
				</div>
				<div>
					<input type="file" @change="addDocsImg($event)" accept="image/*" capture="environment"  class="w-full border py-2">
				</div>
				<div class="w-full ">
                    <!-- <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p> -->
                    
					<div class="w-full my-3">
                        <button @click="move('docs_upload', $event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        proceed to selfie
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
			</div>
		 </div>
		 </Transition>

		 <!-- upload user selfie
		 -->
		 <Transition>

		 <div class="px-5" v-if="component == 'selfie_upload'">
			<div>
				<h2 class="text-2xl font-bold ">Take a Selfie</h2><br>
				<p class="font-semibold">Example:</p>
				<div>
					<img src="/img/verify-selfie.jpg" class="w-28 object-cover">
				</div>
				<div>
					<ul class="px-4 py-5 *:text-sm  *:mb-2.5 *:font-semibold text-black/80">
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> A selfie of yourself with a neutral expression</li>
						<li> <i class="fa fa-check text-green-500 fa-lg"></i> make sure your whole face is visible, centered and your eyes are open</li>

						<li> <i class="fa fa-close text-red-500 fa-lg"></i> Do not hide or alter any part of your face</li>
						<li> <i class="fa fa-close text-red-500 fa-lg"></i> &nbsp; Do not crop your ID or use a screenshot of your id</li>
					</ul>
					<p class="text-sm font-bold my-2">File size must be between <b>10kb</b> to <b>1mb</b> in .jpg/.png/.jpeg format</p>
				</div>
				<div class="mb-4">
					<input type="file" @change="addSelfieImg($event)" accept="image/*" capture="user" class="w-full border py-2">
				</div>
				<div class="w-full ">
                    <!-- <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p> -->
                    <div class="w-full my-3">
                        <button @click="submit($event)"
                        class="border block mx-auto px-12 py-2 group rounded-xl bg-orange-500 disabled:cursor-not-allowed text-white hover:bg-orange-400"
                        >
						<i class="fa fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                        submit request
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
			</div>
		 </div>
		 </Transition>

		<!-- success or error -->
		<div class="px-5" v-if="component == 'success'">
			<div class="text-center">
				<p class="w-fit mx-auto border p-4 rounded-full bg-green-500 text-white"><i class="fa fa-thumbs-up fa-2xl"></i></p>
				<h2 class="text-3xl font-bold my-4">Verification in progess</h2>
				<p class="font-semibold text-black/60 mb-5">you will be notify once we have review your identity verification</p>
				<NuxtLink to="/user/"
                     class="max-w-md w-full mx-auto py-2 block mb-5 text-center text-white bg-orange-500 hover:bg-orange-400 rounded-lg">
					Ok
					 </NuxtLink>
			</div>
		</div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
definePageMeta({
    layout: 'verification'
})
const props = defineProps(['api'])
const url = props.api
const username = inject("username")
const email = inject("email")
type comp = 'intro'|'requirements'| 'user' | 'docs_selection'| 'docs_upload'|'selfie_upload'|'success'
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

const formData = new FormData()

const component = ref<comp>('intro')
const form = reactive({
    id: 'NIN',
	firstname: '',
	lastname:'',
	middlename: '',
	dob: '',
	address: '',
	postal: '',
	city: '',
	country: 'Afghanistan',
	

})

function validateUser() : boolean{
	if(form.firstname == '' || form.lastname == "" || form.dob == ''|| form.country == '' || form.city == ''){
		return false
	}
	return true
}

function addDocsImg(e: any) : void{
	const file = e.target.files[0]
	formData.append('IDCard', file)
}

function addSelfieImg(e: any) : void{
	const file = e.target.files[0]
	formData.append('selfie', file)
}


function move(comp:comp, e:any) : void{
	e.target.disabled = true
	const timeout = setTimeout(()=>{
		switch (comp) {
			case 'intro':
				component.value = 'requirements'
				break;
			case 'requirements':
				component.value = 'user'
				break;
			case 'user':
				validateUser()?component.value = 'docs_selection': alert('Please fill in all information correctly!!!')
				break;
			case 'docs_selection':
				component.value = 'docs_upload'
				break;
			case 'docs_upload':
				component.value = 'selfie_upload'
				break;
			default:
				break;
		}
		e.target.disabled = false
		clearTimeout(timeout)
	}, 3000)
}
async function submit(e:any){
	e.target.disabled = true
	formData.append('firstname', form.firstname)
	formData.append('lastname', form.lastname)
	formData.append('middlename', form.middlename)
	formData.append('dob', form.dob)
	formData.append('country', form.country)
	formData.append('address', form.address)
	formData.append('city', form.city)
	formData.append('postal', form.postal)
	formData.append('id', form.id)
	formData.append('username', username as string)
	formData.append('email', email as string)
	
	try{
	const res = await axios.post(`${url}manager/verify_me/`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	if(res.data.status == 'success'){
		component.value = 'success'
	}else{
		alert('Could Not perform request at the moment! please try again later')
	}
} catch(err){
	e.target.disabled = false
	throw new Error ('could not make request. details: '+ err)
}
}
</script>

<style scoped>
.v-enter-active{
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
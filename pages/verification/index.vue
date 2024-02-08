<template>
    <div class="border  max-w-lg !w-full  min-h-[200px] max-h-screen overflow-y-scroll py-5 shadow-md shadow-black/40 bg-slate-100">
        <!-- verification concent -->
        <div class="hidden">
            <div>
                <div>
                    <div class="border p-1 bg-orange-500 rounded-full w-fit mx-auto">
                        <i class="fa fa-warning  p-1 text-white"></i>
                    </div>
                    <p class="px-5 py-5 text-center font-bold text-black/60">
                        All new and exisiting user are required to complete intermediate identity verification
                        to access the full range of digital assets product and services
                    </p>
                    <div class="w-full my-3">
                        <button 
                        class="border block mx-auto px-12 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-400"
                        >
                        Verify now
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- verification requirement list -->
        <div class="hidden">
            <div class="px-4">
                <h2>Requiremnts</h2>
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

                <h2>Features &amp; Limits</h2>
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

                <h2>P2P Transaction Limits</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                
                    <li class="flex justify-between">
                       <span>P2P</span> &nbsp;&nbsp;
                        <span><b>Unlimited</b></span>
                    </li>
                    
                </ul>
                <h2>Crypto Limit</h2>
                <ul class="text-black/50 font-semibold text-sm *:!mb-4 my-3 px-4">
                
                    <li class="flex justify-between">
                       <span>withdraw</span> &nbsp;&nbsp;
                        <span><b>180</b> BUSD</span>
                    </li>
                    
                </ul>
                <br />
                <div class="w-full ">
                    <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p>
                    <button
                     class="max-w-md w-full mx-auto py-2 text-center text-white bg-orange-500 hover:bg-orange-400 rounded-lg">start now</button>
                </div>
            </div>
        </div>

        <!-- country and username form -->
        <div class="px-5 hidden">
            <div>
                <div>
                    <label for="" class="text-sm font-semibold px-1 ">Country of Issue:</label>
                    <select name="" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                        <option :value="x" v-for="x,index in countryList" :key="index">{{ x }}</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 my-7 gap-5">
                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Firstname:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Lastname:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Middlename:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">Date of Birth:</label>
                    <input type="date" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>
                </div>
                <h2 class="font-bold text-2xl text-black/80 my-3">Additional Information</h2>
                <div>
                    
                    <label for="" class="text-sm font-semibold px-1 ">Residential address:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                     
                </div>
                <div class="grid grid-cols-2 my-7 gap-5">
                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">postal code:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>

                    <div class="w-full">
                    <label for="" class="text-sm font-semibold px-1 ">city:</label>
                    <input type="text" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
                    </div>
                </div>

                
            </div>
        </div>

        <!-- identification selection -->
        <div class="px-5 hidden">
            <div>
                <div class="mb-7">
                    <label for="" class="text-sm font-semibold px-1 ">Country of Issue:</label>
                    <input readonly value="Nigeria" class="appearance-none outline-none border rounded py-2 ps-3 w-full mt-1">
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
                                <label class="flex justify-between items-center py-3 mb-3 border font-bold text-black/50 px-3">
                                    
                                   <div>
                                    <p class="text-sm">Goverment Issue ID card</p>
                                    <small class="text-xs">NIN slip/National ID card</small>
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
                    <button
                     class="max-w-md w-full mx-auto py-2 text-center text-white bg-orange-500 hover:bg-orange-400 rounded-lg">Next</button>
                </div>
                </div>
            </div>
        </div>

		<!-- upload Identificatin requirement
		 -->
		 <div class="px-5 hidden" >
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
					<input type="file" name="" id="" capture="environment" accept="image/.jpg,.png,.jpeg" class="w-full border py-2">
				</div>
				<div class="w-full ">
                    <!-- <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p> -->
                    <button
                     class="max-w-md w-full mx-auto py-2 text-center text-white bg-orange-500 hover:bg-orange-400 rounded-lg">
					 proceed to selfie
					 </button>
                </div>
			</div>
		 </div>

		 <!-- upload user selfie
		 -->
		 <div class="px-5">
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
					<input type="file" name="" id="" capture="environment" accept="image/.jpg,.png,.jpeg" class="w-full border py-2">
				</div>
				<div class="w-full ">
                    <!-- <p class="text-sm mt-2 mb-4 text-black/50"><i class="fa fa-history"></i> Review time: 10 days</p> -->
                    <button
                     class="max-w-md w-full mx-auto py-2 text-center text-white bg-orange-500 hover:bg-orange-400 rounded-lg">
					 submit  request
					 </button>
                </div>
			</div>
		 </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'verification'
})
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

const form = reactive({
    id: ''
})
</script>

<style scoped></style>
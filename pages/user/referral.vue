<template>
    <div class="card mt-10 shadow-lg min-h-screen">
        <div class=" text-slate-400 text-center">
            <p class="text-center text-md font-bold font-sans">you can refer user by sharing your referral link:</p>
            <div class="flex items-center border my-2 max-w-lg mx-auto">
                <input type="text" id="referral_field" readonly :value="referral_id"
                    class="block w-full py-3 border-0 outline-0 px-2 bg-slate-200" />
                <button class="px-4  py-2" @click="copy_to_clipboard()">
                    <i class="fa fa-copy"></i>
                </button>
            </div>
            <h2 class="mt-7 text-lg font-bold font-serif">You were referred by</h2> <br>
            <div>
                <i class="fa fa-user text-4xl"></i>
                <p class=" block">{{ account.profile.referred_by?.user?.username ?? "Null" }}</p>
            </div>
        </div>

        <div class="mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 mt-7 ">
            <h2 class="text-xl font-semibold mb-4">Your Referals</h2>
            <div class="w-full overflow-x-auto">
                <table class=" w-full border !overflow-x-scroll table-auto">
                    <thead class=" border-b text-left">
                        <tr>
                            <th class="px-4 py-2">First Name</th>
                            <th class="px-4 py-2">Last Name</th>
                            <th class="px-4 py-2">Status</th>
                            <th class="px-4 py-2">Country</th>
                            <th class="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody v-if="referrals.length>0">
                        <tr v-for="x in referrals">
                            <td class=" px-4 py-2">{{ x.user.first_name }}</td>
                            <td class=" px-4 py-2">{{ x.user.last_name }}</td>
                            <td class=" px-4 py-2">{{x.verified?'verified':'unverified'}}</td>
                            <td class=" px-4 py-2">{{ x.country }}</td>
                            <td class=" px-4 py-2">{{ x.date_joined }}</td>
                        </tr>

                        <!-- Add more rows as needed -->
                    </tbody>

                </table>
            </div>
            <p class="text-center mt-5" v-if="null_referrals">No data available in table</p>
        </div>
        <alert :visible="copied_success">copied to clipboard
            <i class="fas fa-check-circle "></i>
        </alert>
    </div>
</template>

<script setup>
import Axios from 'axios'
const url = inject('url')
definePageMeta({
    layout: "db",
});
useHead({
    title: 'my Referrals'
})
const account = inject('account')
const referral_id = `https://dg-assets.com/auth/register/${account.value.profile.user.username}`
const referrals = ref([])
const null_referrals = ref(false)
const copied_success = ref(false)


const get_referrals = async () => {
    const res = await Axios.get(`${url}/account/get_referrals/`, {
        params: {
            'profile-id': account.value.profile.id
        }
    })

    if (res.data.status == 'failed') {
        null_referrals.value = true
    } else {
        referrals.value = res.data
    }
}
const copy_to_clipboard = (e) => {
    let ad_F = document.getElementById('referral_field')
    ad_F.select()
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            if (window.navigator.clipboard.writeText(ad_F.value)) {
                copied_success.value = true

                setTimeout(() => {
                    copied_success.value = false
                }, 2000);
            }
        } else {

        }
    });
};


onMounted(() => {
    get_referrals()
})
</script>

<style lang="scss" scoped></style>

<script  setup>
useHead({
    title: "Dashboard",
    script: [
        {
            src: "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",
            tagPosition: 'bodyClose',
            innerHTML: {
                "width": "100%",
                "height": "100%",
                "currencies": [
                    "EUR",
                    "USD",
                    "JPY",
                    "GBP",
                    "CHF",
                    "AUD",
                    "CAD",
                    "NZD",
                    "CNY"
                ],
                "isTransparent": false,
                "colorTheme": "light",
                "locale": "en"
            }
        }
    ]
})
definePageMeta({
    layout: 'db',

})
let forex_widget = ref('')

const props = defineProps(['api'])
const url = props.api;

const account = inject('account')

const plans = ref([])

const { data: transactions, error: error } = await useFetch(`${url}transaction/getTransact/`, {
    method: "get",
    query: { profileId: account.value.profile.id },
    watch: false,
    cache: false,
});

if (transactions.value) {
    for (let index = 0; index < transactions.value.length; index++) {
        if (transactions.value[index].plan && transactions.value[index].status == "approved" && transactions.value[index].progress != "completed") {
            plans.value.push(transactions.value[index])
        }

    }

}

const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
}

onMounted(() => {
    new TradingView.widget(
        {
            "autosize": true,
            "symbol": "NASDAQ:AAPL",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_b531b"
        }
    )


});
</script>

<template>
    <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 py-10 gap-5 font-sans text-black/70 font-semibold">
            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p class="">Account Balance</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.balance) }}</h2>

                    </div>
                    <div class="px-4 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa fa-wallet " aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Active Investment</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.active_investment) }}</h2>
                    </div>
                    <div class="px-4 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa fa-money-bill " aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Bonus</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.bonus) }}</h2>
                    </div>
                    <div class="px-4 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa fa-gift " aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Referral Bonus</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.referral_bonus) }}</h2>
                    </div>
                    <div class="px-3.5 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa fa-gifts" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Total Earnings</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.Total_earnings) }}</h2>
                    </div>
                    <div class="px-5 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa fa-dollar-sign" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Last Deposit</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.last_deposit) }}</h2>
                    </div>
                    <div class="px-4 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa-solid fa-circle-dollar-to-slot"></i>
                    </div>
                </div>
            </div>
            <div class="shadow shadow-black/30 py-6">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <p>Last Withdraw</p>
                        <h2 class="text-2xl font-mono">{{ format_amount(account.last_withdraw) }}</h2>
                    </div>
                    <div class="px-4 py-3 my-2 rounded-full bg-orange-600 align-top text-white">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- Referral -->
        <div class="shadow-md my-10 shadow-black/30 rounded-lg text-black/50 flex flex-col  gap-5 justify-center py-5 px-5">
            <div class="px-3">
                <div class="mb-2">
                    <h5 class="font-extrabold text-xl">Invite &amp; Earn</h5>
                    <p class="earn-text">Use the below link to invite your friends.</p>
                </div>

                <div class="flex items-center mb-1">
                    <input type="text"
                        :value="`https://digitalassetsgrowth.com/auth/register/${account.profile.user.username}`"
                        class="outline-none border py-3 w-full ps-3 bg-slate-200">
                    <a :href="'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=833959d5dc1e891b01eaf8c799cc1602&amp;service=copy_link&amp;title=DigitalAssets&amp;link=https://digitalassetsgrowth.com/auth/register/' + account.profile.user.username"
                        target="_blank" class="py-3 border px-5 bg-black/90 text-white hover:bg-black/60">
                        <i class="fa fa-copy "></i>
                    </a>
                </div>
                <p>

                    <a :href="'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=833959d5dc1e891b01eaf8c799cc1602&amp;service=facebook&amp;title=DigitalAssets&amp;link=https://digitalassetsgrowth.com/auth/register/' + account.profile.user.username"
                        target="_blank">
                        <i class="fa-brands fa-facebook material-icon m-1  w3-border w3-round-large  w3-hover-blue p-1"></i>
                    </a>
                    <a :href="'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=833959d5dc1e891b01eaf8c799cc1602&amp;service=whatsapp&amp;title=DigitalAssets&amp;link=https://digitalassetsgrowth.com/auth/register/' + account.profile.user.username"
                        target="_blank">
                        <i class="fa-brands fa-whatsapp material-icon m-1 w3-border w3-round-large  w3-hover-blue p-1"></i>
                    </a>
                    <a :href="'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=833959d5dc1e891b01eaf8c799cc1602&amp;service=telegram&amp;title=DigitalAssets&amp;link=https://digitalassetsgrowth.com/auth/register/' + account.profile.user.username"
                        target="_blank">
                        <i class="fa-brands fa-telegram m-1 material-icon w3-border w3-round-large w3-hover-blue p-1"></i>
                    </a>
                    <a :href="'https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=833959d5dc1e891b01eaf8c799cc1602&amp;service=twitter&amp;title=DigitalAssets&amp;link=https://digitalassetsgrowth.com/auth/register/' + account.profile.user.username"
                        target="_blank">
                        <i class="fa-brands fa-twitter material-icon m-1 w3-border w3-round-large w3-hover-blue p-1"></i>
                    </a>
                </p>
            </div>
        </div>
        <!-- plans -->
        <div class="py-20 border font-sans">
            <div class="flex flex-col gap-3 justify-center items-center">
                <p class="text-black/50 font-semibold ">You have <span class="font-mono">({{ plans.length }})</span> active
                    plan available, buy new plan!!</p>
                <NuxtLink to="/user/invest" class="px-7 py-3 w-fit text-white bg-orange-600 hover:bg-orange-400">Buy Plans
                </NuxtLink>
            </div>
        </div>

        <!-- tramsactions -->
        <div class="mt-7 shadow-md mb-7 py-10">
            <h2 class="text-center text-2xl py-4">Transactions</h2>
            <div class="shadow-md w-full overflow-x-auto overflow-y-auto max-h-96">
                <table class="table-auto w-full text-left border-separate border-spacing-y-1" v-if="transactions">
                    <thead class="w-full">
                        <tr class="capitalize bg-slate-200">
                            <th class="py-5 px-4">Date</th>
                            <th class="py-5 px-4">type</th>
                            <th class="py-5 px-4">Amount</th>
                            <!-- <th class="py-5 px-4">progress</th> -->
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="hover:bg-slate-100 text-sm font-sans text-black/50 font-semibold "
                            v-for="(tx, index) in transactions" :key="index">

                            <td class="px-5 py-3 border-b ">{{ new Date(tx.date).toLocaleString() }}</td>
                            <td class="px-5">{{ tx.type ?? "****" }}</td>
                            <td class="px-5 border-b font-mono">{{ format_amount(tx.amount) }}</td>

                            <!-- 
                            <td class="px-4  border-b" v-if="tx.status == 'pending'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-red-300 text-red-500">pending</span>
                            </td>
                            <td class="px-4  text-green-400 border-b" v-if="tx.status == 'approved'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-yellow-300 text-yellow-500">approved</span>
                            </td>
                            <td class="px-4 bg-red-600/50 text-red-400 border-b" v-if="tx.status == 'completed'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-green-300 text-green-500">complete</span>
                            </td> -->

                            <!-- <td class="px-4  border-b" v-if="tx.progress == 'pending'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-red-300 text-red-500">pending</span>
                            </td>
                            <td class="px-4  border-b" v-if="tx.progress == 'active'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-yellow-300 text-yellow-500">active</span>
                            </td>
                            <td class="px-4 border-b" v-if="tx.progress == 'completed'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-green-300 text-green-500">completed</span>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>

            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container" style="height:100%;width:100%">
                <div id="tradingview_b531b" style="height:500px; width:100%"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow"
                        target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>

            </div>
            <!-- TradingView Widget END -->

        </div>

    </div>
</template>

<style lang="scss" scoped></style>

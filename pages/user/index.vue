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
let forex_widget= ref('')

const userId = inject("userId");
const url = inject("url");

const account = inject('account')


const { data: transactions } = await useFetch(`${url}transaction/getTransact/`, {
    method: "get",
    query: { profileId: account.value.profile.id },
    watch: false,
    cache: false,
});


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
        <div class="grid md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
            <div class=" shadow-md h-36 rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.balance) }}</h2>
                        <p>Account Balance</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-black rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="h-36 shadow-md rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.active_investment) }}</h2>
                        <p>Active Investment</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-black rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="h-36 shadow-md rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.referral_bonus) }}</h2>
                        <p>bonus</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-black rounded-md align-top">
                        <i class="fa fa-long-arrow-right rotate-45 text-red-500" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="h-36 shadow-md rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.Total_earnings) }}</h2>
                        <p>Total Earnings</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-black rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex gap-5 md:flex-row flex-col">
            <div class="shadow-md shadow-black flex flex-col gap-5 justify-center max-w-sm w-full  h-80 px-10">
                <h1 class="text-2xl">Last Transactions</h1>
                <div class="flex justify-between px-5">
                    <h2 class="text-xl">Last Deposit:</h2>
                    <p>{{ format_amount(account.last_deposit) }}</p>
                </div>
                <div class="flex justify-between px-5">
                    <h2 class="text-xl">Last Withdraw:</h2>
                    <p>{{ format_amount(account.last_withdraw) }}</p>
                </div>
            </div>
            <div class="shadow-md shadow-violet-300 flex flex-col overflow-hidden gap-5 justify-center flex-grow h-80 px-5">
                <div class="card p-3 text-center">
                    <div>
                        <h5 class="font-extrabold text-xl">Invite &amp; Earn</h5>
                        <p class="earn-text">Earn up to $20.00 for each friend that verifies his/her account

                        </p>
                    </div>
                    <br>
                    <div>
                        <p class="border-b-2 text-center text-sm font-semibold line-clamp-1 text-ellipsis">
                            https://digitalassets.com/auth/register/?{{ account.profile.id }}</p><br>

                    </div>
                    <p>
                        <a href="https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=2bfcbbbbbf2cedbc44c4ea4602e3c148&amp;service=copy_link&amp;title=GoldenWealths&amp;link=https://goldenwealths.com/user/register/?ref=608fbea8d46c43f8f4a61f85a3c331dd"
                            target="_blank">
                            <i class=" m-1 fa fa-copy w3-border w3-round-large  w3-hover-blue p-1"></i>
                        </a>
                        <a href="https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=2bfcbbbbbf2cedbc44c4ea4602e3c148&amp;service=facebook&amp;title=GoldenWealths&amp;link=https://goldenwealths.com/user/register/?ref=608fbea8d46c43f8f4a61f85a3c331dd"
                            target="_blank">
                            <i
                                class="fa-brands fa-facebook material-icon m-1  w3-border w3-round-large  w3-hover-blue p-1"></i>
                        </a>
                        <a href="https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=2bfcbbbbbf2cedbc44c4ea4602e3c148&amp;service=whatsapp&amp;title=GoldenWealths&amp;link=https://goldenwealths.com/user/register/?ref=608fbea8d46c43f8f4a61f85a3c331dd"
                            target="_blank">
                            <i
                                class="fa-brands fa-whatsapp material-icon m-1 w3-border w3-round-large  w3-hover-blue p-1"></i>
                        </a>
                        <a href="https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=2bfcbbbbbf2cedbc44c4ea4602e3c148&amp;service=telegram&amp;title=GoldenWealths&amp;link=https://goldenwealths.com/user/register/?ref=608fbea8d46c43f8f4a61f85a3c331dd"
                            target="_blank">
                            <i
                                class="fa-brands fa-telegram m-1 material-icon w3-border w3-round-large w3-hover-blue p-1"></i>
                        </a>
                        <a href="https://www.shareaholic.com/api/share/?v=1&amp;apitype=1&amp;apikey=2bfcbbbbbf2cedbc44c4ea4602e3c148&amp;service=twitter&amp;title=GoldenWealths&amp;link=https://goldenwealths.com/user/register/?ref=608fbea8d46c43f8f4a61f85a3c331dd"
                            target="_blank">
                            <i
                                class="fa-brands fa-twitter material-icon m-1 w3-border w3-round-large w3-hover-blue p-1"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-7 shadow-md mb-7 py-10">
            <h2 class="text-center text-2xl py-4">Transactions</h2>
            <div class="shadow-md w-full overflow-x-auto">
                <table class="table-auto w-full text-left border-separate border-spacing-y-1" v-if="transactions">
                    <thead class="w-full">
                        <tr class="capitalize bg-slate-200">
                            <th class="py-5 px-4">Transaction Id</th>
                            <th class="py-5 px-4">amount</th>
                            <th class="py-5 px-4">type</th>
                            <th class="py-5 px-4">status</th>
                            <th class="py-5 px-4">progress</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="hover:bg-slate-100" v-for="(tx, index) in transactions" :key="index">
                            <td class="px-4 py-3 border-b">{{ tx.transact_id }}</td>
                            <!-- <td class="px-4">{{ tx.type }}</td> -->
                            <!-- <td class="px-4">{{ tx.channel }}</td> -->
                            <td class="px-4 border-b">{{ format_amount(tx.amount) }}</td>
                            <td class="px-4 border-b">{{ tx.type ?? '****' }}</td>

                            <td class="px-4  border-b" v-if="tx.status == 'pending'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-red-300 text-red-500">pending</span>
                            </td>
                            <td class="px-4  text-green-400 border-b" v-if="tx.status == 'approved'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-yellow-300 text-yellow-500">approved</span>
                            </td>
                            <td class="px-4 bg-red-600/50 text-red-400 border-b" v-if="tx.status == 'completed'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-green-300 text-green-500">complete</span>
                            </td>

                           

                            <td class="px-4  border-b" v-if="tx.progress == 'pending'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-red-300 text-red-500">pending</span>
                            </td>
                            <td class="px-4  border-b" v-if="tx.progress == 'active'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-yellow-300 text-yellow-500">active</span>
                            </td>
                            <td class="px-4 border-b" v-if="tx.progress == 'completed'">
                                <span class="w-fit border px-5 py-1 rounded-md text-sm border-green-300 text-green-500">completed</span>
                            </td>
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

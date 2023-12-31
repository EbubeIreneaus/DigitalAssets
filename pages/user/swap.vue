<template>
    <div>
        <div>
            <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                <li class="flex items-center justify-evenly max-w-[200px] border my-2.5 py-4 shadow shadow-black/60"
                    v-for="coin in coins">
                    <img :src="`/img/crypto/${coin.name}.png`" class="w-10 h-10" />
                    <div>
                        <span>0</span>&nbsp;<span>{{ coin.name.toUpperCase() }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="my-7">
            <div class="flex flex-col gap-2 lg:flex-row">
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container" style="height:100%;width:100%">
                    <div id="tradingview_b531b" style="height:500px; width:100%"></div>
                    <div class="tradingview-widget-copyright">
                        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                            <span class="blue-text">Track all markets on TradingView</span>
                        </a>
                    </div>
                </div>
                <!-- TradingView Widget END -->

                <div class="max-w-sm w-full">
                    <form class="font-semibold text-black/60 font-sans">
                        <div class="mb-3">
                            <label class="px-1">Source Account:</label>
                            <select class="block appearance-none border-2 outline-none w-full ps-5 py-4 my-3.5" v-model="form.source">
                            <option v-for="coin in coins" :value="coin.name">{{ coin.name.toUpperCase() }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class=" px-1">Destination Account:</label>
                            <select class="block appearance-none border-2 outline-none w-full ps-5 py-4 my-3.5" v-model="form.destination">
                            <option v-for="coin in coins" :value="coin.name">{{ coin.name.toUpperCase() }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class=" px-1">Amount:</label>
                            <input type="text" inputmode="numeric" pattern="{0-9}+" :placeholder="`Amount of ${form.source}`"
                            class="block appearance-none border-2 outline-none w-full ps-5 py-4 my-3.5" v-model="form.amount"
                            @change="convert" />
                           
                        </div>
                        <div class="mb-3">
                            <label class=" px-1">You will get:</label>
                            <input type="text" inputmode="numeric" pattern="{0-9}+" readonly
                            class="block appearance-none border-2 outline-none w-full ps-5 py-4 my-3.5" :value="`${form.cv} ${form.destination}`" />
                           
                        </div>
                        <p class="text-lg font-bold px-3">Fees = <span class="font-sans">40%</span></p>
                        <div>
                            <button type="submit" class="py-3 px-20 my-5 bg-green-700 text-white rounded-xl">Swap</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'db'

})
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
const props = defineProps(['api'])
const url = props.api
const coins = {
    'usd': { name: 'usd', count: 0, price: 0.0 },
    'btc': { name: 'btc', count: 0, price: 0.0 },
    'eth': { name: 'eth', count: 0, price: 0.0 },
    'ltc': { name: 'ltc', count: 0, price: 0.0 },
    'link': { name: 'link', count: 0, price: 0.0 },
    'bnb': { name: 'bnb', count: 0, price: 0.0 },
    'ada': { name: 'ada', count: 0, price: 0.0 },
    'aave': { name: 'aave', count: 0, price: 0.0 },
    'usdt': { name: 'usdt', count: 0, price: 0.0 },
    'bch': { name: 'bch', count: 0, price: 0.0 },
    'xrp': { name: 'xrp', count: 0, price: 0.0 },
    'xlm': { name: 'xlm', count: 0, price: 0.0 },
}

const form = reactive({
    source: 'usd',
    destination: 'btc', 
    amount: '',
    cv: ''
})

const convert = async ()=>{
    const {data:convert, pending, error} = await useFetch(`${url}/manager/convert/`,{
        params:{"source":form.source, 'destination': form.destination, 'amount': form.amount},
        watch: false
    })

    if(error){

    }
    if(convert.value.status == 'success'){
        form.cv = convert.value.return
    }
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

<style lang="scss" scoped></style>
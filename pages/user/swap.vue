<template>
    <div>
        <div>
            <ul class="flex flex-wrap justify-between ">
                <li class="flex items-center justify-evenly min-w-[200px] border my-2.5 py-4 shadow shadow-black/60"
                    v-for="coin in coins">
                    <img :src="`/img/crypto/${coin.name}.png`" class="w-10 h-10" />
                    <div>
                        <span>0</span>&nbsp;<span>{{ coin.name.toUpperCase() }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="my-7">
            <div class="flex">
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

                <div class="max-w-md w-full">
                    
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
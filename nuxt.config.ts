// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Digital Assets",
      script: [
        { src: "https://s3.tradingview.com/tv.js", tagPosition: 'head' },
        {
          src: "/main.js",
          // tagPosition: 'head',
          // async: 'true'
        },
      ],
    }
  },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.css', '@splidejs/splide/css', 'animate.css/animate.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})

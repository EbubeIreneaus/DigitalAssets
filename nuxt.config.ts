// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Digital Assets",
      script: [
        { src: "https://s3.tradingview.com/tv.js", tagPosition: 'head' },
        {
          src: "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
          tagPosition:'bodyClose',
          async: 'true'
        },
        {
          src: "/main.js",
          tagPosition: 'bodyClose',
          async: 'true'
        },
      
      ],
    }
  },
  css: ['~/assets/css/style.css','~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.css', '@splidejs/splide/css', 'animate.css/animate.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})

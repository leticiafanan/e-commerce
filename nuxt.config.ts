export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    css: "/<rootDir>/assets/css"
  },

  css: ["@/assets/css/main.css"],
  modules: ["vue3-carousel-nuxt", 'vue3-carousel-nuxt'],
  carousel: {
    prefix: 'MyPrefix'
  },
  

});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css:['@/assets/css/main.css'],
  // routeRules: {
  //   '/user': { redirect: '/user/orders' }
  // },
  devServer: {
    port: 8000
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag)
    },
  },
  runtimeConfig: {
    public:{
      BASE_URL:"http://test.vodiyshop.uz/api/"
    }
  }
})

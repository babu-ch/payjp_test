// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "./assets/css/common.css"
  ],
  runtimeConfig: {
    payjpSecretKey: process.env.PAYJP_SECRET_KEY,
    public: {
      payjpPublicKey: process.env.PAYJP_PUBLIC_KEY,
    },
  }
})

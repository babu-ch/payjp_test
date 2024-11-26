// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "./assets/css/common.css"
  ],
  runtimeConfig: {
    // これらの環境変数はサーバーサイドでのみアクセスできます
    payjpSecretKey: process.env.PAYJP_SECRET_KEY,  // サーバーサイドで利用
  }
})

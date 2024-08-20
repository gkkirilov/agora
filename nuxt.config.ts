// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/supabase',
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n",
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/fonts"
  ],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },

  headlessui: {
    prefix: ''
  },
  supabase: {
    url: 'https://feeekmidhmjdpntdvafv.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZWVrbWlkaG1qZHBudGR2YWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzMzODMsImV4cCI6MjAzMTIwOTM4M30.LCtHPNVkI9_1GHwsVmzK5e5bhfoYfOvq1hMdwpvy4Co',
    serviceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZWVrbWlkaG1qZHBudGR2YWZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTYzMzM4MywiZXhwIjoyMDMxMjA5MzgzfQ.P265IwAPTCoFAidsM51Qohg06sQgUCtac291hVAGBO0',
    redirectOptions: {
      login:'/login',
      callback: '/confirm',
      include: ['/admin(/*)?']
    }
  },
  piniaPersistedstate: {
    debug: true
  },
  compatibilityDate: '2024-08-20',
})
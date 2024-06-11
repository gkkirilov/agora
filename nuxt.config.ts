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
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],

  googleFonts: {
    // Options
    families: {
      Signika: {
        wght: '300..700',
      },
    }
  },
  
  imports: {
    dirs: ['./stores'],
  },

  headlessui: {
    prefix: ''
  },
  supabase: {
    url: 'https://feeekmidhmjdpntdvafv.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZWVrbWlkaG1qZHBudGR2YWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzMzODMsImV4cCI6MjAzMTIwOTM4M30.LCtHPNVkI9_1GHwsVmzK5e5bhfoYfOvq1hMdwpvy4Co',
    redirectOptions: {
      login:'/login',
      callback: '/confirm',
      include: ['/admin(/*)?']
    }
  },
})
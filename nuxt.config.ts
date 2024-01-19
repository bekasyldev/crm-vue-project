// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon', ['@nuxtjs/google-fonts', {
    // fonts settings
    families: {
      Montserrat: {
        wght: [300, 400, 700],
        ital: [300]
      }
    }
  }]],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  // to store state
  pinia: {
    storesDirs: ['./store/**']
  }
})


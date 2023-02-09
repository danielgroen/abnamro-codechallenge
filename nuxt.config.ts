// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  target: 'static',
  ssr: false,
  css: ['/assets/scss/main.scss'],
  app: {
    baseURL: '/abnamro-codechallenge/'
  },
  components: [
    { path: '~/components/', extensions: ['vue'], pathPrefix: false }
  ],
  alias: {
    '@': '<rootDir>/',
    "@utils": "/utils",
    "@assets": `/assets`,
    "@composables": `/composables`,
    "@constants": `/constants`,
    "@atom": `<rootDir>/components/atom`,
    "@molecule": `<rootDir>/components/molecule`,
    "@organism": `<rootDir>/components/organism`,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/scss/variables/index.scss"; @import "/assets/scss/mixins/index.scss";',
        },
      },
    },
  },
  imports: {
    dirs: [
      'composables', // Scan top-level modules
      './components/**/**/*.composable.{ts,js,mjs,mts}' // ... or scan modules nested one level deep with a specific name and file extension
    ]
  },
  modules: ["@lewebsimple/nuxt3-svg"]
})

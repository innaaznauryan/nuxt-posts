// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { port: 8080},
  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:3000/'
    }
  },
  app: {
    head: {
      title: "Posts"
    }
  },
  modules: ['@nuxtjs/sitemap']
})

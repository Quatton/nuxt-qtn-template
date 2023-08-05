// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-vitest", "@nuxtjs/eslint-module"],

  build: {
    transpile: ["trpc-nuxt"],
  },

  plugins: ["/c:/Users/Atom/Documents/GitHub/nuxt-qtn-template/plugins/trpc.ts"],
});

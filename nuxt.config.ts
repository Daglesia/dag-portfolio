// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@use \"@/assets/global.scss\" as *;"
                }
            }
        }
    },
    modules: ["nuxt-icon", "@nuxtjs/eslint-module", "@pinia/nuxt"]
});

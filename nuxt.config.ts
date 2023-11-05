// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        baseURL: '/forsaken-lands-landing/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@/assets/global.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
        transpile: [/^@fortawesome/],
    }
})

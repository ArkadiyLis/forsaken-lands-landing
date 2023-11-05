import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faTwitter,
    faReddit,
    faDiscord,
    faSteam,
    faYoutube,
    faGithub,
    faFacebook,
    faVk,
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faTwitter,
    faReddit,
    faDiscord,
    faSteam,
    faYoutube,
    faGithub,
    faFacebook,
    faVk
)

// This is important, we are going to let Nuxt worry about the CSS
// config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
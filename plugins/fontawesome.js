import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icon library
library.add(fas, faEnvelope, fab, faGithub, faTwitter, faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
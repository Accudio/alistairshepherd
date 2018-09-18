import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icon library
library.add(faEnvelope, faEnvelopeOpen, faPhone, faCommentAlt, faGithub, faTwitter, faLinkedin, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
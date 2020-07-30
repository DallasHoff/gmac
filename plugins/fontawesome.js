import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone, faBrain, faBalanceScale, faShieldAlt, faRunning, faSmileBeam, faFistRaised, faArrowCircleRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faEnvelope, faPhone, faFacebookSquare, faBrain, faBalanceScale, faShieldAlt, faRunning, faSmileBeam, faFistRaised, faArrowCircleRight, faLink)

Vue.component('fa', FontAwesomeIcon)

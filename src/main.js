import {createApp} from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import {bulmaConfig} from '@oruga-ui/theme-bulma'

import '@/assets/styles/style.scss'
/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'

import router from './router'

/* add icons to the library */
library.add(fas)
library.add(faFontAwesome)

createApp(App).use(router).use(Oruga, bulmaConfig, {iconPack: 'fas',}).mount('#app')
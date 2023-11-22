import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck} from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret)
library.add(faSquare)
library.add(faSquareCheck)
library.add(faTrashCan)
library.add(faRectangleXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

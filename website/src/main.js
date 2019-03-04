import '@babel/polyfill'
import Vue from "vue"
import bootstrap from 'bootstrap-vue'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Ripple from 'vue-ripple-directive'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSeedling, faUsers, faChartLine, faQuestionCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import scrollTo from 'vue-scrollto'
import { VueTyper } from 'vue-typer'
import { VStepper } from 'vue-stepper-component'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false

Vue.use(bootstrap)
Vue.use(scrollTo)
Vue.directive('ripple', Ripple)
library.add(faSeedling, faUsers, faChartLine, faQuestionCircle, faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-typer', VueTyper)
Vue.component('v-stepper', VStepper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

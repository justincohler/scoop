import '@babel/polyfill'
import Vue from "vue";
import bootstrap from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Ripple from 'vue-ripple-directive'

Vue.config.productionTip = false;

Vue.use(bootstrap)
Vue.directive('ripple', Ripple);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

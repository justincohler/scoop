import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/animate";
import "quasar-extras/roboto-font";
import "quasar-extras/fontawesome";
import Quasar from "quasar";

Vue.use(Quasar, {
  config: {},
  iconSet: iconSet
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

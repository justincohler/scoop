import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Signup,
      children: [
        {
          path: "",
          component: () => import("./components/hero.vue")
        },
        {
          path: "signup",
          component: () => import("./components/form.vue"),
          children: [
            {
              path: "",
              component: () => import("./components/form-general-info.vue")
            },
            {
              path: "setup",
              component: () => import("./components/form-setup.vue")
            },
            {
              path: "payment",
              component: () => import("./components/form-payment.vue")
            }
          ]
        }
      ]
    },
  ]
});

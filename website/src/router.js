import Vue from "vue"
import Router from "vue-router"
import signupView from "./views/Home.vue"
import loginView from "./views/Login.vue"
import dashboardView from "./views/Dashboard.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: signupView,
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
    {
      path: "/login",
      name: "login",
      component: loginView
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboardView
    }
  ]
})

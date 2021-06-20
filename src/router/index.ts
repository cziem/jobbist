import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home/index.vue";
import Login from "@/views/auth/Login.vue";

// Layouts
import AppLayout from "@/components/layouts/AppLayout.vue";
import AuthLayout from "@/components/layouts/AuthLayout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      layout: AppLayout,
    },
  },
  /* AUTHENTICATION ROUTES */
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: AuthLayout,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

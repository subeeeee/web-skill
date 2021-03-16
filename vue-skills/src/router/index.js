import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: {
      role: [],
      keepAlive:false
    },
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        meta: {
          role: [],
          keepAlive:false
        },
        component: () => import("@/views/business/business.vue")
      },
    ]
  },
  {
    path: "/",
    name: "Home",
    meta: {
      role: [],
      keepAlive:false
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      role: [],
      keepAlive:false

    },
    component: () => import("@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;

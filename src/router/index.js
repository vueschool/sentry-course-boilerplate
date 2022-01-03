import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/About.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

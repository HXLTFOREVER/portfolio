import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/memory",
    name: "Memory",
    component: () => import("../views/Memory.vue"),
  },
  {
    path: "/dialy",
    name: "Dialy",
    component: () => import("../views/Dialy.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

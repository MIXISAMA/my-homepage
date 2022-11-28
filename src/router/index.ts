import { createRouter, createWebHistory } from "vue-router";

import Menu from '../views/MenuView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: Menu,
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/spotlight",
      name: "spotlight",
      component: () => import("../views/Spotlight.vue"),
    },
    {
      path: "/check-tick",
      name: "check-tick",
      component: () => import("../views/CheckTick.vue"),
    },
    {
      path: "/toggle-button",
      name: "toggle-button",
      component: () => import("../views/ToggleButton.vue"),
    },
    {
      path: "/hamburger-menu",
      name: "hamburger-menu",
      component: () => import("../views/HamburgerMenu.vue"),
    },
    {
      path: "/flip-card",
      name: "flip-card",
      component: () => import("../views/FlipCard.vue"),
    },
  ],
});

export default router;

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
    {
      path: "/circle-count-down",
      name: "circle-count-down",
      component: () => import("../views/CircleCountDown.vue"),
    },
    {
      path: "/water-drops",
      name: "water-drops",
      component: () => import("../views/WaterDrops.vue"),
    },
    {
      path: "/colors-cat",
      name: "colors-cat",
      component: () => import("../views/ColorsCat.vue"),
    },
    {
      path: "/happy-new-year",
      name: "happy-new-year",
      component: () => import("../views/HappyNewYear.vue"),
    },
    {
      path: "/emoji-dock",
      name: "emoji-dock",
      component: () => import("../views/EmojiDock.vue"),
    },
    {
      path: "/cyberpunk-glitch-button",
      name: "cyberpunk-glitch-button",
      component: () => import("../views/CyberpunkGlitchButton.vue"),
    },
    {
      path: "/sketch-text-animation",
      name: "sketch-text-animation",
      component: () => import("../views/SketchTextAnimation.vue")
    },
  ],
});

export default router;

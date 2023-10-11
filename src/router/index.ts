import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SwitchDocView from "../views/SwitchDocView.vue";
import ButtonDocView from "../views/ButtonDocView.vue";
import DialogDocView from "../views/DialogDocView.vue";
import TabsDocView from '../views/TabsDocView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/doc",
      name: "doc",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DocView.vue"),
      children: [
        { path: "/doc/switch", component: SwitchDocView },
        { path: "/doc/button", component: ButtonDocView },
        { path: "/doc/dialog", component: DialogDocView },
        { path: "/doc/tabs", component: TabsDocView },
      ],
    },
  ],
});

export default router;

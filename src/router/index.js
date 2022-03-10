import { createRouter, createWebHistory } from "vue-router";

// Components
import Billing from "../views/Billing.vue";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/billing",
      name: "Billing",
      component: Billing,
    },
  ],
});

export default router;

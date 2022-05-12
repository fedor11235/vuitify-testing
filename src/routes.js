import DashBoard from "./views/DashBoard"
import MyProjects from "./views/MyProjects"
import MyTeam from "./views/MyTeam"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/projects",
    name: "projects",
    component: MyProjects,
  },
  {
      path: "/team",
      name: "team",
      component: MyTeam,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

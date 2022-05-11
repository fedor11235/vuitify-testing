import Vue from "vue";
import Router from "vue-router"
import DashBoard from "./views/DashBoard"
import MyProjects from "./views/MyProjects"
import MyTeam from "./views/MyTeam"

Vue.use(Router)

export default new Router ({
    mode:"history",
    base: process.env.BASE_URL,
    routes: [
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
    ]
})
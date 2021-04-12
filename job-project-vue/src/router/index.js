import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import Jobdetails from "../views/jobs/Jobdetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/Jobs/:id",
    name: "Jobdetails",
    component: Jobdetails,
    props: true,
  },
  {
    //redirect:
    path: "/Jobs/all-jobs",
    redirect: "/Jobs",
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import Resister from "./views/Resister.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/resister",
      component: Resister,
    },
  ],
});

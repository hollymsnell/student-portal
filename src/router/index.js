import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
// import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import ShowCapstoneView from "../views/ShowCapstoneView.vue";
import EditCapstoneView from "../views/EditCapstoneView.vue";
import ShowResumeView from "../views/ShowResumeView.vue";
import EditResumeView from "../views/EditResumeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/students/capstone/:id",
    name: "ShowCapstone",
    component: ShowCapstoneView,
  },
  {
    path: "/students/capstone/:id/edit",
    name: "EditCapstone",
    component: EditCapstoneView,
  },
  {
    path: "/students/resume/:id",
    name: "ShowResume",
    component: ShowResumeView,
  },
  {
    path: "/students/resume/:id/edit",
    name: "EditResume",
    component: EditResumeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  // { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

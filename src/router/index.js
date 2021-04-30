import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* 导入组件 */
const Login = () => import("views/login/Login");
const Register = () => import("views/register/Register");
const Home = () => import("views/home/Home");
// 测试
const test = () => import("views/test/test");
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/test",
    component: test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

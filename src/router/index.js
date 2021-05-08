import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* 导入组件 */
const Login = () => import("views/login/Login");
const Register = () => import("views/register/Register");
//首页home
const Home = () => import("views/home/Home");
//发表文章
const Publish = () => import("views/publish/Publish");
//文章内容
const Article = () => import("views/article/Article");

const routes = [
  {
    path: "/",
    redirect: "/home",
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
    path: "/publish",
    component: Publish,
  },
  {
    path: "/article/:id",
    component: Article,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//路由守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;

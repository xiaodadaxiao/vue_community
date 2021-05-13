import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//解决路由重复
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

/* 导入组件 */
const Login = () => import("views/login/Login");
const Register = () => import("views/register/Register");
//首页home
const Home = () => import("views/home/Home");
//发表文章
const Publish = () => import("views/publish/Publish");
//文章内容
const Article = () => import("views/article/Article");
//个人信息
const UserInfo = () => import("views/userInfo/UserInfo");

//保存路由path到本地的函数
import { savePath } from "utils/routerRecord";

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
  {
    path: "/userInfo/:id",
    component: UserInfo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//路由守卫
router.beforeEach((to, from, next) => {
  //保存路由到本地
  savePath(to.path);
  next();
});
export default router;

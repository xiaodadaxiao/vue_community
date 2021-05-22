import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);
//解决路由重复
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

/* 导入组件 */
const NotFound = () => import("components/notFound/NotFound");
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
    path: "*",
    component: NotFound,
  },
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
    //守卫
  },
];
//滚动行为
function scrollBehavior(to, from, savedPosition) {
  // return 期望滚动到哪个的位置
  if (savedPosition) {
    //在按下 后退/前进 按钮时
    return savedPosition;
  } else {
    return { x: 0, y: 0 }; //behavior: "smooth" //平滑滚动
  }
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
});
//路由守卫
router.beforeEach((to, from, next) => {
  //保存路由到本地
  savePath(to.path);
  if (
    (to.path == "/publish" && !store.state.isLogin) ||
    (to.path.indexOf("/userInfo/") >= 0 && !store.state.isLogin)
  ) {
    next("login");
  } else {
    next();
  }
});
export default router;

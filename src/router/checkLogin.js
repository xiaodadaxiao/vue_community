import { checkToken } from 'network/checkToken'
import { getUser } from 'network/userInfo';
import store from '../store'
export default async function checkLogin(to, from, next) {

    if (store.state.isLogin) {
        //登陆。放行
        return next();
    }
    /* 检测token */
    if (localStorage.getItem('token')) {
        //网络查询token
        let res = await checkToken();
        if (res.Status == "400") {
            localStorage.removeItem('token');
            store.commit('login', false);
            return;
        }
        //已登陆 200，201
        store.commit('login', true);
        //更新token
        if (res.Status == "201") {
            localStorage.setItem('token', res.token);
        }
        //查询用户信息
        let userRes = await getUser();
        if (userRes.Status == "200") {
            //保存用户信息到vuex
            store.commit('setUserInfo', userRes.user);
        } else {
            //请求用户信息失败
            console.log('请求用户信息失败');
        }
    }
    //没有登陆，访问敏感页
    if ((to.path == "/publish" && !store.state.isLogin)
        || (to.path.indexOf("/userInfo/") >= 0 && !store.state.isLogin)) {
        next("login");
    } else {
        next();
    }
}

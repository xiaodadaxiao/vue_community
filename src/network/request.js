import axios from "axios";
import NProgress from "plugins/nprogress";
import { Message } from "element-ui";
export default function request(config) {
  //创建axios的实例一
  //( 目前项目只有一个实例 ,不同参数可以创建不同实例,对应不同网络请求)
  const instance = axios.create({
    //默认请求url
    // baseURL: "http://localhost:8080/",
    // baseURL: "http://192.168.8.101:8081/",
    baseURL: "http://81.70.10.158:8080/",
    //请求时间最长
    timeout: 5000,
  });
  //请求拦截器
  instance.interceptors.request.use(
    (config) => {
      NProgress.start();
      config.headers = {
        //请求头携带token
        token: localStorage.getItem("token"),
      };
      //最后传递处理后的数据
      return config;
    },
    (err) => {
      NProgress.done();
      console.log(err);
      Message.error('网络请求失败:' + err)
    }
  );
  //响应拦截器
  instance.interceptors.response.use(
    (config) => {
      NProgress.done();
      //最后传递处理后的数据
      return config.data;
    },
    (err) => {
      NProgress.done();
      console.log(err);
      Message.error('网络请求失败:' + err)
    }
  );

  //发送请求
  return instance(config);
}
export function request2() {
  //创建axios的实例二
  const instance2 = axios.create({
    //默认请求url

    baseURL: "http://81.70.10.158:8080/",
    //请求时间最长
    timeout: 5000,
  });
  //请求拦截器
  instance2.interceptors.request.use(
    (config) => {
      //NProgress.start();
      config.headers = {
        //请求头携带token
        token: localStorage.getItem("token"),
      };
      //最后传递处理后的数据
      return config;
    },
    (err) => {
      NProgress.done();
      console.log(err);
      Message.error('网络请求失败:' + err)
    }
  );
  //响应拦截器
  instance2.interceptors.response.use(
    (config) => {
      //NProgress.done();
      //最后传递处理后的数据
      return config.data;
    },
    (err) => {
      NProgress.done();
      console.log(err);
      Message.error('网络请求失败:' + err)
    }
  );

  //发送请求
  return instance2;
}

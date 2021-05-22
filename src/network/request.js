import axios from "axios";
export default function request(config) {
  //创建axios的实例一
  //( 目前项目只有一个实例 ,不同参数可以创建不同实例,对应不同网络请求)
  const instance = axios.create({
    //默认请求url
    // baseURL: "http://localhost:8080/",
    // baseURL: "http://localhost:8081/",
    baseURL: "http://192.168.8.101:8081/",
    //请求时间最长
    timeout: 5000,
  });
  //请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 读取token
      let token = localStorage.getItem("token");
      //console.log("token:" + token);
      config.headers = {
        //请求头携带token
        token: token,
      };

      //最后传递处理后的数据
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  //响应拦截器
  instance.interceptors.response.use(
    (config) => {
      //console.log(config);
      //最后传递处理后的数据
      return config.data;
    },
    (err) => {
      console.log(err);
      //throw err;
    }
  );

  //发送请求
  return instance(config);
}

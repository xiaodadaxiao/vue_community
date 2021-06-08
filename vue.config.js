//是否是生产环境
const isProduction = false;
const path = require("path"); //引入path模块
//引入compression-webpack-plugin插件 用于打包
const CompressionWebpackPlugin = require("compression-webpack-plugin");

//console.log(process.env.NODE_ENV);
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  devServer: {
    port: 8080, // 端口
  },
  chainWebpack: (config) => {
    //配置路径别名
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("network", resolve("./src/network"))
      .set("common", resolve("./src/common"))
      .set("utils", resolve("./src/utils"))
      .set("plugins", resolve("./src/plugins"))
      .set("router", resolve("./src/router"));
  },
  configureWebpack: (config) => {
    /* 生产模式 */
    if (isProduction) {
      // 使用cdn
      config.externals = {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        "element-ui": "ELEMENT",
        "vue-quill-editor": "VueQuillEditor",
        nprogress: "NProgress",
      };
      // 打包生产.gz包
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.html$|\.css/, // 匹配的文件名
          threshold: 10240, // 文件超过10k，进行gzip压缩
          minRatio: 0.8,
          deleteOriginalAssets: false, // 是否删除原文件
        })
      );
    }
  },
  css: {
    //css loader
    loaderOptions: {
      less: {
        globalVars: {
          "color-red": "#fd281a",
          "color-blue": "#1890ff",
        },
      },
    },
  },
};

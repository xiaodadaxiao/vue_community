import Vue from "vue";
// 导入样式表
import "element-ui/lib/theme-chalk/index.css";
/* 隐藏显示样式表 */
import "element-ui/lib/theme-chalk/display.css";
/* 按需导入element-ui的组件 */

import {
  Row,
  Col,
  Button,
  Form,
  FormItem,
  Input,
  Link,
  Message,
  Loading,
  Menu,
  Submenu,
  MenuItem,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "element-ui";

//注册
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Link);
Vue.use(Loading.directive);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);
//全局挂载弹窗组件
Vue.prototype.$message = Message;
//Vue.prototype.$confirm = MessageBox.confirm;

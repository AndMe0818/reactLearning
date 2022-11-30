// router index.js
import AdduserRFC from "../pages/AdduserRFC";
import AdduserRCC from "../pages/AdduserRCC";

const routers = [
  {
    path: "/adduser-rfc",
    name: "添加用户函数组件",
    components: AdduserRFC, // 引入pages文件下的页面
  },
  {
    path: "/adduser-rcc",
    name: "添加用户类组件",
    components: AdduserRCC,
  },
];

export default routers; // 将数组导出

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// antd
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// 路由
import { BrowserRouter, HashRouter } from "react-router-dom";

dayjs.locale("zh-cn");

const antdConfig = {
  locale: zhCN,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider {...antdConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

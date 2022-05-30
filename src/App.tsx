import React from "react";
import logo from "./logo.svg";
import sl from "./App.module.css";

const menuList = ["Language", "我的订单", "客户服务", "合作中心"];

function App() {
  return (
    <div>
      <div className={sl.topNavWrapper}>
        <div className={sl.topNav}>
          <div className={sl.topLogin}>
            <span>您好，请</span>
            <a href="">登录</a>
            <a href="">注册</a>
            <img src="" alt="" />
          </div>

          <div className={sl.topNavRight}>
            <ul>
              {menuList.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

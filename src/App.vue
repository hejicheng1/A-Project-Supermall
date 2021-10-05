<template>
  <div id="app">
    <tab-bar class="tab-bar">
      <tab-bar-item path="Home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path="Categroy">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="Cart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="Profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <!-- 显示视图数据 -->
    <router-view></router-view>
    <!-- <router-link to="/a">首页</router-link>
     <span> <router-link to="/about">关于用户</router-link></span>
      <router-view></router-view> -->
  </div>
</template>

<script>
// ../  页面所在文件夹的外面一层
// ./ 页面所在目录(相当于不写，直接写文件或图片名字)
// 导入组件
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
// 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)

import VueRouter from "vue-router";
import Vue from "vue";

// 导入路由对象，并且调用 Vue.use(VueRouter)
Vue.use(VueRouter);
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
 
  },
};
</script>

<style>
@import "./assets/css/base.css";
span{
  margin-left: 30px;
}
.tab-bar{
  position:fixed;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
}
</style>

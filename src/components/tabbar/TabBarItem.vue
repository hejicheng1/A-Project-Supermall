<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <!-- @click='itemClick'事件监听  监听可以变化-->
  <div class="tab-bar-item"  @click='itemClick'>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 活跃时对颜色进行更改 -->
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{path:String},
  data() {
    return {
      // isActive: true,
   
    };
  },
  computed: {
    isActive(){
      // $route为当前router跳转对象里面可以获取name、path、query、params等。
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick(){
      //获取当前路由
    this.$router.replace(this.path)
    }
  }
};

// scoped作用域的意思 只在当前模板起作用
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>

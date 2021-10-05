<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <p class="fz">客服</p>
      </div>
      <div>
        <i class="icon shop"></i>
        <p class="fz">店铺</p>
      </div>
      <div>
        <i class="icon select"></i>
        <p class="fz">收藏</p>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart fz" @click="addToCart">加入购物车</div>
      <div class="buy fz">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
      // console.log("已添加到购物车");
      // window.alert("成功加入购物车");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  z-index: 1;
  background: #fff;
  height: 52px;
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0px;
  text-align: center;
  /* line-height: 55px; */
}
.fz {
  font-size: 13px;
  color: black;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 20px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 7px auto 3px;
  background: url("../../../assets/css/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 20px;
  color: #fff;
  line-height: 50px;
}
.bar-right .cart {
  background-color: #ffe817;
  font-size: 16px;
}
.bar-right .buy {
  background-color: #f69;
  font-size: 15px;
  color: #fff;
}
.sport-ball {
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <!-- <div>{{$store.state.cartList.length}}</div> -->
    <!-- <div><li v-for="item in  $store.state.cartList" :key="item.id">{{item}}</li></div> -->
    <detail-swiper :top-images="topImages"></detail-swiper>
    <!-- :goods="goods" 父传子 绑定 -->
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    <detail-param-info :paramsInfo="paramsInfo"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
// import   DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailNavBar from "./DetailNavBar.vue";

import { getDatail, Goods, Shop, GoodsParam } from "../../network/detail";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import Toast from "../../components/toast/toast.vue";
export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Toast,
  },

  Toastname: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailImage: [],
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      message: "",
      show: false,
    };
  },
  methods: {
    detailImageLoad() {},

    addToCart() {
      // console.log('-------');
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // this.realPrice = item.lowNowPrice;
      // this.$store.cartList.push(product)
      this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product).then((res) => {
        // console.log(res);
        this.show = true;
        this.message = res;
        setTimeout(() => {
          this.show = false;
          this.message = "";
        }, 1500);
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getDatail(this.iid).then((res) => {
      // console.log(res.result.itemInfo.topImages);
      //1.获取顶部图片轮播数据
      this.topImages = res.result.itemInfo.topImages;

      //2. 获取详情页的重要信息
      const data = res.result;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(goods);
      //3.创建店铺对象信息
      this.shopInfo = new Shop(data.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数信息  new是利用构造函数
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.取出评论信息
      this.itemParams = data.itemParams;
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  margin: 15px 50px;
  background-color: rgba(255, 255, 255, 0.911);
}
.nav span {
  text-align: center;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
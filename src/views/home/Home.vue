<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
    <!-- 展示图层 -->
    <div class="recommend">
      <div v-for="item in recommends" :key="item.title" class="recommend-item">
        <a :href="item.link">
          <!-- 给属性遍历要绑定 -->
          <img :src="item.image" alt="" />
          <div class="title">{{ item.title }}</div>
        </a>
      </div>
    </div>
    <!-- 大图片 -->
    <div class="big-img">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="../../assets/home-img/recommend_bg.jpg" alt="" />
      </a>
    </div>

    <tabcontrol
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    >
    </tabcontrol>
    <goods-list :goods="goods[currentTpye].list"></goods-list>
  </div>
</template>
<script>
import NavBar from "../../components/navbar/NavBar.vue";
import { getHomeMultiData, getHomeGoods } from "../../network/home";
import Swiper from "../../components/swiper/Swiper.vue";
import SwiperItem from "../../components/swiper/SwiperItem.vue";
import tabcontrol from "../../components/tabControl/tabcontrol.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";


export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    tabcontrol,
    GoodsList,
    // GoodsListItem
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTpye: "pop",
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTpye = "pop";
          break;
        case 1:
          this.currentTpye = "new";
          break;
        case 2:
          this.currentTpye = "sell";
          break;
      }
    },

    // 网络请求相关的方法
    getHomeMultiData() {
      getHomeMultiData().then(res=> {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res=> {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
/* 轮播图 */
.home-nav {
  color: white;
  font-size: 17px;
  background-color: rgba(255, 0, 0, 0.39);
}

/* 推荐 */
.recommend {
  display: flex;
  width: 100%;
  /* margin-left: 13px; */
  text-align: center;
  font-size: 13px;
  padding: 15px;
  margin-top: 5px;
  border-bottom: 6px solid #eee;
}
recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin: 0 2px;
}
.title {
  color: rgba(0, 0, 0, 0.712);
}
.recommend-item a {
  text-decoration: none;
}

/* 大图片 */
.big-img img {
  width: 100%;
}
.tab-control {
  position: sticky;
  top: -10px;
  z-index: 8;
  background: #fff;
}
</style>
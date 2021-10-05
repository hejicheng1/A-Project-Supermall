<template>
  <div id="denb">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../assets/home-img/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item.titles"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}

.title-item {
  flex: 1;
}

.active {
  color: red;
}

.back img {
  margin-top: 12px;
}
</style>

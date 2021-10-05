<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.title">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "../../../components/swiper/Swiper.vue";
import SwiperItem from '../../..//components/swiper/SwiperItem.vue'

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>

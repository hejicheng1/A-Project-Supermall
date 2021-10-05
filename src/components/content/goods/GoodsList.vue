<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.id" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  clear: fixed;
  padding: 2px;
}
</style>

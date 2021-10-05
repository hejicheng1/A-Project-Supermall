<template>
  <div class="cart_list">
    <cartilstitem
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
    ></cartilstitem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cartilstitem from "./Cartilstitem.vue";
export default {
  name: "cartlist",
  components: {
    // CartListItem
    Cartilstitem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>
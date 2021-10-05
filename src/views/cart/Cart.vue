<template>
  <div id="">
    <div class="navbar">
      <nav-bar>
        <div slot="center">购物车({{ length }})</div>
      </nav-bar>
    </div>
    <cart-l-ist></cart-l-ist>
    <cartbottombar></cartbottombar>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import CartLIst from "./childComps/CartLIst.vue";

import { mapGetters } from "vuex";
import Cartbottombar from "./childComps/Cartbottombar.vue";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartLIst,
    Cartbottombar,
  },
  computed: {
    // cartLength(){
    //  return     this.$store.state.cartList.length
    // }
    ...mapGetters({ length: "cartLength", list: "cartList" }),
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 0, 0, 0.699);
  color: white;
  font-size: 17px;
  font-weight: 800px;
}
</style>
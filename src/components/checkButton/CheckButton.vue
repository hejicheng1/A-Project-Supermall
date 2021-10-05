<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="../../assets/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  position: relative;
  /* margin: 0; */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: solid 1px rgb(170, 170, 170);
  /* background-color: red; */
}
img {
  position: absolute;
}
.check {
  background-color: rgb(255, 0, 0);
}
</style>
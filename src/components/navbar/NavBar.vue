
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
// 头部导航的制作
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    background-color:rgba(245, 245, 245, 0.438);
    display: flex;
    height: 44px;
    line-height: 60px;
    text-align: center;
    line-height: 44px;
  
  }

  .left,.right {
    width: 60px;
  
  }

 
  .center {
    flex: 1;
   
  }
</style>
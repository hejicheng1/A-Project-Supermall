<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{"￥"+goodsItem.price}}</span>
      <span class="collect">{{"收藏"+goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        // this.$bus.$emit('itemImgLoad')
        if(this.$router.path.indexOf('/home')){
          this.$bus.$emit('homeItemImgLoad')
        }else if(this.$router.path.indexOf('/detail')){
          this.$bus.$emit('detailItemImgLoad')

        }
      },
      itemClick() {
        this.$router.push('/detail' + this.goodsItem.iid)
        // console.log("跳转到详情页面");
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: rgba(255, 0, 0, 0.699);
    margin-right: 10px;
    font-size: 13px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/css/collect.svg") 0 0/14px 14px;
  }
</style>

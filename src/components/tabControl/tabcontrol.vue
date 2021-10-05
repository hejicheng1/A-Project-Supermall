<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item.id"
      class="item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <!-- 有for循环就要用:key=item.id -->
      <span>{{ item }}</span>
    </div>
  </div>
  <!--template 仅仅支持一个节点在vue2中要用div包裹 -->
</template>

<script>
export default {
  name: "tabcontrol",
  // 1.自定义组件的名称
  // 2.今后,组件相关的data 数据,methods方法等
  // 3.都需要定义到expor,defalt,所导出的对象中
  // 4. script中的name属性节点,定义当前节点
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  margin-top: 10px;

  height: 45px;
  display: flex;
  text-align: center;
}
.item {
  flex: 1;
  margin-top: 13px;
  margin-right: 30px;
  font-size: 15px;
}
.active {
  color: rgba(255, 0, 0, 0.507);
}
.active span {
  border-bottom: 3px solid rgba(255, 0, 0, 0.507);
}

/* 后缀.vue代表vue组件,vue组件有三个模块,template,js,style,style代表css  js动态 */
</style>


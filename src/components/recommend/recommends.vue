<template>
  <div class="recommend">
      <div v-for="item in recommends"  :key="item.title">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          
          </div>   
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
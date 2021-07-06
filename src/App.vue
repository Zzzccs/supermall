<template>
  <div id="app">
    <!-- <router-link to=""></router-link> -->
    <router-view v-slot="{ Component }">
    <keep-alive exclude="Detail">
      <component :is="Component"  />
    </keep-alive>
  </router-view>
    <maintabbar v-show="this.$route.name!='detail'" class="tabbar"></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/content/mainTabbar/MainTabBar.vue'
export default {
  components: { maintabbar },
  
}
</script>
<style>
  .tabbar{
    z-index: 10;
  }
</style>

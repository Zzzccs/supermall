<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <template #item-icon>
          <img src="../../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="../../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>       
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
      <template #item-icon>
          <img src="../../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="../../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>  
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="deeppink">
<template #item-icon>
          <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>  
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <template #item-icon>
          <img src="../../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>  
      </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar.vue";
    import TabBarItem from "../../common/tabbar/TabBarItem"
   export default{
     components: {
       TabBar,
       TabBarItem,
     }
   }
</script>

<style>

</style>
<template>
  <div class="goods">
      
      <goods-list-item v-for="(item,index) in data" :key="index" :goods-item="item">        
      </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem"
export default {
    components:{
        goodsListItem
    },
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
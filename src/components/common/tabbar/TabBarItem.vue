<template>
  <div class="tab-bar-item" @click="itemClick">
          <slot v-if="!flag" name="item-icon"></slot>
          <slot v-else name="item-icon-active"></slot>
          <div :style="styleColor">
            <slot name="item-text"></slot>
          </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        // flag: true
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    }
    ,
    computed:{
      flag(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      styleColor(){
        return this.flag?{color:this.activeColor}:{}
      }
    }
    ,
    methods:{
      itemClick(){
        // console.log('itemclick');
        this.$router.replace(this.path).catch(err=>err)
      }
    }
}
</script>

<style>
.tab-bar-item{
    flex:1;
    text-align: center;
    height: 49;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  
</style>
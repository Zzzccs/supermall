<template>
  <div class="tab-control">
      <div v-for="(item,index) in title" :key="index" class="tab-control-item" @click="btnclick(index)">
          <span :class="{change:index===flag}" >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        btnclick(index){
            this.flag=index;
            this.$emit('tabClick',index);
        }
    },
    data(){
        return{
            flag:0
        }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item{
        flex: 1;    
    }
    .change{
        color: var(--color-high-text);
        border-bottom: 3px solid var(--color-tint);
    }
</style>
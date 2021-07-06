<template>
  <nav-bar>
        <!-- 返回按钮 -->
        <template #left >
          <img src="../../../assets/img/common/back.svg" alt="" @click="backClick">
        </template>
        <!-- 导航栏文字选项 -->
        <template #center>
          <span v-for="(title,index) in titles" :key="index" :class="{active: index===currentIndex}" @click="btnclick(index)">{{title}}</span>
        </template>
      </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar"
export default {
    data() {
        return {
            titles: ['商品','评论','详情','推荐'],
            currentIndex: 0,
        }
    },
    components: {
        NavBar,
    },
    methods: {
        // 改变导航栏文字状态
        btnclick(index){
            this.currentIndex=index;
            //传递出点击哪个按钮
            this.$emit('tabClick',index);
        },
        // 返回主界面
        backClick(){
            // console.log("返回主界面");
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    img {
        margin-top: 11px;
    }
    span {
        font-size: 16px;
        margin-left: 11px;
        margin-right: 11px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>
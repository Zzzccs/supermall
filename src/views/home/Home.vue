<template>
    <div id="home" >
        <nav-bar class="home-nav">
            <template #center>
                购物街
            </template>
        </nav-bar>
        <tab-control    v-show="tabControlShowFlag"
                        ref="tabcontrolfake"
                        :title="['流行','新款','精选']" 
                        @tabClick="tabClick"
                        class="tab-control"></tab-control>
        <scroll class="content" 
                ref="scroll" 
                :probe-type="3" 
                :pull-up-load="true" 
                @scroll="isShow" 
                @pullingUp="getHomeGoods1(nowShow)">
            <home-swipers :banners="banners"></home-swipers>
        <recommend-views :recommends="recommends"></recommend-views>
        <feature-view></feature-view>
        <tab-control    ref="tabcontrol"  
                        :title="['流行','新款','精选']" 
                        @tabClick="tabClick"
                        ></tab-control>
        <goods-list :data="showGoods"></goods-list>
        </scroll>
        <back-top v-show="backTopShowFlag" @click="backTopClick"></back-top>
    </div> 
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"
import TabControl from "../../components/content/tabControl/TabControl"
import GoodsList from "../../components/content/goods/goodsList"
import Scroll from "../../components/common/scroll/Scroll"
import BackTop from "../../components/content/backTop/BackTop"

import HomeSwipers from "./childComps/HomeSwipers"
import recommendViews from "./childComps/recommendViews"
import FeatureView from "./childComps/FeatureView"

import {getHomeMultidata,getHomeGoods} from "../../network/home"

export default {
    components:{
        NavBar,TabControl,GoodsList,Scroll,BackTop,HomeSwipers,recommendViews,FeatureView
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page: 0, list: []},
                'new':{page: 0, list: []},
                'sell':{page: 0, list: []},
            },
            nowShow: 'pop',
            backTopShowFlag: false,
            tabControlShowFlag: false,
            taboffsetTop: 0,
            saveY:0
        }
    }
    ,
    methods:{
        /**
         *  网络请求相关的方法
         */
        // 获取轮播图信息
        getHomeMultidata1(){
            getHomeMultidata().then((res)=>{
                        this.banners=res.data.banner.list
                        this.recommends=res.data.recommend.list
                        // console.log(res);
            })
        },    
        // 获取商品信息
        getHomeGoods1(type){
            const indexpage=this.goods[type].page+1      
            getHomeGoods(type,indexpage).then((res)=>{        
                // console.log(res);
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page+=1;
            }) 
        },
        /**
         *  事件监听相关的方法
         */
        // 分类列表点击事件
        tabClick(index) {
            switch(index)
            {
                case 0:
                    this.nowShow = 'pop';
                    break;
                case 1:
                    this.nowShow = 'new';
                    break;
                case 2:
                    this.nowShow = 'sell';
                    break;
                default:
                    this.nowShow = 'pop';
                    break;
            }
            this.$refs.tabcontrolfake.flag = index;
            this.$refs.tabcontrol.flag = index;
        },
        // 返回顶部按钮点击事件
        backTopClick() {
            // console.log("回到顶部");
            this.$refs.scroll.scrollTo(0,0);
        },
        // 返回顶部按钮是否展示/分类列表是否吸顶
        isShow(position) {
            // console.log(position);
            // console.log(this.tabControlShowFlag);
            // console.log(this.taboffsetTop);
            // 返回顶部按钮是否展示
            this.backTopShowFlag = (position.y <=-1400)
            // 分类列表是否吸顶
            this.tabControlShowFlag = (position.y < this.taboffsetTop)
        },
               
    }
    ,
    computed: {
        // 商品信息展示
        showGoods(){
            return this.goods[this.nowShow].list
        }
    },
    created () {
        // 商品信息，图片初始化
        this.getHomeMultidata1();
        this.getHomeGoods1('pop');
        this.getHomeGoods1('new');
        this.getHomeGoods1('sell');
    },
    mounted () {
        // 获取tabControl距离顶部的距离
        setTimeout(() => {
            // console.log(this.$refs.tabcontrol.$el.offsetTop);
            this.taboffsetTop = -(this.$refs.tabcontrol.$el.offsetTop);
        }, 350);
    },
    activated () {
        this.$nextTick(() => {
            this.$refs.scroll.scrollTo(0,this.saveY,0)
            this.$refs.scroll.bscroll.refresh();
        })
    },
    deactivated () {
        this.saveY=this.$refs.scroll.bscroll.y;
    }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control{
      position: relative;
      z-index: 9;
      background-color: #fff;
  }
  .content {
    overflow: hidden;  
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>

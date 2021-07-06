<template>
  <div class="detail" id="detailGoods">
      <detail-nav-bar @tabClick="navBarClick" ref="navbar" />
      <scroll class="content" ref="scroll" :probeType="3" @scroll="getScrollPosition">
        <detail-swiper :top-images="topImages" />
        <detail-base-info :goods="goods" />
        <detail-comment-info  id="detailComments" :commentInfo="commentInfo" ref="comment" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detailInfo="detailInfo" id="goodsdetail"  ref="goodsdetail" />
        <detail-param-info  :paramInfo="paramInfo"  />
        <goods-list id="detailRecommends" :data="recommends" ref="recommends" />   
      </scroll>
      <back-top v-show="backTopShowFlag" @click="backTopClick" />
      <detail-bottom-bar @addToCart="addCart" />
      <toast :message="cartMessage" :isshow="cartMessageIsShow"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"
import DetailBottomBar from "./childComps/DetailBottomBar"

import Scroll from "../../components/common/scroll/Scroll"
import goodsList from "../../components/content/goods/goodsList"
import BackTop from "../../components/content/backTop/BackTop"
import Toast from "../../components/common/toast/Toast"

import {getDetail, getRecommend, Goods, GoodsParam, Shop} from "../../network/detail"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: null,     
      currentindex: -1,
      backTopShowFlag: false,
      cartMessageIsShow: false,
      cartMessage: '',

      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      offsettops: [],
    }
  },
  components:{
    DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo, DetailBottomBar, 
    Scroll, goodsList, BackTop, Toast
  },
  created() {
      
    // 保存每个商品的id
    this.iid = this.$route.params.iid;

    // 根据id请求数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;

      // 获取顶部图片
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)

      // 保存商品详情数据
      this.detailInfo = data.detailInfo

      // 保存商品参数
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      // 保存评价信息
      if(data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    })
  
    // 请求推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    }).catch((err) => {
      console.log(err);
    })
    
  },
  mounted () {
      // 记录导航栏中各个组件的offsetTop和Height  
    setTimeout(() => {
      this.offsettops[0]=this.$refs.comment.$el.offsetTop-44;

      this.offsettops[1]=this.$refs.goodsdetail.$el.offsetTop-44;

      this.offsettops[2]=this.$refs.recommends.$el.offsetTop-44;

    },1000)
  },
  methods: {
    // 监听导航栏文字点击
    navBarClick(index) {
      const scrollToid = ['#detailGoods','#detailComments','#goodsdetail','#detailRecommends'];
      this.$refs.scroll.scrollToElement(scrollToid[index], 300, false, false)
    },

    // 监听返回顶部按钮点击
    backTopClick() {
      this.$refs.scroll.scrollToElement('#detailGoods', 300, false, false)
    },

    // 监听加入购物车点击
    addCart() {
      // 获取购物车展示的信息
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch('addCart',product).then(res => {
        this.cartMessage = res;
        this.cartMessageIsShow = true;
        setTimeout(() => {
          this.cartMessage = '';
          this.cartMessageIsShow = false;
        },2000)
      });
    },

    // 获取当前滚动的位置
    getScrollPosition(position) {
      // console.log(position);

      // 根据当前位置控制导航栏文字状态
      if(-this.offsettops[0] < position.y && this.currentindex != 0)
      {
        this.currentindex = 0;
        this.$refs.navbar.currentIndex = this.currentindex;
      }
      else if((-this.offsettops[0] >= position.y) && (-this.offsettops[1] < position.y) && this.currentindex != 1)
      {
        this.currentindex = 1;
        this.$refs.navbar.currentIndex = this.currentindex;
      }
      else if((-this.offsettops[1] >= position.y) && (-this.offsettops[2] < position.y) && this.currentindex != 2)
      {
        this.currentindex = 2;
        this.$refs.navbar.currentIndex = this.currentindex;
      }
      else if(-this.offsettops[2] >= position.y && this.currentindex != 3)
      {
        this.currentindex = 3;
        this.$refs.navbar.currentIndex = this.currentindex;
      }

      // 根据当前位置控制backTop按钮显示
      this.backTopShowFlag = position.y < -this.offsettops[1] ;
    },
  }
}
</script>

<style scoped>  
  .detail {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
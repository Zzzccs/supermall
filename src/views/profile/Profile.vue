<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template #center>
        购物商城
      </template>
    </nav-bar>
    <user-msg />
    <profile-list :profileitem="profileListData" />
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import UserMsg from "./childComps/UserMsg"
import ProfileList from "./childComps/ProfileList"
export default {
  components: { 
    NavBar, UserMsg, ProfileList, 
  },
  data() {
    return {
      profileListData: [
        {
          img: "../../../assets/img/profile/message.svg",
          text: "我的消息"
        },
        {
          img: "../../../assets/img/profile/shopping.svg",
          text: "积分商城"
        },
        {
          img: "../../../assets/img/profile/vip.svg",
          text: "会员卡"
        },
        {
          img: "../../../assets/img/profile/cart.svg",
          text: "我的购物车"
        },
        {
          img: "../../../assets/img/profile/iconfont-zan.svg",
          text: "下载购物APP"
        }
      ],
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
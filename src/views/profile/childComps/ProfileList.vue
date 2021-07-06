<template>
  <div class="ProfileList" >
      <profile-list-item v-for="(item,index) in profileListData" :key="index" :list-item-data="item" />
  </div>
</template>

<script>
import ProfileListItem from "./ProfileListItem"
export default {
    props: {
        profileitem: {
            type: Array,
        }
    },
    components: {
        ProfileListItem,
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

<style>

</style>
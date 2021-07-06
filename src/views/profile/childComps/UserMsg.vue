<template>
  <div class="usermsg">
      <img v-if="!isLogin" src="../../../assets/img/profile/avatar.svg" alt="头像" class="usericon">
      <img v-if="isLogin" :src="user_info.img" alt="头像" class="usericon">
      <div class="userdetailmsg">
          <div class="msg-left">
              <div @click="register">
                  <slot>登录/注册</slot>
              </div>
              <div >
                  <img src="../../../assets/img/profile/phone.svg" :style="{height: 20 +'px' ,}" alt="手机">
                  <slot name="userPhone">暂无绑定手机号</slot>
              </div>
          </div>      
      </div>
      <div class="msg-right" @click="knowmore">></div>
    </div>

  <div class="userpurse">
      <div>
          <span>
              <span class="font">{{balance}}</span>元
          </span>
          <span>
              我的余额
          </span>
      </div>
      <div>
          <span>
              <span class="font">{{discount}}</span>个
          </span>
          <span>
              我的优惠
          </span>
      </div>
      <div>
          <span>
              <span class="font">{{integral}}</span>分
          </span>
          <span>
              我的积分
          </span>
      </div>
  </div>

</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            user_info: {},
            isLogin:false,
            balance:0,
            discount:0,
            integral:0,
        }
    },
    methods: {
        register() {
            console.log("点击登录注册");
        },
        knowmore() {
            console.log("点击了解更多");
        }
    },
    created() {
        this.user_info = this.$store.getters.getUserInfo;
        this.isLogin = this.user_info.isLogin?true:false;
        this.balance = this.user_info.balance|0;
        this.discount = this.user_info.discount|0;
        this.integral = this.user_info.integral|0;
    }
}
</script>

<style scoped>
    .usermsg {
        height: 100px;
        background-color: var(--color-tint);
        color: #fff;     
    }
    .usericon {
        position: fixed;
        height: 80px;
        top: 54px;
        left: 10px;
    }
    .userdetailmsg {
        position: fixed;
        top: 75px;
        left: 90px;
    }
    .msg-left {
        font-size: 18px;
    }
    .msg-left div:nth-child(2)   {
        font-size: 13px;
    }
    .msg-right {
        position: fixed;
        right: 15px;
        top: 85px;
    }
    .userpurse {
        display: flex;
        height: 90px;
        border-bottom:10px solid rgb(241, 238, 238);
    }
    .userpurse>div {
        flex:1;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        border-style: solid; 
        border-width: 1px; 
        border-color: rgb(223, 217, 217);
    }
    .userpurse>div>span {
        font-size: 15px;
    }
    .font {
        font-size: 24px;
        color: var(--color-high-text);
    }
</style>
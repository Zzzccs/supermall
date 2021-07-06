<template>
  <div id="cart">
      <nav-bar class="nav-nav">
        <template #center>
          购物车({{cartLength}})
        </template>
      </nav-bar>
      <cart-list class="cart-list" :cart-list="cartList"></cart-list>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"

import CartList from "./childComps/CartList"
import BottomBar from "./childComps/BottomBar"

import {mapGetters} from "vuex"
export default {
  components: {
    NavBar, CartList, BottomBar
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 89px;
    width: 100%;
    height: calc(100% - 133px);
    overflow: hidden;
  }
</style>


import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: [],
    user_info: {}
  },
  mutations: {
    // 购物车
    addCount(state, payload) {
      payload.count++;
    },
    addGood(state, payload) {
      state.cartList.push(payload);
    },

    // 个人信息
    setUserInfo(state, payload) {
      state.user_info = payload;
    }
  },
  actions: {
    addCart({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        let oldp = state.cartList.find(item => item.iid === payload.iid);
        if (oldp) {
          commit('addCount', oldp);
          resolve("商品数量+1");
        }
        else {
          payload.count = 1;
          payload.checked = false;
          commit('addGood', payload);
          resolve("新增商品");
        }
      }) 
      
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    },
    cartCount(state) {
      let checkednum = 0;
      for(let i of state.cartList) {
        if(i.checked === true) checkednum++;
      }
      return checkednum;
    },

    getUserInfo(state) {
      return state.user_info;
    }
  },
  modules: {
  }
})

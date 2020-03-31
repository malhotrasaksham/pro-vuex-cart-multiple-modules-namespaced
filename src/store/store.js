import Vue from "vue";
import Vuex from "vuex";

import cart from "@/store/cart/store.js";
import notifications from "@/store/notifications/store.js";

Vue.use(Vuex);

export default new Vuex.Store({
  //  strict: true,
  // state ,
  // mutations,
  // getters,
  // actions
  modules: {
    cart,
    notifications
  }
});

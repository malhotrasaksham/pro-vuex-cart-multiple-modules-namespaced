import { actions } from "@/store/cart/actions.js";
import { mutations } from "@/store/cart/mutations.js";
import { getters } from "@/store/cart/getters.js";
import { state } from "@/store/cart/state.js";

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};

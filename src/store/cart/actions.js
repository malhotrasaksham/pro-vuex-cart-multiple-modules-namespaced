export const actions = {
  AddItemToCart({ commit, dispatch }, item) {
    commit("AddItemToCart", item);
    dispatch(
      "notifications/AddNotification",
      { title: "Item added to cart", color: "green" },
      {
        root: true
      }
    );
  },
  RemoveItemFromCart({ commit, dispatch }, itemId) {
    commit("RemoveItemFromCart", itemId);
    dispatch(
      "notifications/AddNotification",
      { title: "Item removed from cart", color: "red" },
      {
        root: true
      }
    );
  }
};

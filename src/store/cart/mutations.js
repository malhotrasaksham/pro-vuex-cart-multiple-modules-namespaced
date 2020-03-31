export const mutations = {
  AddItemToCart(state, item) {
    let itemIndex = state.cart.findIndex(itrItem => itrItem.id === item.id);
    if (itemIndex < 0) state.cart.push({ ...item, quantity: 1 });
    else state.cart[itemIndex].quantity++;
  },
  RemoveItemFromCart(state, itemId) {
    let itemIndex = state.cart.findIndex(item => item.id === itemId);
    if (--state.cart[itemIndex].quantity === 0) state.cart.splice(itemIndex, 1);
  }
};

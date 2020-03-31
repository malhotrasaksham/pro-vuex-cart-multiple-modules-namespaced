export const getters = {
  GetCartItems: state => {
    return state.cart;
  },
  GetCartTotal: state => {
    return state.cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  },
  GetCartItemCount: state => {
    return state.cart.reduce((acc, item) => acc + item.quantity, 0);
  }
};

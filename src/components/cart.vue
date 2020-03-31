<template>
  <div class="cart">
    <label :data-count="cartItems">Cart</label>
    <div class="cartContent" v-if="cart.length">
      <div class="item" v-for="item in cart" :key="item.id">
        <div class="itemName">{{item.name}} x {{item.quantity}}</div>
        <div class="itemPrice">₹{{item.price * item.quantity}}</div>
        <div class="remove" @click="RemoveItemFromCart(item.id)">X</div>
      </div>
      <div class="total">
        <label>Total:</label>
        <span>₹{{cartTotal}}</span>
      </div>
    </div>
    <div class="cartContent" v-else>You have no items in your cart</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", {
      cart: "GetCartItems",
      cartTotal: "GetCartTotal",
      cartItems: "GetCartItemCount"
    })
  },
  methods: {
    ...mapActions("cart", ["RemoveItemFromCart"])
  }
};
</script>
<style scoped>
.cart {
  position: relative;
}
.cart > label {
  line-height: 50px;
  cursor: pointer;
  color: #FFF;
  padding: 0px 20px;
}
.cart > label:after {
  content: attr(data-count);
  position: absolute;
  top: 15%;
  font-size: 12px;
  line-height: normal;
  border-radius: 50%;
  background-color: red;
  height: 14px;
  width: 14px;
  text-align: center;
}
.cartContent {
  display: none;
  text-align: left;
  position: absolute;
  box-sizing: border-box;
  top: 100%;
  right: 0;
  box-shadow: -3px 3px 11px #ddd;
  padding: 15px;
  background-color: #fafafa;
  width: 350px;
}

.cart:hover .cartContent {
  display: block;
}

.item {
  display: flex;
}
.item .itemName {
  min-width: 180px;
  flex: 1;
}
.remove {
  margin-left: 20px;
  cursor: pointer;
  width: 20px;
  text-align: center;
}
</style>


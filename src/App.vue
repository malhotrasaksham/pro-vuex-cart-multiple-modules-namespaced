<template>
  <div id="app">
    <div class="top-ribbon">
      <span class="title">Shopify</span>
      <cart></cart>
    </div>
    <div class="content">
      <div class="items">
        <div class="item" v-for="item in items" :key="item.id">
          <span class="itemTitle">{{item.name}}</span>
          <button type="button" @click="AddItemToCart(item)">Add to cart</button>
        </div>
      </div>
    </div>
    <notifications></notifications>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Cart from "@/components/cart";
import Notifications from "@/components/notifications";

export default {
  name: "App",
  components: {
    Cart,
    Notifications
  },
  data() {
    return {
      items: [
        { id: 1, name: "Toothpaste", price: 45 },
        { id: 2, name: "Soap", price: 25 },
        { id: 3, name: "Dal", price: 125 },
        { id: 4, name: "Atta", price: 280 },
        { id: 5, name: "Bread", price: 32 }
      ]
    };
  },
  methods: {
    ...mapActions("cart", ["AddItemToCart"])
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
<style scoped>
.top-ribbon {
  background-color: black;
  line-height: 50px;
  display: flex;
}

.top-ribbon > .cart {
  text-align: right;
}

.top-ribbon .title {
  flex: 1;
}

.title {
  color: #FFF;
  padding: 0px 15px;
}
.content {
  margin: 20px auto;
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
}
.items {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin: 1.5%;
  text-align: center;
}

button {
  background-color: #0072bc;
  color: #fff;
  padding: 10px;
  border: none;
  margin-top: 20px;
}
</style>


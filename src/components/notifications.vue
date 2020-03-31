<template>
  <div class="notifications">
    <!-- <div class="notification green">Item added to cart</div>
    <div class="notification red">Item removed from cart</div>-->
    <div
      class="notification"
      :class="notification.color"
      v-for="notification in notifications"
      :key="notification.id"
    >{{notification.title}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("notifications", {
      notifications: "notifications"
    })
  }
};
</script>
<style scoped>
.notifications {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0px 15px;
}
.notification {
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
  width: 220px;
}
.notification.green {
  background-color: rgba(20, 200, 20, 0.2);
  border: 1px solid green;
}
.notification.red {
  background-color: rgba(200, 20, 20, 0.2);
  border: 1px solid red;
}
</style>

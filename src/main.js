import Vue from "vue";
import UserPage from "./UserPage.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(UserPage)
}).$mount("#app");

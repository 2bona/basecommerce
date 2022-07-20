import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import moment from "moment";

var token2 = store.getters.getToken;

Vue.config.productionTip = false;
axios.defaults.headers.common["Authorization"] = "Bearer " + token2;

document.cookie = "cross-site-cookie=image; SameSite=None; Secure";
Vue.config.productionTip = false;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Credentials"] = true;
axios.defaults.baseURL = "https://baseuni.herokuapp.com/api";

Vue.use(axios);


Vue.filter("price", function(value) {
  if (value != null) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return 0;
  }
});

Vue.filter("myDate", function (created) {
  return moment(created).format("lll");
});
Vue.filter("description", function(text) {
  if (text.length >= 100) {
    return text.slice(0, 100) + '..';
  } else {
    return text;
  }
});
new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");


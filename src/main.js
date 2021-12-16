import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD5xHB5xjDX8-t5p5M-mHFBOptlcezgf_M",
  authDomain: "vue-socialtipping.firebaseapp.com",
  projectId: "vue-socialtipping",
  storageBucket: "vue-socialtipping.appspot.com",
  messagingSenderId: "289098221425",
  appId: "1:289098221425:web:5620a2b2122f72d3f718d0",
};

initializeApp(firebaseConfig);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

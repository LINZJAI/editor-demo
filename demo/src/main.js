import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/global.scss";
import Highlight from "./assets/highlight";
Vue.use(Highlight);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

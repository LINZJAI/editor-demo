import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/global.scss";
import Highlight from "./assets/highlight";
import { HTMLFormat } from "./assets/HTMLFormat.js";
import VueQuillEditor from "vue-quill-editor";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(VueQuillEditor /* { default global options } */);
Vue.use(Highlight);
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.HTMLFormat = HTMLFormat;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

import { createApp, computed } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

const isMobile = computed(() => {
  if ("maxTouchPoints" in navigator) {
    return navigator.maxTouchPoints > 0;
  } else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
      return !!mQ.matches;
    } else if ("orientation" in window) {
      return true; // deprecated, but good fallback
    } else {
      return false;
    }
  }
});

app.use(pinia);
app.use(router);
app.provide("isMobile", false);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import "./index.css";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/Switch.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "switch",
          component: Switch,
        },
      ],
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");

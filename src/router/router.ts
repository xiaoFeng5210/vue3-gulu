import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Switch from "../components/Switch.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import starDemoVue from "../components/starDemo.vue";
import dialogDemoVue from "../components/dialogDemo.vue";
import tabsDemoVue from "../components/tabsDemo.vue";
import formDemoVue from "../components/formDemo.vue";
import test from "../components/test.vue";

const history = createWebHashHistory();

export const router = createRouter({
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
        {
          path: "button",
          component: ButtonDemo,
        },
        {
          path: "star",
          component: starDemoVue,
        },
        {
          path: "dialog",
          component: dialogDemoVue,
        },
        {
          path: "tabDemo",
          component: tabsDemoVue,
        },
        {
          path: "formDemo",
          component: formDemoVue,
        },
        {
          path: "test",
          component: test,
        },
      ],
    },
  ],
});
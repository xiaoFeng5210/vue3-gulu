import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router/router";
// 通用字体
import 'vfonts/Lato.css';
import {
    create,
    NButton
} from 'naive-ui'

const naive = create({
    components: [NButton]
})

const app = createApp(App);
app.use(router);
app.use(naive);
app.mount("#app");

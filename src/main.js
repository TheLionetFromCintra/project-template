import { createApp } from 'vue';

import App from './App.vue';
import router from "./router/router.js";
import store from "./store/index.js";

import BaseButton from "./components/ui/base/BaseButton";
import BaseWrapper from "./components/ui/base/BaseWrapper";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("base-wrapper", BaseWrapper);

router.isReady().then(function () {
    app.mount('#app');
});


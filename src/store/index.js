import { createStore } from "vuex";
import appModule from "./modules/app/index.js";

const store = createStore({
    modules: {
        app: appModule,
    },
});

export default store;
import { createStore } from "vuex";
import appModule from "./modules/app/index.js";
import dictionaryModule from "./modules/dictionary.js";

const store = createStore({
    modules: {
        app: appModule,
        dictionary: dictionaryModule,
    },
});

export default store;
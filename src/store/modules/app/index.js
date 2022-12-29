import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            term: {
                type: 'days',
                count: 10
            },
            amount: 10000,
        };
    },
    mutations,
    actions,
    getters,
};
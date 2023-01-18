import Cookies from 'js-cookie';

async function getDictionary(commit) {
    if (!Cookies.get('sbg-identity')) {
        await new Promise( (resolve) => {
            setTimeout(() => {
                getDictionary(commit).then(resolve);
            }, 200);
        })
        return;
    }

    const type = Cookies.get('sbg-cpa') ? 'cpa' : 'common';

    const runtimeConfig = await fetch(`https://kviza.ru/dictionary/${type}.json`);
    const dictionary = await runtimeConfig.json();

    commit('set', dictionary);
}

export default {
    state: {
        dictionary: {}
    },
    mutations: {
        set(state, dictionary) {
            state.dictionary = dictionary;
        }
    },
    actions: {
        async init({ commit }) {
            await getDictionary(commit);
        }
    },
    getters: {
        dictionary(state) {
            return state.dictionary;
        },
    },
    namespaced: true,
}
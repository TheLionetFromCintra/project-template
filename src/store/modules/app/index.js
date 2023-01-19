import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            init: false,
            csrf: '',
            code_value: '',
            createdAt: '',
            data: {
                contactData: {
                    birthday: '',
                    email: '',
                    firstname: '',
                    gender: '',
                    lastname: '',
                    patronymic: '',
                    phone: '+7 999 999 90 90',
                },
                passportData: {
                    passportcode: '',
                    passportnumber: '',
                    passportseries: '',
                    passportdate: '',
                    passportaddress: '',
                },
                cardData: {
                    cardnumber: '',
                    cardname: '',
                    carddate: '',
                },
                isSigned: false,
                isSubscribed: false
            },
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
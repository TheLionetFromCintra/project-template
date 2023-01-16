import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            data: {
                contactData: {
                    addrcity: '',
                    birthday: '30.04.1981',
                    email: 'user@mail.ru',
                    firstname: 'Иван',
                    gender: '0',
                    lastname: 'Иванов ',
                    patronymic: 'Владимирович',
                    phone: '+ 7 978 899 22 73',
                },
                passportData: {
                    passportissuecode: '2220',
                    passportnumber: '202020',
                    passportseries: '005-200',
                    passportdate: '30.04.1981',
                    passportaddress: 'Респ Крым, пгт Массандра, г Ялта, ул Стахановская, д 15 к 2 кв 23',
                },
                cardData: {
                    cardnumber: '0914 0234 2124 3467',
                    cardname: 'Ivanov Ivan ',
                    carddate: '20/25',
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
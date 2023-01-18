import Cookies from 'js-cookie';
import getUser from '@/api/getUser';
import send from '@/api/send';
import sendPassport from '@/api/savepas';
import lite from '@/api/lite';

const sendData = function(type = 'info') {
    return (async ({ state, commit }, aData = {}) => {
        const contactData = {
            ...state.data.contactData,
            ...aData.contactData
        }

        const passportData = {
            ...state.data.passportData,
            ...aData.passportData,
        }

        const data = {
            csrf: state.csrf,
            loanSum: state.amount,
            loanTerm: state.term,
            contactData,
            passportData
        }

        const application = await (type === 'passport' ? sendPassport(data, aData.showLoader) : send(data, aData.showLoader))

        commit('update', {
            ...application,
            questionnaire: {
                contactData,
                passportData
            }
        })

        return application;
    })
}

async function update(commit) {
    if (!Cookies.get('sbg-identity')) {
        await new Promise( (resolve) => {
            setTimeout(() => {
                update(commit).then(resolve)
            }, 200)
        })

        return;
    }

    Cookies.set('sbg-tz', Intl.DateTimeFormat().resolvedOptions().timeZone);
    const application = await getUser()
    commit('update', application)
}

export default {
    initCalculator(context) {
        let amount = Cookies.get('sum');
        let term = Cookies.get('term');

        try {
            term = JSON.parse(term);
        } catch (e) {
            term = null;
        }

        if (amount) {
            amount = +amount;
        }

        context.commit('updateCalculator', { term, amount });
    },
    setCalculator(context, {term, amount}) {
        context.commit('updateCalculator', { term, amount });
    },
    async update({ commit }) {
        await update(commit);
    },
    send: sendData(),
    sendPassport: sendData('passport'),
    async lite({ state, commit }, aData = {}) {
        const contactData = {
            ...state.data.contactData,
            ...aData.contactData
        }

        const passportData = {
            ...state.data.passportData,
            ...aData.passportData,
        }

        const data = {
            csrf: state.csrf,
            loanSum: state.amount,
            loanTerm: state.term,
            contactData,
            passportData
        }

        const application = await lite(data);

        commit('update', {
            ...application,
            questionnaire: {
                contactData,
                passportData
            }
        });

        return application;
    }
};
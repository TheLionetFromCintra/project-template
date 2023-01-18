import Cookies from 'js-cookie';
import Storage from '@/ext/storage/storage';

export default {
    updateCalculator(state, {term, amount}) {
        state.term = term || state.term;
        state.amount = amount || state.amount;
        amount && Cookies.set('sum', amount);
        term && Cookies.set('term', JSON.stringify(term));
    },
    setUserData(state, payload) {
        state.data = payload;
    },
    clearCode(state) {
        Storage.delete('code_value')

        state.code_value = '';
    },
    update(state, { csrf, code_value, questionnaire = {} }) {
        if (code_value)
            Storage.set('code_value', code_value)

        if (questionnaire.contactData?.code_hash)
            delete questionnaire.contactData.code_hash
        if (questionnaire.contactData?.code)
            delete questionnaire.contactData.code

        state.createdAt = questionnaire.createdAt
        state.init = true
        state.csrf = csrf || state.csrf
        state.code_value = Storage.get('code_value') || state.code_value

        state.data.contactData = {
            ...state.data.contactData,
            ...questionnaire.contactData
        }
        state.data.passportData = {
            ...state.data.passportData,
            ...questionnaire.passportData
        }
        state.data.isSigned = questionnaire.isSigned
        state.data.isSubscribed = questionnaire.isSubscribed
        // state.amount = questionnaire.loanSum || state.amount
        // state.term = questionnaire.loanTerm || state.term
    },
};
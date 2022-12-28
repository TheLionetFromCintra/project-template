import Cookies from 'js-cookie';

export default {
    updateCalculator(state, {term, amount}) {
        state.term = term || state.term;
        state.amount = amount || state.amount;
        amount && Cookies.set('sum', amount);
        term && Cookies.set('term', JSON.stringify(term));
    },
};
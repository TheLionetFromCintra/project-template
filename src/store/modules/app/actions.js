import Cookies from 'js-cookie';

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
    }
};
export default {
    calculator({ term, amount }) {
        return {
            term,
            amount
        }
    },
    user({ data }) {
        return data || {};
    },
    csrf({ csrf }) {
        return csrf
    },
    code({ code_value }) {
        return code_value
    },
    getme(state) {
        return  state;
    }
};
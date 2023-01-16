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
};
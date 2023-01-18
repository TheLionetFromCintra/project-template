import Cookies from 'js-cookie';

export default {
    computed: {
        isSbg() {
            return !!Cookies.get('sbg-cpa');
        },
        isAuth() {
            // return Object.prototype.hasOwnProperty.call(this.$store.state.questionnaire.contactData, 'id');
        }
    }
}
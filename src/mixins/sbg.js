import Cookies from 'js-cookie';

export default {
    computed: {
        isSbg() {
            return !!Cookies.get('sbg-cpa');
        }
    }
}
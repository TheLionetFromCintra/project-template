import sbg from './sbg'

export default {
    mixins: [sbg],
    created() {
        if (!this.isSbg)
            return;

        if (window.history && history.pushState) {
            window.history.pushState(-1, null);
            window.history.pushState(0, null);
            window.history.pushState(1, null);
            window.history.go(-1);

            window.onpopstate = (event) => {
                if(event.state == -1){
                    window.location.href = 'http://cashdragon.ru/';
                }
            }
        }
    },
}
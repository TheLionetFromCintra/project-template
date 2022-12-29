export default {
    data() {
        return {
            windowWidth: 0,
            isMobile: false,
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    watch: {
        windowWidth(val) {
            if(val <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        }
    }
}
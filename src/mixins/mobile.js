export default {
    data() {
        return {
            windowWidth: 0,
            isMobile: false,
            isMenu: false,
            isVisible: false,
            isDesktop: false,
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
        },
        toggleMenu() {
            this.isVisible = !this.isVisible;
            document.querySelector('html').classList.toggle('html-hidden');
        },
        closeMenu() {
            this.isVisible = false;
            document.querySelector('html').classList.remove('html-hidden');
        }
    },
    watch: {
        windowWidth(val) {
            if(val <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
            if(val <= 1200) {
                this.isMenu = true;
                this.isDesktop = false;
            } else {
                this.isMenu = false;
                this.isDesktop = true;
            }
        }
    }
}
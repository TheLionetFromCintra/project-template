const SEVEN = '+# ### ### ## ##';
const EIGHT = '# ### ### ## ##';

export default {
    data() {
        return {
            maxlength: 16,
            phoneMask: '+# ### ### ## ##',
        };
    },
    methods: {
        setPhoneMask(e) {
            switch (e.target.value[0]) {
                case undefined:
                case '7': {
                    this.phoneMask = SEVEN;
                    this.maxlength = 16;
                    break;
                }
                case '8': {
                    this.phoneMask = EIGHT;
                    this.maxlength = 15;
                    break;
                }
                case '+': {
                    if (e.target.value[1] === undefined || e.target.value[1] === '7') {
                        break;
                    } else if (e.target.value[1] === '8') {
                        this.phoneMask = EIGHT;
                        this.maxlength = 15;
                        break;
                    } else
                        e.target.value = '+7' + e.target.value.substr(1);
                    break;
                }
                default: {
                    e.target.value = '+7' + e.target.value.substr(1);
                    this.phoneMask = SEVEN;
                    this.maxlength = 16;
                    return;
                }
            }

            e.target.value = this.setMask(e.target.value, this.phoneMask);
        }
    }
}
const date = new Date();
const year = date.getFullYear();

import filthy from '@/helpers/validation/filthy';

function dateMap(item, index) {
    if (index === 0)
        item = item.substr(0, 2)

    return +item
}

export default {
    computed: {
        minYear() {
            return String(year - 100);
        },
        maxYear() {
            return String(year - 0);
        },
    },
    methods: {
        forbidType(e, type) {
            if (type === 'letter') {
                e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
            }
            if (type === 'number') {
                e.target.value = e.target.value.replace(/[0-9]/g, '');
            }
        },
        setMask(val = '', mask= '') {
            const newVal = [];
            const maskChars = mask.split('');
            const valChars = val.split('');
            let maskLength = maskChars.length;
            let i = 0;
            let offset = 0;

            while (i < maskLength) {
                const maskChar = maskChars[i];
                const valChar = valChars[i + offset];

                if (valChar === undefined) break;

                if (maskChar !== '#') {
                    newVal.push(maskChar);
                    i++;

                    if (maskChar !== valChar) offset--;
                } else {
                    if (valChar !== ' ' && !isNaN(+valChar)) {
                        newVal.push(valChar);
                        i++;
                    } else offset++;
                }
            }
            return newVal.join('');
        },
        checkDate(v) {
            let [day = '', month = '', year = ''] = v
                .split('.')
                .map((item, index) => {
                    const itemLength = item.length;

                    switch (index) {
                        case 0: {
                            if ([1, 2, 3].includes(+item)) break;

                            if (+item === 0) {
                                if (itemLength === 2) item = '01';
                            } else if (itemLength === 1) {
                                item = `0${item}`;
                            } else if (+item > 31) {
                                item = '31';
                            }

                            break;
                        }
                        case 1: {
                            if (+item === 1) break;

                            if (itemLength === 1 && +item !== 0) item = `0${item}`;
                            else if (+item > 12) item = '12';
                            else if (itemLength === 2 && +item === 0) item = '01';

                            break;
                        }
                        case 2: {
                            const minYear = +this.minYear.substr(0, itemLength);
                            const maxYear = +this.maxYear.substr(0, itemLength);

                            if (+item < minYear) item = minYear;
                            else if (+item > maxYear) item = maxYear;
                        }
                    }

                    return item;
                });

            const date = [day, month, year].filter(item => item).join('.');
            return date;
        },
        checkEmail(value) {
            if (!value)
                return true;

            const mailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return mailRegExp.test(value);
        },
        checkPhone(value) {
            if (!value)
                return true;

            const onlyNumbers = String(value).replace(/[^\d]/g, '');
            return onlyNumbers.length === 11 && onlyNumbers[1] === '9';
        },
        checkLength(value, length) {
            if (!value)
                return true;

            return value.length >= length;
        },
        checkDirty(value) {
            return filthy(value);
        },
        checkLang(value, lang) {
            let regExp;
            if(lang === 'ru') {
                regExp = new RegExp(/^[?!_',.а-яА-ЯёЁ0-9\s]+$/);
            } else {
                regExp = new RegExp(/^[?!_',.a-zA-Z0-9\s]+$/);
            }
            const word = regExp.test(value);
            return word;
        },
        checkDateLess(value, minYear) {
            let [dayLess, monthLess, yearLess] = minYear.split('.').map(dateMap);
            let [day, month, year] = value.split('.').map(dateMap);

            return (year < yearLess) || (year === yearLess && ((month < monthLess) || (month === monthLess && day <= dayLess)));
        },
        checkDateMore(value, maxYear) {
            let [dayMore, monthMore, yearMore] = maxYear.split('.').map(dateMap);
            let [day, month, year] = value.split('.').map(dateMap);

            return (year > yearMore) || (year === yearMore && ((month > monthMore) || (month === monthMore && day >= dayMore)));
        }
    },
}
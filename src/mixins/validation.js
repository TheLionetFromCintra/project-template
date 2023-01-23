import luhn from "@/helpers/card/luhn";

const ALLOW_CARD_YEARS = 8;

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

const MAX_CARD_DATE = `01.${currentMonth}.${currentYear + ALLOW_CARD_YEARS}`;
const TODAY_CARD = `01.${currentMonth}.${currentYear}`;

const MAX_BORROWER_OLD = 90;
const MIN_BORROWER_OLD = 18;

const MAX_BORROWER_YEAR = `${currentDay}.${currentMonth}.${currentYear-MAX_BORROWER_OLD}`;
const MIN_BORROWER_YEAR = `${currentDay}.${currentMonth}.${currentYear-MIN_BORROWER_OLD}`;
const TODAY = `${currentDay}.${currentMonth}.${currentYear}`;

export default {
    data() {
      return {
          formIsValid: true,
      };
    },
    methods: {
        clearValidity(input) {
            this.errors[input] = '';
        },
        clearValidityCard(input) {
            if(Object.keys(this.errors).length > 1) {
                delete this.errors[input];
            } else {
                this.errors = {};
            }
        },
        validatePhone(field, error) {
            if(!this.checkPhone(field)) {
                this.formIsValid = false;
                this.errors[error] = 'Некорректный формат номера телефона';
            }
        },
        validateEmail(field, error) {
            if(!this.checkEmail(field)) {
                this.formIsValid = false;
                this.errors[error] = 'Некорректный формат почты';
            }
        },
        validateFIO(field, error) {
            if(!this.checkDirty(field) && field) {
                this.formIsValid = false;
                this.errors[error] = 'Нецензурная лексика';
            }  else if(!this.checkLang(field, 'ru') && field) {
                this.formIsValid = false;
                this.errors[error] = 'Допустимы только русские буквы, дефис и апостроф';
            } else if(!this.checkLength(field, 2) && field) {
                this.formIsValid = false;
                this.errors[error] = 'Мин. кол-во символов - 2';
            }
        },
        validationDate(date) {
            if (date.length) {
                let [month, year = ''] = date.split('/');

                let yearStart = +(String(currentYear).substr(0, 2));

                year = `${yearStart}${year}`;
                date = `01.${month}.${year}`;

                return date;
            }
        },
        validateLengthField(field, error, length, symbols) {
            if(!this.checkLength(field, length)) {
                this.formIsValid = false;
                this.errors[error] = `Мин. кол-во символов - ${symbols}`;
            }
        },
        validatePrimary() {
            this.formIsValid = true;

            this.validateEmail(this.form.email, 'email');
            this.validatePhone(this.form.phone, 'phone');
        },
        validateContact() {
            this.formIsValid = true;

            this.validateEmail(this.form.contactData.email, 'email');

            if(!this.checkDirty(this.fullname)) {
                this.formIsValid = false;
                this.errors.fullname = 'Нецензурная лексика';
            } else if(this.form.contactData.firstname === '' || this.form.contactData.lastname === '') {
                this.formIsValid = false;
                this.errors.fullname = 'Укажите полное ФИО';
            } else if(!this.checkLang(this.fullname, 'ru')) {
                this.formIsValid = false;
                this.errors.fullname = 'Допустимы только русские буквы, дефис и апостроф';
            } else if(!this.checkLength(this.form.contactData.firstname, 2) || !this.checkLength(this.form.contactData.lastname, 2) || !this.checkLength(this.form.patronymic, 2)) {
                this.formIsValid = false;
                this.errors.fullname = 'Мин. кол-во символов - 2';
            }

            if(!this.checkLength(this.form.contactData.birthday, 10)) {
                this.formIsValid = false;
                this.errors.birthday = 'Дата указана не полностью';
            } else if(!this.checkDateLess(this.form.contactData.birthday, MIN_BORROWER_YEAR)) {
                this.formIsValid = false;
                this.errors.birthday = this.isSbg ? `Мы не выдаем займ лицам не достигшим ${MIN_BORROWER_OLD} лет` : `Минимальный возраст застрахованного лица - ${MIN_BORROWER_OLD} лет`;
            } else if(!this.checkDateMore(this.form.contactData.birthday, MAX_BORROWER_YEAR)) {
                this.formIsValid = false;
                this.errors.birthday = this.isSbg ? `Возраст заемщика не должен превышать ${MAX_BORROWER_OLD} лет` : `Мы не страхуем лица страше ${MAX_BORROWER_OLD} лет`;
            }

            this.validateLengthField(this.form.passportData.passportseries, 'passportseries', 5,4);

            this.validateLengthField(this.form.passportData.passportnumber, 'passportnumber', 7,6);

            if(!this.checkLength(this.form.passportData.passportdate, 10)) {
                this.formIsValid = false;
                this.errors.passportdate = 'Дата указана не полностью';
            } else if(!this.checkDateLess(this.form.passportData.passportdate, TODAY)) {
                this.formIsValid = false;
                this.errors.passportdate = 'Дата не может быть больше текущей';
            }

            this.validateLengthField(this.form.passportData.passportcode, 'passportcode', 7,6);
        },
        validateCard() {
            this.formIsValid = true;

            if(!this.checkLength(this.form.cardData.cardnumber, 19)) {
                this.formIsValid = false;
                this.errors.cardnumber = 'Номер карты сожержит не менее 13 цифр';
            } else if(!luhn(this.form.cardData.cardnumber)) {
                this.formIsValid = false;
                this.errors.cardnumber = 'Опечатка в номере карты';
            }

            if(!this.checkLength(this.form.cardData.carddate, 5)) {
                this.formIsValid = false;
                this.errors.carddate = 'Срок указан не полностью';
            } else if(!this.checkDateLess(this.validationDate(this.form.cardData.carddate), MAX_CARD_DATE)) {
                this.formIsValid = false;
                this.errors.carddate = `Мы принимаем карты сроком до ${ALLOW_CARD_YEARS} лет`;
            } else if(!this.checkDateMore(this.validationDate(this.form.cardData.carddate), TODAY_CARD)) {
                this.formIsValid = false;
                this.errors.carddate = 'Карта просрочена';
            }

            if(!this.checkLang(this.form.cardData.cardname, 'eng')) {
                this.formIsValid = false;
                this.errors.cardname = 'Только символы латинского алфавита';
            } else if(!this.checkLength(this.form.cardData.cardname, 2)) {
                this.formIsValid = false;
                this.errors.cardname = 'Мин. кол-во символов - 2';
            }

            this.validateLengthField(this.form.cardcvv, 'cardcvv', 3,3);
        },
        validationUnsub() {
            this.formIsValid = true;

            this.validatePhone(this.form.requiredFields.phone_fio, 'phone_fio');

            this.validateLengthField(this.form.requiredFields.pan_first, 'pan_first', 6,6);

            this.validateLengthField(this.form.requiredFields.pan_last, 'pan_last', 4,4);
        }
    }
}
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
        validatePrimary() {
            this.formIsValid = true;

            if(!this.checkEmail(this.form.email) && this.form.email) {
                this.formIsValid = false;
                this.errors.email = 'Некорректный формат почты';
            }
            if(!this.checkPhone(this.form.phone)) {
                this.formIsValid = false;
                this.errors.phone = 'Некорректный формат номера телефона';
            }
        },
        validateContact() {
            this.formIsValid = true;

            if(!this.checkEmail(this.form.contactData.email) && this.form.contactData.email) {
                this.formIsValid = false;
                this.errors.email = 'Некорректный формат почты';
            }

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

            if(!this.checkLength(this.form.passportData.passportseries, 5)) {
                this.formIsValid = false;
                this.errors.passportseries = 'Мин. кол-во символов - 4';
            }

            if(!this.checkLength(this.form.passportData.passportnumber, 7)) {
                this.formIsValid = false;
                this.errors.passportnumber = 'Мин. кол-во символов - 6';
            }

            if(!this.checkLength(this.form.passportData.passportdate, 10)) {
                this.formIsValid = false;
                this.errors.passportdate = 'Дата указана не полностью';
            } else if(!this.checkDateLess(this.form.passportData.passportdate, TODAY)) {
                this.formIsValid = false;
                this.errors.passportdate = 'Дата не может быть больше текущей';
            }

            if(!this.checkLength(this.form.passportData.passportcode, 7)) {
                this.formIsValid = false;
                this.errors.passportcode = 'Мин. кол-во символов - 6';
            }
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
            } else if(!this.checkDateLess(this.validationData(this.form.cardData.carddate), MAX_CARD_DATE)) {
                this.formIsValid = false;
                this.errors.carddate = `Мы принимаем карты сроком до ${ALLOW_CARD_YEARS} лет`;
            } else if(!this.checkDateMore(this.validationData(this.form.cardData.carddate), TODAY_CARD)) {
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

            if(!this.checkLength(this.form.cardcvv, 3)) {
                this.formIsValid = false;
                this.errors.cardcvv = 'Мин. кол-во символов - 3';
            }
        },
        validationData(date) {
            if (date.length) {
                let [month, year = ''] = date.split('/');

                let yearStart = +(String(currentYear).substr(0, 2));

                year = `${yearStart}${year}`;
                date = `01.${month}.${year}`;

                return date;
            }
        },
        validateFIO(field, error) {
            if(!this.checkDirty(field)) {
                this.formIsValid = false;
                this.errors[error] = 'Нецензурная лексика';
            }  else if(!this.checkLang(field, 'ru')) {
                this.formIsValid = false;
                this.errors[error] = 'Допустимы только русские буквы, дефис и апостроф';
            } else if(!this.checkLength(field, 2)) {
                this.formIsValid = false;
                this.errors[error] = 'Мин. кол-во символов - 2';
            }
        }
    }
}
<template>
  <poll-step>
    <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Заполните анкету">
        <the-form class="contact-form" @submit="submit">
          <template #inputs>
            <h3 class="mob-title">Персональные данные</h3>
            <the-input
              label="ФИО* (отчество можно не указывать если нет)"
              placeholder="Иванов Иван Владимирович"
              input-type="number"
              v-model.trim="fullname"
              :error-message="errors.fullname"
              @focus="clearValidity('fullname')"
            >
            </the-input>
            <fieldset class="personal d-flex align-items-start">
              <the-input
                  label="Дата рождения*"
                  placeholder="дд.мм.гггг"
                  length="10"
                  input-type="letter"
                  mask="##.##.####"
                  date-type="date"
                  v-model.trim="form.contactData.birthday"
                  :error-message="errors.birthday"
                  @focus="clearValidity('birthday')"
              >
              </the-input>
              <radio-button-group
                  :options="options"
                  label="Пол"
                  v-model="form.contactData.gender"
                  :active-gender="form.contactData.gender"
              >
              </radio-button-group>
            </fieldset>
            <h4>Паспортные данные</h4>
            <div class="inputs-wrapper d-flex align-items-start">
              <fieldset class="d-flex align-items-start">
                <the-input
                    label="Серия*"
                    placeholder="2220"
                    length="5"
                    input-type="letter"
                    mask="## ##"
                    v-model.trim="form.passportData.passportseries"
                    :error-message="errors.passportseries"
                    @focus="clearValidity('passportseries')"
                >
                </the-input>
                <the-input
                    label="Номер*"
                    placeholder="123456"
                    length="7"
                    input-type="letter"
                    mask="### ###"
                    v-model.trim="form.passportData.passportnumber"
                    :error-message="errors.passportnumber"
                    @focus="clearValidity('passportnumber')"
                >
                </the-input>
              </fieldset>
              <fieldset class="d-flex align-items-start">
                <the-input
                    label="Дата выдачи*"
                    placeholder="дд.мм.гггг"
                    length="10"
                    input-type="letter"
                    mask="##.##.####"
                    date-type="date"
                    v-model.trim="form.passportData.passportdate"
                    :error-message="errors.passportdate"
                    @focus="clearValidity('passportdate')"
                >
                </the-input>
                <the-input
                    label="Код подразделения*"
                    placeholder="900-002"
                    length="7"
                    input-type="letter"
                    mask="###-###"
                    v-model.trim="form.passportData.passportcode"
                    :error-message="errors.passportcode"
                    @focus="clearValidity('passportcode')"
                >
                </the-input>
              </fieldset>
            </div>
            <address-wrapper
                v-model.trim="form.passportData.passportaddress"
                :active-value="form.passportData.passportaddress"
                :error-message="errors.passportaddress"
                @focus="clearValidity('passportaddress')"
            ></address-wrapper>
          </template>
          <template #default>
            <base-button class="button-main" mode="green" :class="{disabled: isBtnDisabled}">Продолжить</base-button>
          </template>
        </the-form>
      </poll-step-wrapper>
  </poll-step>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
import TheInput from "@/components/ui/form/inputs/TheInput";
import RadioButtonGroup from "@/components/ui/form/inputs/radio/RadioButtonGroup";
import AddressWrapper from "@/components/pages/poll/components/AddressWrapper";
import PollStep from "@/components/pages/poll/layouts/PollStep";

import Store from '@/store';
import {mapGetters} from "vuex";
import inputCheckMixin from "@/mixins/inputCheck";
import sbgMixin from "@/mixins/sbg";
import validationMixin from "@/mixins/validation";


export default {
  components: {
    PollStep,
    AddressWrapper,
    TheInput, RadioButtonGroup, TheForm, PollStepWrapper
  },
  mixins: [inputCheckMixin, sbgMixin, validationMixin],
  data() {
    return {
      currentStep: 2,
      maxStep: 3,
      options: [{
        key: '0',
        value: 'М'
      }, {
        key: '1',
        value: 'Ж'
      }],
      isBtnDisabled: true,
      form: {
        contactData: {
          birthday: '',
          firstname: '',
          gender: '',
          lastname: '',
          patronymic: '',
        },
        passportData: {
          passportcode: '',
          passportnumber: '',
          passportseries: '',
          passportdate: '',
          passportaddress: '',
        },
      },
      errors: {
        fullname: '',
        birthday: '',
        passportseries: '',
        passportnumber: '',
        passportdate: '',
        passportcode: '',
        passportaddress: '',
      }
    };
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
    fullname: {
      get() {
        return [
          this.form.contactData.lastname,
          this.form.contactData.firstname,
          this.form.contactData.patronymic
        ].filter(item => item).join(' ');
      },
      set(v) {
        const array = v.trim().split(' ');

        this.form.contactData.lastname = array.shift() || '';
        this.form.contactData.firstname = array.shift() || '';
        this.form.contactData.patronymic = array.join(' ');
      }
    }
  },
  methods: {
    async submit() {
      this.validateContact();

      if (!this.formIsValid) {
        return;
      }

      const { next_step } = await this.$store.dispatch('app/send', {
        contactData: {
          ...this.form,
          ...this.form.contactData
        },
        passportData: {
          ...this.form.passportData,
        }
      });

      console.log(next_step);
      // openRoute(next_step);
    }
  },
  watch: {
    form: {
      handler(val) {
        const contactData = Object.values(val.contactData).filter((item, index, arr) => index !== arr.length - 1).every(item => item !== '');
        const passportData = Object.values(val.passportData).every(item => item !== '');

        if(contactData && passportData) {
          this.isBtnDisabled = false;
        } else {
          this.isBtnDisabled = true;
        }
      },
      deep: true
    },
  },
  created() {
    this.form.contactData.firstname = this.user.contactData.firstname;
    this.form.contactData.lastname = this.user.contactData.lastname;
    this.form.contactData.patronymic = this.user.contactData.patronymic;
    this.form.contactData.birthday = this.user.contactData.birthday;
    this.form.contactData.gender = String(this.user.contactData.gender) || '0';

    this.form.passportData.passportseries = this.user.passportData.passportseries;
    this.form.passportData.passportnumber = this.user.passportData.passportnumber;
    this.form.passportData.passportdate = this.user.passportData.passportdate;
    this.form.passportData.passportcode = this.user.passportData.passportcode;
    this.form.passportData.passportaddress = this.user.passportData.passportaddress;
  },
  beforeRouteEnter(to, from, next) {
    const { contactData: { phone } } = Store.getters['app/user'];

    if (phone) {
      next();
    } else {
      // Store.commit('application/load', false)
      next({ name: 'LoanPrimary' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-form {
    width: 100%;
    max-width: 668px;
    fieldset {
      margin-top: 24px;
    }
    h4 {
      margin-top: 36px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.07em;
    }
    .inputs-wrapper {
      margin: 24px 0;
      fieldset {
        margin: 0;
        width: 100%;
      }
      .box + .box {
        margin-left: 12px;
      }
      fieldset + fieldset {
        margin-left: 34px;
      }
    }
  }
  @media(max-width: $mobile-size) {
    .contact-form {
      max-width: 552px;
      h4 {
        text-align: center;
        margin-top: 48px;
      }
      .radio-buttons {
        margin-left: 22px;
      }
      .inputs-wrapper {
        flex-direction: column;
        fieldset {
          width: 100%;
        }
        .box + .box {
          margin-left: 22px;
        }
        fieldset + fieldset {
          margin: 24px 0 0 0;
        }
      }
    }
  }
</style>
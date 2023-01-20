<template>
  <cabinet-page-wrapper title="Редактировать данные">
    <template #content>
      <div class="content">
        <the-form class="edit" @submit="submit">
          <template #inputs>
            <fieldset class="d-flex align-items-start justify-content-center">
              <the-input
                  v-model.trim="form.contactData.lastname"
                  label="Фамилия*"
                  placeholder="Иванов"
                  input-type="number"
                  :error-message="errors.lastname"
                  @focus="clearValidity('lastname')"
              >
              </the-input>
              <the-input
                  v-model.trim="form.contactData.firstname"
                  label="Имя*"
                  placeholder="Иван"
                  input-type="number"
                  :error-message="errors.firstname"
                  @focus="clearValidity('firstname')"
              >
              </the-input>
            </fieldset>
            <fieldset class="d-flex align-items-start justify-content-center">
              <the-input
                  v-model.trim="form.patronymic"
                  label="Отчество (если есть)"
                  placeholder="Иванович"
                  input-type="number"
                  :error-message="errors.patronymic"
                  @focus="clearValidity('patronymic')"
              >
              </the-input>
              <email-input
                  v-model.trim="form.contactData.email"
                  label="E-mail*"
                  placeholder="user@mail.ru"
                  :error-message="errors.email"
                  @focus="clearValidity('email')"
              >
              </email-input>
            </fieldset>
            <fieldset class="gender d-flex align-items-start justify-content-start">
              <the-input
                  v-model.trim="form.contactData.birthday"
                  label="Дата рождения*"
                  placeholder="дд.мм.гггг"
                  length="10"
                  input-type="letter"
                  mask="##.##.####"
                  date-type="date"
                  :error-message="errors.birthday"
                  @focus="clearValidity('birthday')"
              >
              </the-input>
              <div class="gender-box">
                <radio-button-group
                    v-model.trim="form.gender"
                    :options="options"
                    label="Пол"
                    :active-gender="form.gender"
                >
                </radio-button-group>
              </div>
            </fieldset>
            <div class="passport d-flex align-items-start">
              <fieldset class="d-flex align-items-start">
                <the-input
                    v-model.trim="form.passportData.passportseries"
                    label="Серия*"
                    placeholder="2220"
                    length="5"
                    input-type="letter"
                    mask="## ##"
                    :error-message="errors.passportseries"
                    @focus="clearValidity('passportseries')"
                >
                </the-input>
                <the-input
                    v-model.trim="form.passportData.passportnumber"
                    label="Номер*"
                    placeholder="123456"
                    length="7"
                    input-type="letter"
                    mask="### ###"
                    :error-message="errors.passportnumber"
                    @focus="clearValidity('passportnumber')"
                >
                </the-input>
              </fieldset>
              <fieldset class="d-flex align-items-start">
                <the-input
                    v-model.trim="form.passportData.passportdate"
                    label="Дата выдачи*"
                    placeholder="дд.мм.гггг"
                    length="10"
                    input-type="letter"
                    mask="##.##.####"
                    date-type="date"
                    :error-message="errors.passportdate"
                    @focus="clearValidity('passportdate')"
                >
                </the-input>
                <the-input
                    v-model.trim="form.passportData.passportcode"
                    label="Код подразделения*"
                    placeholder="900-002"
                    length="7"
                    input-type="letter"
                    mask="###-###"
                    :error-message="errors.passportcode"
                    @focus="clearValidity('passportcode')"
                >
                </the-input>
              </fieldset>
            </div>
            <fieldset class="address">
              <address-wrapper
                  v-model.trim="form.passportData.passportaddress"
                  :active-value="form.passportData.passportaddress"
                  :error-message="errors.passportaddress"
                  @focus="clearValidity('passportaddress')"
              ></address-wrapper>
            </fieldset>
          </template>
          <template #default>
            <base-button class="button-main" mode="green" :class="{disabled: isBtnDisabled}">Обновить</base-button>
          </template>
        </the-form>
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import TheForm from "@/components/ui/form/TheForm";
import TheInput from "@/components/ui/form/inputs/TheInput";
import EmailInput from "@/components/ui/form/inputs/EmailInput";
import RadioButtonGroup from "@/components/ui/form/inputs/radio/RadioButtonGroup";
import AddressWrapper from "@/components/pages/poll/components/AddressWrapper";

import inputCheckMixin from "@/mixins/inputCheck";
import sbgMixin from "@/mixins/sbg";
import validationMixin from "@/mixins/validation";
import {mapGetters} from "vuex";

export default {
  components: {AddressWrapper, RadioButtonGroup, EmailInput, TheInput, TheForm, CabinetPageWrapper},
  mixins: [inputCheckMixin, sbgMixin, validationMixin],
  data() {
    return {
      form: {
        patronymic: '',
        gender: '',
        contactData: {
          birthday: '',
          firstname: '',
          lastname: '',
          email: '',
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
        firstname: '',
        lastname: '',
        patronymic: '',
        birthday: '',
        passportseries: '',
        passportnumber: '',
        passportdate: '',
        passportcode: '',
        passportaddress: '',
        email: '',
      },
      options: [{
        key: '0',
        value: 'М'
      }, {
        key: '1',
        value: 'Ж'
      }],
      isBtnDisabled: true,
    };
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
  },
  created() {
    this.form.contactData.firstname = this.user.contactData.firstname;
    this.form.contactData.lastname = this.user.contactData.lastname;
    this.form.patronymic = this.user.contactData.patronymic;
    this.form.contactData.email = this.user.contactData.email;
    this.form.contactData.birthday = this.user.contactData.birthday;
    this.form.gender = this.user.contactData.gender;

    this.form.passportData.passportseries = this.user.passportData.passportseries;
    this.form.passportData.passportnumber = this.user.passportData.passportnumber;
    this.form.passportData.passportcode = this.user.passportData.passportcode;
    this.form.passportData.passportdate = this.user.passportData.passportdate;
    this.form.passportData.passportaddress = this.user.passportData.passportaddress;
  },
  methods: {
    submit() {
      this.validateContact();
      this.validateFIO(this.form.contactData.firstname, 'firstname');
      this.validateFIO(this.form.contactData.lastname, 'lastname');
      this.validateFIO(this.form.patronymic, 'patronymic');

      if (!this.formIsValid) {
        return;
      }

      console.log(this.form);
    },
  },
  watch: {
    form: {
      handler(val) {
        const contactData = Object.values(val.contactData).every(item => item !== '');
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
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 48px;
  width: 100%;
  background: #EFF3F9;
  border-radius: 10px;
  padding: 42px;
}
form {
  align-items: flex-start !important;
  width: 100%;
  max-width: 628px;
  .box {
    width: 100%;
    max-width: 292px;
    input {
      padding: 12px 16px;
    }
  }
  .box + .box {
    margin-left: 40px;
  }
  fieldset + fieldset {
    margin-top: 24px;
  }
  .address {
    .box {
      max-width: 100%;
    }
  }
  .gender {
    .gender-box {
      width: 100%;
      margin-left: 40px;
    }
    .radio-buttons {
      margin-left: 0;
    }
  }
  .passport {
    margin: 24px 0;
    fieldset{
      width: 100%;
      max-width: 292px;
    }
    fieldset + fieldset {
      margin: 0 0 0 40px;
    }
    .box + .box {
      margin-left: 24px;
    }
  }
}
.button-main {
  padding: 13px;
  min-width: 232px;
  margin-top: 38px;
}
@media(max-width: $mobile_size) {
  form {
    align-items: center !important;
    margin: 0 auto;
    max-width: 552px;
    fieldset {
      flex-direction: column;
      justify-content: flex-start;
      .box + .box {
        margin: 24px 0 0 0;
      }
      .box {
        max-width: 100%;
      }
    }
    fieldset + fieldset {
      margin: 24px 0 0 0;
    }
    .gender {
      flex-direction: row;
      .gender-box {
        margin-left: 24px;
      }
    }
    .passport {
      flex-direction: column;
      fieldset {
        width: 100%;
        flex-direction: row;
      }
      .box {
        margin-top: auto;
        max-width: 50%;
      }
      .box + .box {
        margin-left: 24px;
      }
      fieldset:first-child {
        .box + .box {
          margin-top: 0;
        }
      }
      fieldset + fieldset {
        margin: 0;
      }
    }
  }
  .button-main {
    margin-top: 24px;
  }
  .content {
    margin-top: 24px;
    padding: 42px 36px 48px 36px;
  }
}
@media(max-width: 374px) {
  .content {
    padding: 42px 24px 48px 24px;
  }
}
</style>
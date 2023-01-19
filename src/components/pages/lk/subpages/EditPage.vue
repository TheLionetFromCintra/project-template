<template>
  <cabinet-page-wrapper title="Редактировать данные">
    <template #content>
      <div class="content">
        <the-form @submit="submit">
          <template #inputs>
            <fieldset class="d-flex align-items-start justify-content-center">
              <the-input
                  v-model.trim="form.lastname"
                  label="Фамилия"
                  placeholder="Иванов"
                  input-type="number"
              >
              </the-input>
              <the-input
                  v-model.trim="form.firstname"
                  label="Имя"
                  placeholder="Иван"
                  input-type="number"
              >
              </the-input>
            </fieldset>
            <fieldset class="d-flex align-items-start justify-content-center">
              <the-input
                  v-model.trim="form.patronymic"
                  label="Отчество (если есть)"
                  placeholder="Иванович"
                  input-type="number"
              >
              </the-input>
              <email-input
                  v-model.trim="form.email"
                  label="E-mail"
                  placeholder="user@mail.ru"
              >
              </email-input>
            </fieldset>
            <fieldset class="gender d-flex align-items-start justify-content-start">
              <the-input
                  v-model.trim="form.birthday"
                  label="Дата рождения:"
                  placeholder="дд.мм.гггг"
                  length="10"
                  input-type="letter"
                  mask="##.##.####"
                  date-type="date"
              >
              </the-input>
              <div class="gender-box">
                <radio-button-group
                    v-model.trim="form.gender"
                    :options="options"
                    label="Пол:"
                    :active-gender="form.gender"
                >
                </radio-button-group>
              </div>
            </fieldset>
            <div class="passport d-flex align-items-end">
              <fieldset class="d-flex align-items-end">
                <the-input
                    v-model.trim="form.passportseries"
                    label="Серия:"
                    placeholder="2220"
                    length="5"
                    input-type="letter"
                    mask="## ##"
                >
                </the-input>
                <the-input
                    v-model.trim="form.passportnumber"
                    label="Номер:"
                    placeholder="123456"
                    length="7"
                    input-type="letter"
                    mask="### ###"
                >
                </the-input>
              </fieldset>
              <fieldset class="d-flex align-items-end">
                <the-input
                    v-model.trim="form.passportdate"
                    label="Дата выдачи:"
                    placeholder="дд.мм.гггг"
                    length="10"
                    input-type="letter"
                    mask="##.##.####"
                    date-type="date"
                >
                </the-input>
                <the-input
                    v-model.trim="form.passportcode"
                    label="Код подразделения:"
                    placeholder="900-002"
                    length="7"
                    input-type="letter"
                    mask="###-###"
                >
                </the-input>
              </fieldset>
            </div>
            <fieldset class="address">
              <address-wrapper
                  v-model.trim="form.passportaddress"
                  :active-value="form.passportaddress"
              ></address-wrapper>
            </fieldset>
          </template>
          <template #default>
            <base-button class="button-main" mode="green">Обновить</base-button>
          </template>
        </the-form>
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import {mapGetters} from "vuex";
import TheForm from "@/components/ui/form/TheForm";
import TheInput from "@/components/ui/form/inputs/TheInput";
import EmailInput from "@/components/ui/form/inputs/EmailInput";
import RadioButtonGroup from "@/components/ui/form/inputs/radio/RadioButtonGroup";
import AddressWrapper from "@/components/pages/poll/components/AddressWrapper";

export default {
  components: {AddressWrapper, RadioButtonGroup, EmailInput, TheInput, TheForm, CabinetPageWrapper},
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        patronymic: '',
        email: '',
        birthday: '',
        gender: '',
        passportseries: '',
        passportnumber: '',
        passportcode: '',
        passportdate: '',
        passportaddress: ''
      },
      options: [{
        key: '0',
        value: 'М'
      }, {
        key: '1',
        value: 'Ж'
      }],
    };
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
  },
  created() {
    this.form.firstname = this.user.contactData.firstname;
    this.form.lastname = this.user.contactData.lastname;
    this.form.patronymic = this.user.contactData.patronymic;
    this.form.email = this.user.contactData.email;
    this.form.birthday = this.user.contactData.birthday;
    this.form.gender = this.user.contactData.gender;

    this.form.passportseries = this.user.passportData.passportseries;
    this.form.passportnumber = this.user.passportData.passportnumber;
    this.form.passportcode = this.user.passportData.passportcode;
    this.form.passportdate = this.user.passportData.passportdate;
    this.form.passportaddress = this.user.passportData.passportaddress;
  },
  methods: {
    submit() {
      console.log(this.form);
    },
  }
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
  max-width: 624px;
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
      align-items: flex-end !important;
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
        max-width: 100%;
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
  .form {
    .passport {
      fieldset {
        &:first-child {
          .box:last-child {
            min-width: 138px;
          }
        }
        &:last-child {
          .box:first-child {
            min-width: 110px;
          }
        }
      }
    }
  }
}
</style>
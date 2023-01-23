<template>
  <div class="desc">
    <span v-if="message">{{ message }}</span>
    <div v-else>
      <span>К сожалению мы не нашли указанный Вами номер <b>{{ phone }}</b></span>
      <span>Пожайлуста, заполните форму ниже:</span>
    </div>
  </div>

  <div class="content d-flex justify-content-center">
    <the-form @submit="submit">
      <template #inputs>
        <fieldset class="inputs d-flex align-items-start justify-content-center">
          <the-input
              label="Фамилия*"
              placeholder="Иванов"
              input-type="number"
              v-model="form.requiredFields.firstname"
              :error-message="errors.firstname"
              @focus="clearValidity('firstname')"
          >
          </the-input>
          <the-input
              label="Имя*"
              placeholder="Иван"
              input-type="number"
              v-model="form.requiredFields.lastname"
              :error-message="errors.lastname"
              @focus="clearValidity('lastname')"
          >
          </the-input>
        </fieldset>
        <fieldset>
          <the-input
              label="Отчество (если есть)"
              placeholder="Иванович"
              input-type="number"
              v-model="form.patronymic"
              :error-message="errors.patronymic"
              @focus="clearValidity('patronymic')"
          >
          </the-input>
        </fieldset>
        <fieldset>
          <phone-input
              label="Номер телефона (для связи)*"
              placeholder="+7 911 111 11 11"
              v-model="form.requiredFields.phone_fio"
              :error-message="errors.phone_fio"
              @focus="clearValidity('phone_fio')"
          >
          </phone-input>
        </fieldset>
        <fieldset class="inputs d-flex align-items-start justify-content-center">
          <the-input
              label="Первые 6 цифр карты*"
              placeholder="******"
              input-type="letter"
              length="6"
              v-model="form.requiredFields.pan_first"
              :error-message="errors.pan_first"
              @focus="clearValidity('pan_first')"
          >
          </the-input>
          <the-input
              label="Последние 4 цифры карты*"
              placeholder="****"
              input-type="letter"
              length="4"
              v-model="form.requiredFields.pan_last"
              :error-message="errors.pan_last"
              @focus="clearValidity('pan_last')"
          >
          </the-input>
        </fieldset>
      </template>
      <template #default>
        <base-button class="button-main" mode="green" :class="{disabled: isBtnDisabled}">Отписаться</base-button>
      </template>
    </the-form>
  </div>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import TheInput from "@/components/ui/form/inputs/TheInput";
import PhoneInput from "@/components/ui/form/inputs/PhoneInput";

import inputCheckMixin from "@/mixins/inputCheck";
import validationMixin from "@/mixins/validation";

export default {
  components: {TheForm, TheInput, PhoneInput},
  mixins: [inputCheckMixin, validationMixin],
  data() {
    return {
      form: {
        requiredFields: {
          lastname: '',
          firstname: '',
          phone_fio: '',
          pan_first: '',
          pan_last: '',
        },
        patronymic: '',
      },
      errors: {
        lastname: '',
        firstname: '',
        patronymic: '',
        phone_fio: '',
        pan_first: '',
        pan_last: '',
      },
      isBtnDisabled: true,
    };
  },
  computed: {
    phone() {
      return this.$route.params.phone;
    },
    message() {
      return this.$route.params.message;
    }
  },
  methods: {
    submit() {
      this.validationUnsub();

      this.validateFIO(this.form.requiredFields.firstname, 'firstname');
      this.validateFIO(this.form.requiredFields.lastname, 'lastname');
      this.validateFIO(this.form.patronymic, 'patronymic');

      if (!this.formIsValid) {
        return;
      }
    }
  },
  watch: {
    form: {
      handler(val) {
        const contactData = Object.values(val.requiredFields).every(item => item !== '');

        if(contactData) {
          this.isBtnDisabled = false;
        } else {
          this.isBtnDisabled = true;
        }
      },
      deep: true
    },
  },
  beforeRouteEnter(to, from, next) {
    const {
      info,
      phone
    } = to.params;

    if (info || phone) {
      next();
    } else {
      // Store.commit('application/load', false)
      next({
        name: 'Unsubscribe',
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 24px;
  width: 100%;
  background: #EFF3F9;
  border-radius: 10px;
  padding: 42px 0;
}
.desc {
  max-width: 750px;
  span {
    display: block;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  span + span {
    margin-top: 8px;
  }
}
form {
  width: 100%;
  max-width: 624px;
  .box {
    max-width: 292px;
  }
  .box + .box {
    margin-left: 40px;
  }
  fieldset + fieldset {
    margin-top: 24px;
  }
}
@media(max-width: $mobile_size) {
  .desc {
    padding: 0 24px;
  }
  .content {
    padding: 42px 36px;
  }
  fieldset {
    flex-direction: column;
  }
  form {
    max-width: 552px;
    .box {
      max-width: 552px;
    }
    .box + .box {
      margin: 24px 0 0 0;
    }
  }
}
</style>
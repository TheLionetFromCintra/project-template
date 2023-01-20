<template>
    <div class="desc">
      <span>Укажите номер телефона, который Вы использовали при регистрации.</span>
    </div>
    <div class="content d-flex justify-content-center">
      <the-form @submit="submit">
        <template #inputs>
          <fieldset class="inputs d-flex align-items-start justify-content-center">
            <phone-input
                v-model="form.phone"
                label="Номер телефона:"
                placeholder="+7 911 111 11 11"
                :error-message="errors.phone"
                @focus="clearValidity('phone')"
            >
            </phone-input>
          </fieldset>
        </template>
        <template #default>
          <base-button class="button-main" mode="green" :class="{disabled: isBtnDisabled}">Продолжить</base-button>
        </template>
      </the-form>
    </div>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PhoneInput from "@/components/ui/form/inputs/PhoneInput";
import validationMixin from "@/mixins/validation";
import inputCheckMixin from "@/mixins/inputCheck";

export  default {
  components: {TheForm, PhoneInput},
  mixins: [validationMixin, inputCheckMixin],
  data() {
    return {
      form: {
        phone: '',
      },
      errors: {
        phone: '',
      },
      isBtnDisabled: true,
    };
  },
  methods: {
    submit() {
      this.validatePrimary();

      if (!this.formIsValid) {
        return;
      }

      this.$router.push({
        name: 'UnsubSuccess',
        params: {
          // info,
          phone: this.form.phone
        }
      });
    }
  },
  watch: {
    form: {
      handler(val) {
        this.isBtnDisabled = !(val.phone !== '');
      },
      deep: true
    },
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
  }
  form {
    width: 100%;
    max-width: 624px;
    .box {
      max-width: 300px;
    }
  }
  @media(max-width: $mobile_size) {
    .desc {
      padding: 0 24px;
    }
    .content {
      padding: 42px 36px;
    }
    form {
      max-width: 552px;
      .box {
        max-width: 100%;
      }
    }
  }
</style>
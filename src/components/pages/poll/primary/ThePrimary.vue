<template>
  <poll-step>
    <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Заполните форму">
      <the-form class="primary-form" @submit="submit">
        <template #inputs>
          <h3 class="mob-title">Контактные данные</h3>
          <fieldset class="inputs d-flex align-items-start">
            <phone-input
                v-model.trim="form.phone"
                label="Номер телефона*"
                placeholder="+7 911 111 11 11"
                :error-message="errors.phone"
                @focus="clearValidity('phone')"
                :filled-class="this.user.contactData.phone ? 'filled' : ''"
            >
            </phone-input>
            <email-input
                v-model.trim="form.email"
                label="Электронная почта"
                placeholder="для получения документов"
                :error-message="errors.email"
                @focus="clearValidity('email')"
            >
            </email-input>
          </fieldset>
          <div class="checkbox-wrapper">
            <the-checkbox
                v-model="agreement"
                :desc="dictionary.acceptanceText"
            >
            </the-checkbox>
            <the-checkbox
                v-if="!this.isSbg"
                v-model="autoPayment"
                :desc="dictionary.acceptanceAutoPayment"
            >
            </the-checkbox>
          </div>
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
  import PhoneInput from "@/components/ui/form/inputs/PhoneInput";
  import EmailInput from "@/components/ui/form/inputs/EmailInput";
  import TheCheckbox from "@/components/ui/form/inputs/TheCheckbox";
  import PollStep from "@/components/pages/poll/layouts/PollStep";

  import inputCheckMixin from '@/mixins/inputCheck';
  import sbgMixin from '@/mixins/sbg';

  // import Storage from '@/ext/storage/storage';

  import {mapGetters} from "vuex";
  import validationMixin from "@/mixins/validation";

  export default {
    components: { PollStep, TheCheckbox, PhoneInput, EmailInput, TheForm, PollStepWrapper },
    mixins: [inputCheckMixin, sbgMixin, validationMixin],
    data() {
      return {
        currentStep: 1,
        maxStep: 3,
        isBtnDisabled: true,
        form: {
          phone: null,
          email: null,
        },
        agreement: false,
        autoPayment: false,
        errors: {
          email: '',
          phone: ''
        },
      };
    },
    computed: {
      ...mapGetters({
        user: 'app/user',
        dictionary: 'dictionary/dictionary'
      }),
    },
    mounted() {
      this.form.phone = this.user.contactData.phone ? this.user.contactData.phone : '';
      this.form.email = this.user.contactData.email ? this.user.contactData.email : '';
    },
    methods: {
      async submit() {
          this.validatePrimary();

          if (!this.formIsValid) {
            return;
          }

          const { checkPhoneByCode } = await this.$store.dispatch('app/send', {
            contactData: this.form,
            // showLoader: send
          });
          console.log(checkPhoneByCode);
          // if(checkPhoneByCode) {
          //   await this.$router.push('/contact');
          // }
      }
    },
    watch: {
      form: {
        handler(val) {
          if(!this.isSbg) {
            this.isBtnDisabled = !(val.phone !== '' && this.agreement && this.autoPayment);
          } else {
            this.isBtnDisabled = !(val.phone !== '' && this.agreement);
          }
        },
        deep: true
      },
      agreement(val) {
        if(!this.isSbg) {
          this.isBtnDisabled = !(val && this.form.phone !== '' && this.autoPayment);
        } else {
          this.isBtnDisabled = !(val && this.form.phone !== '');
        }
      },
      autoPayment(val) {
        this.isBtnDisabled = !(val && this.form.phone !== '' && this.agreement);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .primary-form {
    width: 100%;
    max-width: 624px;
    .checkbox-wrapper {
      margin-top: 40px;
    }
  }
  .inputs {
    .box {
      max-width: 300px;
    }
    .box + .box {
      margin-left: 24px;
    }
  }
  @media(max-width: $mobile-size) {
    .primary-form {
      max-width: 552px;
    }
    .inputs {
      flex-direction: column;
      .box {
        max-width: 100%;
      }
      .box + .box {
        margin: 24px 0 0 0;
      }
    }
  }
</style>
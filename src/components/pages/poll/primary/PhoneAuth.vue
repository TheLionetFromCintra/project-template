<template>
 <poll-step padding-class="no-calc-padding" :show-calc="false">
   <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Подтвердите номер телефона">
        <the-form class="verif-form">
          <template #inputs>
            <h3 class="mob-title">Подтверждение телефона</h3>
            <div>
              <div class="input-text">
                Мы отправили код подтверждения на номер
              </div>
              <div class="d-flex justify-content-center">
                <input :class="{active: activeInput}"
                       type="text"
                       v-model.trim="phone"
                       ref="phone"
                       autocomplete="off"
                       autocapitalize="off"
                       autocorrect="off"
                       pattern="[0-9]*"
                       inputmode="numeric"
                       @input="initPhoneInput"
                       :maxlength="maxlength"
                >
              </div>
            </div>
            <div class="buttons d-flex justify-content-center">
              <button class="button" @click="unlockInput" v-if="!activeInput">Изменить</button>
              <button class="button" @click="saveResult" v-else>Сохранить</button>
            </div>
            <the-input
                placeholder="введите код из смс"
                input-type="letter"
                length="4"
            >
            </the-input>
          </template>
          <template #default>
            <base-button class="button-main disabled" mode="green">Продолжить</base-button>
            <resend-code text="Выслать повторно через"></resend-code>
          </template>
        </the-form>
      </poll-step-wrapper>
 </poll-step>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
import TheInput from "@/components/ui/form/inputs/TheInput";

import inputCheckMixin from "@/mixins/inputCheck";
import phoneMaskMixin from '@/mixins/phoneMask';
import PollStep from "@/components/pages/poll/layouts/PollStep";
import ResendCode from "@/components/ui/ResendCode";

export default {
  components: {ResendCode, PollStep, TheInput, TheForm, PollStepWrapper},
  mixins: [inputCheckMixin, phoneMaskMixin],
  data() {
    return {
      currentStep: 1,
      maxStep: 3,
      phone: '+7 999 123 45 67',
      initPhone: '+7 999 123 45 67',
      activeInput: false,
    };
  },
  methods: {
    initPhoneInput(e) {
      this.phone = this.phone.replace(/[A-Za-zА-Яа-яЁё]/g, '');
      this.setPhoneMask(e);
    },
    unlockInput() {
      this.activeInput = true;
      this.$refs.phone.focus();
    },
    saveResult() {
      this.activeInput = false;
      if(+this.phone === 0) this.phone = this.initPhone;
    }
  },
}
</script>

<style lang="scss" scoped>
  .verif-form {
    width: 100%;
    max-width: 360px;
    .button-main {
      margin-top: 24px;
    }
  }
  input {
    border: none;
    background: transparent;
    width: initial;
    padding: 0 0 2px 0;
    max-width: 140px;
    border-bottom: 1px solid transparent;
    pointer-events: none;
    transition: border-color 0.3s linear;
    &.active {
      outline: none;
      pointer-events: initial;
      border-color: $primary-black;
    }
  }
  .buttons {
    margin: 12px 0 24px 0;
  }
   .button, .input-text, input {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  .input-text {
    text-align: center;
    max-width: 250px;
    margin: 0 auto 12px auto;
  }
  .button {
    background: transparent;
    outline: none;
    padding-bottom: 2px;
    border-bottom: 1px solid $primary-black;
    transition: border-color 0.3s linear;
    &:hover, &:active, &:focus, &:focus-within {
      border-color: transparent;
    }
  }
  @media(max-width: $mobile-size) {
    input {
      padding: 0 0 1px 0;
      max-width: 105px;
    }
    .buttons {
      margin: 12px 0;
    }
    .button, .input-text, input {
      font-size: 12px;
      line-height: 18px;
    }
    .input-text {
      max-width: 200px;
      margin: 0 auto 6px auto;
    }
    .button {
      padding-bottom: 1px;
    }
  }
</style>
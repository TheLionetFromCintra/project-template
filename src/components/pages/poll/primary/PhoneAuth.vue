<template>
  <div class="bg poll-main">
    <div class="sub-container">
      <sub-header class="no-calc-padding"></sub-header>
      <h1 class="subtitle subtitle--poll">Оформление займа</h1>
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
            <div class="timer d-flex align-items-center justify-content-center">
              <div class="icon img-wrapper d-flex align-items-center justify-content-center" v-if="!isResend">
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9.5H3.5V9C3.5 4.30614 7.30614 0.5 12 0.5C16.6939 0.5 20.5 4.30614 20.5 9C20.5 13.6939 16.6939 17.5 12 17.5C9.8288 17.5 7.85939 16.6875 6.35733 15.3498L7.07049 14.6366C8.38396 15.7942 10.1116 16.5 12 16.5C16.1461 16.5 19.5 13.1461 19.5 9C19.5 4.85386 16.1461 1.5 12 1.5C7.85386 1.5 4.5 4.85386 4.5 9V9.5H5H6.79077L3.99548 12.2884L1.20711 9.5H3ZM12 9.25V9.53449L12.2446 9.67983L15.3145 11.5042L15.1057 11.8551L11.5 9.71531V5.5H12V9.25Z"
                        fill="#8F8F8F" stroke="#8F8F8F"/>
                </svg>
              </div>
              <div class="timer-text" v-if="!isResend">Выслать повторно через {{ timerCount }} с</div>
              <button class="timer-text active d-flex align-items-center" v-else>
                <div class="icon img-wrapper d-flex align-items-center justify-content-center">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9.5H3.5V9C3.5 4.30614 7.30614 0.5 12 0.5C16.6939 0.5 20.5 4.30614 20.5 9C20.5 13.6939 16.6939 17.5 12 17.5C9.8288 17.5 7.85939 16.6875 6.35733 15.3498L7.07049 14.6366C8.38396 15.7942 10.1116 16.5 12 16.5C16.1461 16.5 19.5 13.1461 19.5 9C19.5 4.85386 16.1461 1.5 12 1.5C7.85386 1.5 4.5 4.85386 4.5 9V9.5H5H6.79077L3.99548 12.2884L1.20711 9.5H3ZM12 9.25V9.53449L12.2446 9.67983L15.3145 11.5042L15.1057 11.8551L11.5 9.71531V5.5H12V9.25Z"
                          :fill="!isResend ? '#8F8F8F' : '#21348E'" :stroke="!isResend ? '#8F8F8F' : '#21348E'"/>
                  </svg>
                </div>
                <span>Выслать повторно</span>
              </button>
            </div>
          </template>
        </the-form>
      </poll-step-wrapper>
    </div>
  </div>
  <the-footer class="m-0"></the-footer>
</template>

<script>
import TheFooter from "@/components/layouts/TheFooter";
import TheForm from "@/components/ui/form/TheForm";
import SubHeader from "@/components/layouts/SubHeader";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
import TheInput from "@/components/ui/form/inputs/TheInput";

import inputCheckMixin from "@/mixins/inputCheck";
import phoneMaskMixin from '@/mixins/phoneMask';

export default {
  components: {TheInput, TheForm, TheFooter, PollStepWrapper, SubHeader},
  mixins: [inputCheckMixin, phoneMaskMixin],
  data() {
    return {
      currentStep: 1,
      maxStep: 3,
      phone: '+7 999 123 45 67',
      initPhone: '+7 999 123 45 67',
      timerCount: 59,
      isResend: false,
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
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.isResend = true;
        }
      },
      immediate: true,
    }

  }
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
  .timer {
    width: 100%;
    margin-top: 24px;
    .timer-text {
      color: #8F8F8F;
      &.active {
        color: #21348E;
        outline: none;
        background: transparent;
        span {
          white-space: nowrap;
        }
      }
    }
  }
  .icon {
    margin-right: 14px;
    max-width: 24px;
    height: 24px;
  }
  .buttons {
    margin: 12px 0 24px 0;
  }
  .timer .timer-text, .button, .input-text, input {
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
    .timer {
      margin-top: 12px;
      .timer-text {
        &.active {
          span {
            white-space: initial;
          }
        }
      }
    }
    .icon {
      display: none !important;
    }
    .buttons {
      margin: 12px 0;
    }
    .timer .timer-text, .button, .input-text, input {
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
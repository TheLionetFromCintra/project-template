<template>
  <div class="bg poll-main">
    <div class="sub-container">
      <sub-header></sub-header>
      <h1 class="subtitle subtitle--poll">Оформление займа</h1>
      <calc-result></calc-result>
      <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Заполните форму">
        <the-form class="primary-form">
          <template #inputs>
            <h3 class="mob-title">Контактные данные</h3>
            <fieldset class="inputs d-flex align-items-start">
              <phone-input
                  label="Номер телефона:"
                  placeholder="+7 911 111 11 11"
                  error-message="Неверный формат"
              >
              </phone-input>
              <email-input
                  label="Электронная почта:"
                  placeholder="для получения документов"
              >
              </email-input>
            </fieldset>
            <div class="checkbox-wrapper">
              <the-checkbox
                :desc="checkboxText"
                error-message="Необходимо согласиться с условиями"
              >
              </the-checkbox>
            </div>
          </template>
          <template #default>
            <base-button class="button-main disabled" mode="green">Продолжить</base-button>
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
  import CalcResult from "@/components/pages/poll/components/CalcResult";
  import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
  import PhoneInput from "@/components/ui/form/inputs/PhoneInput";
  import EmailInput from "@/components/ui/form/inputs/EmailInput";
  import TheCheckbox from "@/components/ui/form/inputs/TheCheckbox";

  export default {
    components: {TheCheckbox, PhoneInput, EmailInput, TheForm, TheFooter, PollStepWrapper, CalcResult, SubHeader},
    data() {
      return {
        currentStep: 1,
        maxStep: 3,
        checkboxText: '<b>Совершая действия на сайте, вы даете свое</b> Согласие на обработку персональных данных, Согласие на получение рекламных материалов и Защита от непредвиденных ситуаций. Вы ознакомились и соглашаетесь с Договором публичной оферты, Политикой Конфиденциальности и тарифами сервиса.'
      };
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
<template>
  <div class="bg">
    <div class="sub-container">
      <sub-header></sub-header>
      <h1 class="subtitle subtitle--poll">Оформление займа</h1>
      <calc-result></calc-result>
      <poll-step-wrapper :current-step="currentStep" :max-step="maxStep">
        <the-form class="primary-form">
          <template #inputs>
            <fieldset class="inputs d-flex align-items-start">
              <the-input
                  input-type="phone"
                  label="Номер телефона:"
                  placeholder="+7 911 111 11 11"
                  error-message="Неверный формат"
              >
              </the-input>
              <the-input
                  input-type="email"
                  label="Электронная почта:"
                  placeholder="для получения документов"
              >
              </the-input>
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
            <base-button class="button disabled" mode="green">Продолжить</base-button>
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
  import TheInput from "@/components/ui/form/TheInput";
  import TheCheckbox from "@/components/ui/form/TheCheckbox";

  export default {
    components: {TheCheckbox, TheInput, TheForm, TheFooter, PollStepWrapper, CalcResult, SubHeader},
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
  .bg {
    padding-bottom: 138px;
    background: #fff url('@/assets/images/background/poll/poll-bg.svg') repeat 90% 900px;
  }
  .primary-form {
    width: 100%;
    max-width: 624px;
    .checkbox-wrapper {
      margin-top: 40px;
    }
  }
  .button {
    padding: 13px;
    min-width: 232px;
    margin-top: 38px;
  }
  .inputs {
    .box {
      max-width: 300px;
    }
    .box + .box {
      margin-left: 24px;
    }
  }
</style>
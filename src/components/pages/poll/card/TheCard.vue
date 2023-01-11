<template>
  <div class="bg poll-main">
    <div class="sub-container">
      <sub-header></sub-header>
      <h1 class="subtitle subtitle--poll">Оформление займа</h1>
      <calc-result></calc-result>
      <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Введите данные вашей карты">
        <the-form class="card-form">
          <template #inputs>
            <h3>Данные банковской карты</h3>
            <h4>на которую хотите получить займ</h4>
            <div class="card__wrapper">
              <div class="card__front">
                <the-input
                    label="Номер"
                    placeholder="0000 0000 0000 0000"
                    input-type="letter"
                    length="19"
                    mask="#### #### #### ####"
                    focus-next="cardName"
                    class-name="cardNumber"
                >
                </the-input>
                <fieldset class="inputs d-flex align-items-center">
                  <the-input
                      label="Владелец"
                      placeholder="VLADIMIR KIROV"
                      input-type="number"
                      class-name="cardName"
                  >
                  </the-input>
                  <the-input
                      label="Срок"
                      placeholder="09/25"
                      input-type="letter"
                      length="5"
                      mask="##/##"
                      focus-next="cardCVV"
                      class-name="cardDate"
                  >
                  </the-input>
                </fieldset>
              </div>
              <div class="card__back d-flex justify-content-end align-items-end">
                <the-input
                    label="Код"
                    placeholder="000"
                    input-type="letter"
                    length="3"
                    type="password"
                    class-name="cardCVV"
                >
                </the-input>
              </div>
            </div>
          </template>
          <template #default>
            <p class="desc">Для проверки актуальности карты с нее спишется один рубль.</p>
            <div v-if="showNoCardBlock" class="no-card">
              <router-link to="/final">У меня нет карты</router-link>
            </div>
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
import TheInput from "@/components/ui/form/inputs/TheInput";

export default {
  components: {TheInput, TheForm, TheFooter, PollStepWrapper, CalcResult, SubHeader},
  data() {
    return {
      currentStep: 3,
      maxStep: 3,
      showNoCardBlock: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showNoCardBlock = true;
    }, 15 * 1000);
  }
}
</script>

<style lang="scss" scoped>
  .card-form {
    width: 100%;
    max-width: 554px;
    .button-main {
      margin-top: 24px;
    }
    h3,h4,.desc {
      font-weight: 600;
      text-align: center;
      letter-spacing: 0.07em;
    }
    h3 {
      font-size: 24px;
      line-height: 29px;
    }
    h4{
      font-size: 16px;
      line-height: 19px;
    }
    .desc {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #0B161F;
      max-width: 300px;
      margin-top: 36px;
    }
    h3 + h4 {
      margin-top: 12px;
    }
  }
  .card__wrapper {
    margin-top: 36px;
  }
  .card__front, .card__back {
    width: 430px;
    height: 276px;
    border-radius: 10px;
    position: relative;
  }
  .card__front {
    z-index: 2;
    background-color: $primary-white;
    padding: 38px 40px 34px 40px;
    fieldset {
      margin-top: 14px;
      .box + .box {
        margin-left: 25px;
      }
      .box:last-child {
        max-width: 102px;
      }
    }
  }
  .card__back {
    z-index: 1;
    margin: -254px 0 0 auto;
    background-color: #21348E;
    padding: 0 20px 56px 0;
    .box {
      max-width: 90px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 44px;
      right: 0;
      z-index: -1;
      background-color: $primary-black;
      width: 100%;
      height: 68px;
    }
  }
  .no-card {
    margin-top: 24px;
    a {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
      color: #0B161F;
      padding-bottom: 2px;
      border-bottom: 1px solid #0B161F;
      transition: border-color 0.3s linear;
      &:hover, &:active, &:focus, &:focus-within {
        border-color: transparent;
      }
    }
  }
  @media(max-width: $mobile-size) {
    .card-form {
      max-width: 354px;
      .desc {
        font-size: 12px;
        line-height: 18px;
        max-width: 230px;
        margin-top: 24px;
      }
    }
    .card__wrapper {
      margin-top: 24px;
    }
    .card__front, .card__back {
      width: 79%;
      height: 153px;
    }
    .card__front {
      padding: 20px 20px 18px 20px;
      fieldset {
        margin-top: 8px;
        .box + .box {
          margin-left: 13px;
        }
        .box:last-child {
          max-width: 60px;
        }
      }
    }
    .card__back {
      margin: -132px 0 0 auto;
      padding: 0 10px 40px 0;
      .box {
        max-width: 48px;
      }
      &::before {
        top: 24px;
        height: 25px;
      }
    }
    .no-card {
      a {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  @media(max-width: 374px) {
    .card__front, .card__back {
      width: 74%;
    }
  }
</style>
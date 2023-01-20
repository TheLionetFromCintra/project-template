<template>
  <poll-step>
    <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Введите данные вашей карты">
        <the-form class="card-form" @submit="submit">
          <template #inputs>
            <h3>Данные банковской карты</h3>
            <h4>на которую хотите получить займ</h4>
            <div class="card__wrapper">
              <div class="card__front">
                <the-input
                    v-model.trim="form.cardData.cardnumber"
                    label="Номер*"
                    placeholder="0000 0000 0000 0000"
                    input-type="letter"
                    length="19"
                    mask="#### #### #### ####"
                    focus-next="cardName"
                    class-name="cardNumber"
                    :error-message="errors.cardnumber"
                    :active-error="false"
                    @focus="clearValidityCard('cardnumber')"
                >
                </the-input>
                <fieldset class="inputs d-flex align-items-center">
                  <the-input
                      v-model.trim="form.cardData.cardname"
                      label="Владелец*"
                      placeholder="VLADIMIR KIROV"
                      input-type="number"
                      class-name="cardName"
                      :error-message="errors.cardname"
                      :active-error="false"
                      @focus="clearValidityCard('cardname')"
                  >
                  </the-input>
                  <the-input
                      v-model.trim="form.cardData.carddate"
                      label="Срок*"
                      placeholder="09/25"
                      input-type="letter"
                      length="5"
                      mask="##/##"
                      focus-next="cardCVV"
                      class-name="cardDate"
                      :error-message="errors.carddate"
                      :active-error="false"
                      @focus="clearValidityCard('carddate')"
                  >
                  </the-input>
                </fieldset>
              </div>
              <div class="card__back d-flex justify-content-end align-items-end">
                <the-input
                    v-model.trim="form.cardcvv"
                    label="Код*"
                    placeholder="000"
                    input-type="letter"
                    length="3"
                    type="password"
                    class-name="cardCVV"
                    :error-message="errors.cardcvv"
                    :active-error="false"
                    @focus="clearValidityCard('cardcvv')"
                >
                </the-input>
              </div>
            </div>
          </template>
          <template #default>
            <div class="errors" v-if="Object.keys(errors).length !== 0">
              <p v-for="error in errors" :key="error">
                {{ error }}
              </p>
            </div>
            <p class="desc" v-html="dictionary.cardTitle"></p>
            <div v-if="showNoCardBlock" class="no-card">
              <router-link :to="noCardLink">У меня нет карты</router-link>
            </div>
            <base-button class="button-main" mode="green" :class="{disabled: isBtnDisabled}">Продолжить</base-button>
          </template>
        </the-form>
      </poll-step-wrapper>
  </poll-step>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
import TheInput from "@/components/ui/form/inputs/TheInput";
import PollStep from "@/components/pages/poll/layouts/PollStep";

import inputCheckMixin from "@/mixins/inputCheck";
import sbgMixin from "@/mixins/sbg";
import {mapGetters} from "vuex";
import Store from '@/store';
import validationMixin from "@/mixins/validation";


export default {
  components: {PollStep, TheInput, TheForm, PollStepWrapper, },
  mixins: [inputCheckMixin, sbgMixin, validationMixin],
  data() {
    return {
      currentStep: 3,
      maxStep: 3,
      showNoCardBlock: false,
      isBtnDisabled: true,
      form: {
        cardData: {
          cardnumber: '',
          cardname: '',
          carddate: '',
        },
        cardcvv: '',
      },
      errors: {},
    };
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
      dictionary: 'dictionary/dictionary',
    }),
    noCardLink() {
      return this.isSbg ? '/final' : 'lk';
    },
  },
  mounted() {
    setTimeout(() => {
      this.showNoCardBlock = true;
    }, 15 * 1000);
  },
  methods: {
    submit() {
      this.validateCard();

      if (!this.formIsValid) {
        return;
      }

      console.log(this.form);
    },
  },
  watch: {
    form: {
      handler(val) {
        const cardData = Object.values(val.cardData).every(item => item !== '');

        if(cardData && val.cardcvv !== '' && +val.cardData.carddate !== 1) {
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
      allow
    } = to.params;

    const {
      passportData: {
        passportnumber,
      },
      isSubscribed,
      isSigned
    } = Store.getters['app/user'];

    if (isSubscribed) {
      // Store.commit('application/load', false)
      next({ name: 'PersonalProfile' });
      return;
    }

    if (isSigned && allow || passportnumber) {
      next();
    } else {
      // Store.commit('application/load', false);
      next({ name: 'LoanContact' });
    }
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
      margin-top: 36px;
      text-align: left;

      &::v-deep {
        a {
          color: $primary-blue-dark;
          font-weight: 600;
        }
        p + p {
          margin-top: 12px;
        }
      }
    }
    h3 + h4 {
      margin-top: 12px;
    }
    .errors {
      margin-top: 16px;
      font-size: 14px;
      line-height: 18px;
      padding-left: 30px;
      position: relative;
      color: #EB5757;
      width: 100%;
      &::before {
        content: "!";
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #EB5757;
        color: $primary-white;
        font-size: 18px;
        position: absolute;
        top: 1px;
        left: 0;
      }
      p + p {
        margin-top: 6px;
      }
    }
  }
  .card__wrapper {
    margin-top: 36px;
  }
  .card__front, .card__back {
    width: 430px;
    min-height: 276px;
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
        margin-top: 24px;
      }
    }
    .card__wrapper {
      margin-top: 24px;
    }
    .card__front, .card__back {
      width: 79%;
      min-height: 153px;
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
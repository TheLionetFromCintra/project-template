<template>
  <poll-step>
    <poll-step-wrapper :current-step="currentStep" :max-step="maxStep" title="Заполните анкету">
        <the-form class="contact-form">
          <template #inputs>
            <h3 class="mob-title">Персональные данные</h3>
            <the-input
              label="ФИО (отчество можно не указывать если нет)"
              placeholder="Иванов Иван Владимирович"
              input-type="number"
            >
            </the-input>
            <fieldset class="personal d-flex align-items-center">
              <the-input
                  label="Дата рождения:"
                  placeholder="дд.мм.гггг"
                  length="10"
                  input-type="letter"
                  mask="##.##.####"
                  date-type="date"
              >
              </the-input>
              <radio-button-group
                  :options="options"
                  label="Пол:"
              >
              </radio-button-group>
            </fieldset>
            <h4>Паспортные данные</h4>
            <div class="inputs-wrapper d-flex align-items-end">
              <fieldset class="d-flex align-items-end">
                <the-input
                    label="Серия:"
                    placeholder="2220"
                    length="5"
                    input-type="letter"
                    mask="## ##"
                >
                </the-input>
                <the-input
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
                    label="Дата выдачи:"
                    placeholder="дд.мм.гггг"
                    length="10"
                    input-type="letter"
                    mask="##.##.####"
                    date-type="date"
                >
                </the-input>
                <the-input
                    label="Код подразделения:"
                    placeholder="900-002"
                    length="7"
                    input-type="letter"
                    mask="###-###"
                >
                </the-input>
              </fieldset>
            </div>
            <address-wrapper></address-wrapper>
          </template>
          <template #default>
            <base-button class="button-main disabled" mode="green">Продолжить</base-button>
          </template>
        </the-form>
      </poll-step-wrapper>
  </poll-step>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";
import TheInput from "@/components/ui/form/inputs/TheInput";
import RadioButtonGroup from "@/components/ui/form/inputs/radio/RadioButtonGroup";
import AddressWrapper from "@/components/pages/poll/components/AddressWrapper";
import PollStep from "@/components/pages/poll/layouts/PollStep";

export default {
  components: {
    PollStep,
    AddressWrapper,
    TheInput, RadioButtonGroup, TheForm, PollStepWrapper},
  data() {
    return {
      currentStep: 2,
      maxStep: 3,
      options: [{
        key: '0',
        value: 'М'
      }, {
        key: '1',
        value: 'Ж'
      }],
    };
  }
}
</script>

<style lang="scss" scoped>
  .contact-form {
    width: 100%;
    max-width: 627px;
    .personal {
      .box  {
        max-width: 150px;
      }
    }
    fieldset {
      margin-top: 24px;
    }
    h4 {
      margin-top: 36px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.07em;
    }
    .inputs-wrapper {
      margin: 24px 0;
      fieldset {
        margin: 0;
      }
      .box + .box {
        margin-left: 32px;
      }
      fieldset + fieldset {
        margin-left: 44px;
      }
    }
  }
  @media(max-width: $mobile-size) {
    .contact-form {
      max-width: 552px;
      h4 {
        text-align: center;
        margin-top: 48px;
      }
      .inputs-wrapper {
        flex-direction: column;
        fieldset {
          width: 100%;
        }
        fieldset + fieldset {
          margin: 24px 0 0 0;
        }
      }
    }
    .personal {
      align-items: flex-end !important;
    }
  }
  @media(max-width: 374px) {
    .contact-form {
      .inputs-wrapper {
        fieldset {
          &:first-child {
            .box:last-child {
              min-width: 137px;
            }
          }
          &:last-child {
            .box:first-child {
              min-width: 103px;
            }
          }
        }
      }
    }
  }
</style>
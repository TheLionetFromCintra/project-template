<template>
  <cabinet-page-wrapper title="Сохранить изменения">
    <template #content>
        <div class="content">
          <the-form>
            <template #inputs>
              <div class="desc">
                <span>Для сохранения изменений введите код из СМС.</span>
              </div>
              <fieldset class="inputs d-flex align-items-center justify-content-center">
                <the-input
                    placeholder="код из смс"
                    input-type="letter"
                    length="4"
                >
                </the-input>
                <resend-code text="Действителен"></resend-code>
              </fieldset>
            </template>
            <template #default>
              <base-button class="button-main" mode="green">Продолжить</base-button>
            </template>
          </the-form>
        </div>
    </template>
  </cabinet-page-wrapper>
</template>

<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import TheForm from "@/components/ui/form/TheForm";
import TheInput from "@/components/ui/form/inputs/TheInput";
import ResendCode from "@/components/ui/ResendCode";

export default {
  components: {TheForm, CabinetPageWrapper, TheInput, ResendCode}
}
</script>

<style lang="scss" scoped>
.desc {
  margin-bottom: 24px;
  max-width: 750px;
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
}
.content {
  margin-top: 48px;
  width: 100%;
  background: #EFF3F9;
  border-radius: 10px;
  padding: 42px;
}
form {
  align-items: flex-start !important;
  width: 100%;
  max-width: 624px;
  .box {
    max-width: 150px;
  }
  fieldset {
    justify-content: flex-start !important;
  }
}
.button-main {
  min-width: 178px;
  margin-top: 38px;
}
.timer {
  margin: 0 0 0 24px;
  justify-content: flex-start !important;
  width: fit-content;
  min-width: 260px;
}
@media(max-width: $mobile-size) {
  .content {
    margin-top: 24px;
    padding: 42px 15px;
  }
  .desc {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 24px auto;
  }
  form {
    align-items: center !important;
    margin: 0 auto;
    .box {
      min-width: 130px;
    }
    fieldset {
      justify-content: center !important;
    }
  }
  .timer {
    min-width: initial;
  }
}
</style>
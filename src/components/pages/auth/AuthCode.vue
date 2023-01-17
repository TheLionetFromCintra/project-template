<template>
  <the-form @submit="submit">
    <template #inputs>
      <div class="desc">
        <div>Мы отправили код подтверждения на номер</div>
        {{ phone }}
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
      <base-button class="button-main" mode="green">Войти</base-button>
    </template>
  </the-form>
</template>

<script>
  import TheForm from "@/components/ui/form/TheForm";
  import TheInput from "@/components/ui/form/inputs/TheInput";
  import ResendCode from "@/components/ui/ResendCode";

  export default {
    components: {TheForm, TheInput, ResendCode},
    computed: {
      phone() {
        return this.$route.params.phone;
      }
    },
    methods: {
      submit() {

      }
    },
    beforeRouteEnter(to, from, next) {
      const {
        info,
        phone
      } = to.params;

      // if (info && data) {
      if (info || phone) {
        next();
      } else {
        // Store.commit('application/load', false)
        next({
          name: 'AuthLogin',
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  form {
    width: 100%;
    max-width: 624px;
    .box {
      max-width: 150px;
    }
  }
  .button-main {
    min-width: 178px;
  }
  .desc {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
    div {
      margin-bottom: 8px;
    }
  }
  .timer {
    margin: 0 0 0 24px;
    justify-content: flex-start !important;
    width: fit-content;
    min-width: 260px;
  }
  @media(max-width: $mobile-size) {
    .desc {
      max-width: 80%;
      margin: 0 auto 24px auto;
    }
    form {
      .box {
        min-width: 130px;
      }
    }
    .timer {
      min-width: initial;
    }
  }
</style>
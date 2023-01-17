<template>
  <the-form @submit="submit">
    <template #inputs>
      <h3 class="mob-title">Авторизуйтесь</h3>
      <fieldset class="inputs d-flex align-items-start justify-content-center">
        <phone-input
            label="Номер телефона:"
            placeholder="+7 911 111 11 11"
            error-message="Неверный формат"
        >
        </phone-input>
      </fieldset>
    </template>
    <template #default>
      <base-button class="button-main" mode="green">Войти</base-button>
    </template>
  </the-form>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import PhoneInput from "@/components/ui/form/inputs/PhoneInput";

export default {
  components: {TheForm, PhoneInput},
  data() {
    return {
      form: {
        phone: '+7 910 123 94 05',
      }
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'AuthCode',
        params: {
          // info,
          phone: this.form.phone
        }
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
      max-width: 300px;
    }
  }
  .button-main {
    min-width: 178px;
  }
</style>
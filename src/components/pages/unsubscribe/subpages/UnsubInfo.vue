<template>
  <div class="desc">
    <span>К сожалению мы не нашли указанный Вами номер <b>+7 910 032-42-34</b></span>
    <span>Пожайлуста, заполните форму ниже:</span>
  </div>
  <div class="content d-flex justify-content-center">
    <the-form @submit="submit">
      <template #inputs>
        <fieldset class="inputs d-flex align-items-start justify-content-center">
          <the-input
              label="Фамилия"
              placeholder="Иванов"
              input-type="number"
          >
          </the-input>
          <the-input
              label="Имя"
              placeholder="Иван"
              input-type="number"
          >
          </the-input>
        </fieldset>
        <fieldset>
          <the-input
              label="Отчество (если есть)"
              placeholder="Иванович"
              input-type="number"
          >
          </the-input>
        </fieldset>
        <fieldset>
          <phone-input
              label="Номер телефона (для связи)"
              placeholder="+7 911 111 11 11"
              error-message="Неверный формат"
          >
          </phone-input>
        </fieldset>
        <fieldset class="inputs d-flex align-items-start justify-content-center">
          <the-input
              label="Первые 6 цифр карты"
              placeholder="******"
              input-type="letter"
              length="6"
          >
          </the-input>
          <the-input
              label="Последние 4 цифры карты"
              placeholder="****"
              input-type="letter"
              length="4"
          >
          </the-input>
        </fieldset>
      </template>
      <template #default>
        <base-button class="button-main" mode="green">Отписаться</base-button>
      </template>
    </the-form>
  </div>
</template>

<script>
import TheForm from "@/components/ui/form/TheForm";
import TheInput from "@/components/ui/form/inputs/TheInput";
import PhoneInput from "@/components/ui/form/inputs/PhoneInput";

export default {
  components: {TheForm, TheInput, PhoneInput},
  methods: {
    submit() {

    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 24px;
  width: 100%;
  background: #EFF3F9;
  border-radius: 10px;
  padding: 42px 0;
}
.desc {
  max-width: 750px;
  span {
    display: block;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  span + span {
    margin-top: 8px;
  }
}
form {
  width: 100%;
  max-width: 624px;
  .box {
    max-width: 292px;
  }
  .box + .box {
    margin-left: 40px;
  }
  fieldset + fieldset {
    margin-top: 24px;
  }
}
@media(max-width: $mobile_size) {
  .desc {
    padding: 0 24px;
  }
  .content {
    padding: 42px 36px;
  }
  fieldset {
    flex-direction: column;
  }
  form {
    max-width: 552px;
    .box {
      max-width: 552px;
    }
    .box + .box {
      margin: 24px 0 0 0;
    }
  }
}
</style>
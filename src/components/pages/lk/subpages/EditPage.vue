<template>
  <cabinet-page-wrapper title="Редактирование данных">
    <template #content>
      <div class="content">
        edit page
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import {mapGetters} from "vuex";

export default {
  components: {CabinetPageWrapper},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      data: 'app/user',
    }),
    personalFields() {
      return [
        {
          label: 'Телефон',
          value: this.data.contactData.phone
        },
        {
          label: 'E-mail',
          value: this.data.contactData.email
        },
        {
          label: 'Фамилия',
          value: this.data.contactData.lastname
        },
        {
          label: 'Имя',
          value: this.data.contactData.firstname
        },
        {
          label: 'Отчество',
          value: this.data.contactData.patronymic
        },
        {
          label: 'Дата рождения',
          value: this.data.contactData.birthday
        },
        {
          label: 'Пол',
          value: this.userGender
        },
      ];
    },
    passportFields() {
      return [
        {
          label: 'Серия',
          value: this.data.passportData.passportissuecode
        },
        {
          label: 'Номер',
          value: this.data.passportData.passportnumber
        },
        {
          label: 'Код подразделения',
          value: this.data.passportData.passportseries
        },
        {
          label: 'Адрес регистрации',
          value: this.data.passportData.passportaddress
        },
      ];
    },
    cardFields() {
      return [
        {
          label: 'Номер карты',
          value: this.data.cardData.cardnumber
        },
        {
          label: 'Владелец',
          value: this.data.cardData.cardname
        },
        {
          label: 'Срок',
          value: this.data.cardData.carddate
        },
      ];
    },
    userGender() {
      if (!this.data.contactData.gender)
        return '';

      return +this.data.contactData.gender ? 'Женский' : 'Мужской';
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 48px;
}
@media(max-width: $mobile_size) {
  .content {
    margin-top: 24px;
  }
}
</style>
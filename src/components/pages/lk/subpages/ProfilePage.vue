<template>
  <cabinet-page-wrapper title="Профиль">
    <template #content>
      <div class="content">
        <profile-data title="Личные данные" :fields="personalFields" :show-icon="true" class="personal-data"></profile-data>
        <profile-data title="Паспортные данные" :fields="passportFields" :show-icon="true" class="passport-data"></profile-data>
        <profile-data title="Привязанная карта" :fields="cardFields" :show-icon="false" class="card-data"></profile-data>
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import ProfileData from "@/components/pages/lk/components/ProfileData";
import {mapGetters} from "vuex";

export default {
  components: {ProfileData, CabinetPageWrapper},
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
          value: this.getValue(this.data.contactData.phone)
        },
        {
          label: 'E-mail',
          value: this.getValue(this.data.contactData.email)
        },
        {
          label: 'Фамилия',
          value: this.getValue(this.data.contactData.lastname)
        },
        {
          label: 'Имя',
          value: this.getValue(this.data.contactData.firstname)
        },
        {
          label: 'Отчество',
          value: this.getValue(this.data.contactData.patronymic)
        },
        {
          label: 'Дата рождения',
          value: this.getValue(this.data.contactData.birthday)
        },
        {
          label: 'Пол',
          value: this.getValue(this.userGender)
        },
      ];
    },
    passportFields() {
      return [
        {
          label: 'Серия',
          value: this.getValue(this.data.passportData.passportcode)
        },
        {
          label: 'Номер',
          value: this.getValue(this.data.passportData.passportnumber)
        },
        {
          label: 'Дата выдачи',
          value: this.getValue(this.data.passportData.passportdate)
        },
        {
          label: 'Код подразделения',
          value: this.getValue(this.data.passportData.passportseries)
        },
        {
          label: 'Адрес регистрации',
          value: this.getValue(this.data.passportData.passportaddress)
        },
      ];
    },
    cardFields() {
      return [
        {
          label: 'Номер карты',
          value: this.getValue(this.data.cardData.cardnumber)
        },
        {
          label: 'Владелец',
          value: this.getValue(this.data.cardData.cardname)
        },
        {
          label: 'Срок',
          value: this.getValue(this.data.cardData.carddate)
        },
      ];
    },
    userGender() {
      if (!this.data.contactData.gender)
        return '';

      return +this.data.contactData.gender ? 'Женский' : 'Мужской';
    }
  },
  methods: {
    getValue(value) {
      return value || '-';
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
      padding: 0 24px;
    }
  }
</style>
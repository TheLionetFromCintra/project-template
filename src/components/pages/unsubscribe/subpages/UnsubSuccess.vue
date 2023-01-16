<template>
  <div class="content">
    <div class="icon d-flex align-items-center justify-content-center">
      <div class="img-wrapper d-flex align-items-center justify-content-center">
        <img v-if="true" src="@/assets/images/icons/common/unsub-sign.svg" alt="sign icon">
        <img v-else src="@/assets/images/icons/common/unsub-success.svg" alt="sign icon">
      </div>
    </div>
    <h4>Активных подписок не найдено</h4>
    <p v-if="true" class="desc">Для указанного Вами номера <b>{{ phone }}</b><br>
      активных подписок в системе не найдено
    </p>
    <p v-else class="success">Заявка успешно создана. Номер Вашей заявки - 111001. На указанный Вами номер телефона отправлено СМС уведомление с адресом ссылки, по которой вы можете проверить статус выполнения заявки. Посмотреть статус заявки можно тут.
    </p>
    <div class="button">
      <base-button class="link" link to="/unsubscribe">Вернуться</base-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // info() {
    //   return this.$route.params.info
    // },
    phone() {
      return this.$route.params.phone;
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
        name: 'Unsubscribe',
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
  }
  .button {
    margin-top: 24px;
  }
  .link {
    background-color: $primary-white;
    border: 1px solid $primary-green-light;
    padding: 12px;
    min-width: 216px;
    color: $primary-green-light;
    opacity: 0.8;
    transition: opacity 0.3s linear;
    &:hover, &:active, &:focus-within, &:focus {
      opacity: 1;
    }
  }
  .icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: $primary-green-light;
    margin-bottom: 24px;
  }
  .desc, .success {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.07em;
  }
  .desc {
    opacity: 0.75;
  }
  .success {
    max-width: 700px;
    a {
      color: $primary-green-light;
    }
  }
  @media(max-width: $mobile-size) {
    .content {
      padding: 0 24px;
      text-align: center;
    }
    h4, .desc, .success {
      max-width: 80%;
    }
    h4, .desc, .icon, .success {
      margin: 0 auto 24px auto;
    }
    .button {
      margin-top: 0;
    }
  }
</style>

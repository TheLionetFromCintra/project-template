<template>
  <poll-step :show-calc="false" :show-title="false" widthClass="final">
    <h1 class="subtitle subtitle--poll">Отказаться от подписки</h1>
    <div class="content">
      <div class="icon d-flex align-items-center justify-content-center">
        <div class="img-wrapper d-flex align-items-center justify-content-center">
          <img src="@/assets/images/icons/common/unsub-sign.svg" alt="sign icon">
        </div>
      </div>
      <h4>Статус по заявке {{ ticket }}</h4>
      <div class="status">{{ message }}</div>
      <div class="phone" v-if="status === 'attention'">
        Свяжитесь с нами по телефону
        <a :href="`tel:${phoneLink}`">
          {{ phone }}
        </a>
      </div>
      <div class="button">
        <base-button class="link" link to="/unsubscribe">Вернуться</base-button>
      </div>
    </div>
  </poll-step>
</template>

<script>
import PollStep from "@/components/pages/poll/layouts/PollStep";
export default {
  components: {PollStep},
  data() {
    return {
      status: '',
      ticket: ''
    }
  },
  async mounted() {
    // const data = await getTicket(this.$route.params.uid);

    // this.ticket = data.ticket;
    // this.status = data.status;
  },
  computed: {
    message() {
      switch (this.status) {
        case 'success':
          return 'Подписка отменена';
        case 'attention':
          return 'Требует уточнений';
        case 'notFound':
          return 'Не найдено';
        default:
          return 'В работе';
      }
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
  div {
    max-width: 6px;
    height: 22px;
  }
}
.status {
  padding: 6px 16px;
  background-color: $primary-green-light;
  border-radius: 20px;
  color: $primary-white;
  width: fit-content;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.07em;
}
.phone {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.07em;
  a {
    font-weight: 600;
    color: $primary-green-light;
  }
}
@media(max-width: $mobile-size) {
  .subtitle {
    display: block;
    padding: 0 24px;
    margin-bottom: 24px;
  }
  .content {
    padding: 0 24px;
    text-align: center;
  }
  h4, {
    max-width: 80%;
  }
  h4, .status, .icon {
    margin: 0 auto 24px auto;
  }
  .status {
    margin-bottom: 0;
  }
  .phone {
    max-width: 84%;
    text-align: center;
    margin: 12px auto 0 auto;
  }
}
</style>

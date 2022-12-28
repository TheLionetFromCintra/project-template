<template>
  <ul class="items justify-content-between" v-if="windowWidth > 768">
    <li class="item d-flex flex-column align-items-center justify-content-between" v-for="stat in stats" :key="stat.title">
      <h4>{{ stat.title }}</h4>
      <span>{{ stat.description }}</span>
    </li>
  </ul>
  <div class="wrapper d-flex align-items-center justify-content-between" v-if="windowWidth > 768">
    <h5 class="label">Поможем вам получить деньги в течение 10 минут</h5>
    <base-button link mode="green" to="/primary" class="link">Оформить заявку</base-button>
  </div>
  <div class="mobile" v-if="windowWidth <= 768">
    <div class="helper">
      <h4>Отправьте заявку</h4>
      <p>И получите список компаний за 15 минут</p>
      <div class="link-wrapper d-flex justify-content-center">
        <base-button link class="link" mode="green" to="/primary">Отправить</base-button>
      </div>
    </div>
    <div class="safe">
      <div class="icon d-flex align-items-center justify-content-center">
        <img src="@/assets/images/icons/stats/shield.svg" alt="shield icon">
      </div>
      <p>Все данные надежно защищены и зашифрованы</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stats: [
          {
            title: '19 542',
            description: 'одобренных займов'
          },
          {
            title: '683,97 М',
            description: 'рублей выдано'
          },
          {
            title: '98%',
            description: 'вероятность одобрения'
          },
        ],
      };
    },
    computed: {
      windowWidth() {
        return this.$store.getters['app/windowWidth'];
      }
    }
  }
</script>

<style lang="scss" scoped>
  h5 {
    margin: 0;
  }
  .items {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 27.4%);
  }
  .item {
    background: #FAFAFA;
    border-radius: 10px;
    width: 100%;
    min-height: 152px;
    padding: 30px 8px 14px 8px;
    h4 {
      font-weight: 600;
      font-size: 48px;
      line-height: 52px;
    }
    span {
      display: inline-block;
      margin-top: 16px;
      font-size: 24px;
      line-height: 28px;
    }
  }
  .wrapper {
    background: #FAFAFA;
    border-radius: 10px;
    padding: 36px 44px 44px 36px;
    max-width: 900px;
    margin: 72px auto 0 auto;
  }
  .label {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: $primary-black-dark;
    max-width: 458px;
  }
  .link {
    padding: 27px;
    min-width: 260px;
    margin-left: 16px;
  }
  @media (max-width: $tablet_size) {
    .item {
      min-height: 130px;
      h4 {
        font-size: 38px;
        line-height: 46px;
      }
      span {
        font-size: 20px;
        line-height: 24px;
      }
    }
    .label {
      font-size: 30px;
      line-height: 37px;
    }
  }
  @media (max-width: $mobile_size) {
    .mobile {
      width: 100%;
      max-width: 284px;
      margin: 0 auto;
      .helper {
        padding: 20px 13px;
        background: #FAFAFA;
        border-radius: 10px;
        box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
      }
      h4, p {
        text-align: center;
        letter-spacing: 0.07em;
      }
      h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 12px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        max-width: 198px;
        margin: 0 auto;
      }
      .link-wrapper {
        margin-top: 24px;
      }
      .link {
        margin: 0;
        padding: 12px;
        min-width: 230px;
      }
      .safe {
        margin-top: 42px;
        .icon {
          margin: 0 auto 30px auto;
          max-width: 30px;
          height: 30px;
        }
        p {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
</style>
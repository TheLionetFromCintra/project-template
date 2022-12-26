<template>
  <ul class="items justify-content-between">
    <li class="item d-flex flex-column align-items-center justify-content-between" v-for="stat in stats" :key="stat.title">
      <h4>{{ stat.title }}</h4>
      <span>{{ stat.description }}</span>
    </li>
  </ul>
  <div class="wrapper d-flex align-items-center justify-content-between">
    <h5 class="label">Поможем вам получить деньги в течение 10 минут</h5>
    <base-button link mode="pink" to="/primary" class="link">Оформить заявку</base-button>
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
    }
  }
</script>

<style lang="scss" scoped>
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
  }
</style>
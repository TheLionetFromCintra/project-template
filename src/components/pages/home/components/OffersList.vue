<template>
  <ul class="items">
    <li class="item d-flex flex-column align-items-center justify-content-between" v-for="offer in offers" :key="offer.title">
        <div class="icon d-flex align-items-center justify-content-center">
          <div class="img img-wrapper d-flex align-items-center justify-content-center">
            <img :src="require(`@/assets/images/icons/offers/${offer.icon}.svg`)" alt="offer logo">
          </div>
        </div>
        <div class="title">
          <span>{{ offer.title }}</span>
        </div>
        <div class="description">
          <span>{{ offer.price }}</span>
          <span>{{ offer.days }}</span>
        </div>
        <base-button link mode="pink"  class="link" to="/primary">Выбрать</base-button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          title: 'Начинающий',
          price: 'до 30 000',
          days: 'от 3 до 21 дня',
          icon: 'beginner',
        },
        {
          title: 'Pro',
          price: 'до 60 000',
          days: 'от 3 до 60 дней',
          icon: 'pro',
        },
        {
          title: 'VIP',
          price: 'до 100 000',
          days: 'от 3 до 365 дней',
          icon: 'vip',
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
    grid-template-columns: repeat(3, 31.6%);
    grid-column-gap: 18px;
    grid-row-gap: 18px;
  }
  .item {
    padding: 20px;
    background: #FAFAFA;
    box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
    border-radius: 10px;
    width: 100%;
    max-width: 100%;
    min-height: 320px;
  }
  .icon {
    background: #EFF3F9;
    border-radius: 10px;
    width: 100%;
    height: 120px;
    .img {
      max-width: 172px;
      height: 118px;
      img {
        height: auto;
        max-width: 100%;
      }
    }
  }
  .title {
    margin-top: 16px;
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.07em;
    }
  }
  .description {
    span {
      display: block;
      text-align: center;
      margin-top: 6px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.07em;
    }
  }
  .link {
    margin-top: 14px;
    min-width: 212px;
  }
</style>
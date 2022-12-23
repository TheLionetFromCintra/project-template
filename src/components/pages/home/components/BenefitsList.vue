<template>
  <div class="benefits">
      <ul class="wrapper d-flex align-items-center justify-content-between">
        <li class="benefit d-flex" v-for="benefit in benefits" :key="benefit.title">
          <div class="icon d-flex align-items-center justify-content-center">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img :src="require(`@/assets/images/icons/benefits/icon-${benefit.icon}.png`)" alt="benefit icon">
            </div>
          </div>
          <div class="wrapper">
            <span>{{ benefit.title }}</span>
            <p>{{ benefit.description }}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        benefits: [
          {
            title: 'Быстро',
            description: '5 минут от заявки до денег',
            icon: 'clock',
          },
          {
            title: 'Надежно',
            description: 'Шифруем и защищаем данные',
            icon: 'card',
          },
          {
            title: 'Удобно',
            description: 'Займы без отказов и проверок',
            icon: 'phone',
          }
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .benefits {
    margin-top: 74px;
  }
  .wrapper {
    width: 100%;
    max-width: 984px;
    margin: 0 auto;
  }
  .benefit {
    width: 100%;
    max-width: 315px;
    .icon {
      width: 64px;
      height: 64px;
      flex-shrink: 0;

      background: #FAFAFA;
      border: 1px solid #000;
      border-radius: 10px;
      margin-right: 24px;

      .img {
        max-width: 32px;
        height: 32px;
      }
    }
    .wrapper {
      max-width: 228px;
      span, p {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.07em;
      }
      span {
        display: inline-block;
        font-weight: 600;
        margin-bottom: 12px;
      }
      p {
        line-height: 150%;
      }
    }
  }
  .benefit + .benefit {
    margin-left: 18px;
  }
</style>
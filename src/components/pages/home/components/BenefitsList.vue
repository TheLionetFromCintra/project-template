<template>
  <div class="benefits">
      <ul class="wrapper d-flex align-items-center justify-content-between">
        <li class="benefit d-flex align-items-center" v-for="benefit in benefits" :key="benefit.title">
          <div class="icon d-flex align-items-center justify-content-center">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img :src="require(`@/assets/images/icons/benefits/icon-${benefit.icon}.png`)" alt="benefit icon">
            </div>
          </div>
          <div class="helper">
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
    margin-top: 64px;
  }
  .wrapper {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }
  .benefit {
    width: 100%;
    max-width: 305px;

    background: #FAFAFA;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 15px 18px 18px 18px;
    .icon {
      width: 42px;
      height: 42px;
      flex-shrink: 0;
      margin-right: 24px;

      .img {
        max-width: 32px;
        height: 32px;
      }
    }
    .helper {
      max-width: 164px;
      span, p {
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.07em;
      }
      span {
        display: inline-block;
        font-weight: 600;
        margin-bottom: 6px;
      }
    }
  }
  .benefit + .benefit {
    margin-left: 18px;
  }
  @media(max-width: $mobile_size) {
    .benefits {
      max-width: 88%;
      margin: 52px auto 0 auto;
      position: relative;
      z-index: 10;
    }
    .wrapper {
      max-width: 950px;
      flex-direction: column;
      align-items: flex-start !important;
    }
    .benefit {
      max-width: 305px;

      background: transparent;
      border: none;
      border-radius: 0;
      padding: 0;


      .icon {
        width: 62px;
        height: 62px;
        margin-right: 12px;

        background: #FAFAFA;
        border: 1px solid #000;
        border-radius: 10px;
      }
      .helper {
        max-width: 164px;
        p {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
    .benefit + .benefit {
      margin: 24px 0 0 0;
    }
  }
</style>
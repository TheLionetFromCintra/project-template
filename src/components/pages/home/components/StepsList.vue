<template>
  <ul class="list d-flex justify-content-between">
    <li class="step" v-for="(step, index) in steps" :key="step.description">
      <div class="num d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center"><span>{{ index + 1 }}</span></div>
      </div>
      <p class="description">
        {{ step.description }}
      </p>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        steps: [
          {
            description: 'Заполните короткую анкету',
          },
          {
            description: 'Выберите компанию из списка',
          },
          {
            description: 'Получите предложения',
          }
        ]
      };
    }
  }
</script>

<style scoped lang="scss">
  .step {
    width: 100%;
    max-width: 294px;

    .num {
      width: 99px;
      height: 87px;
      margin: 0 auto;

      div {
        width: 62px;
        height: 62px;
        background: $primary-blue;
        border: 5px solid $primary-white;
        box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 12px 30px rgba(180, 185, 204, 0.26), 0px 0px 0px rgba(135, 135, 135, 0.42);
        border-radius: 15px;
        transform: rotate(45deg);
        span {
          display: inline-block;
          font-weight: 700;
          font-size: 36px;
          line-height: 44px;
          color: $primary-white;
          transform: rotate(-45deg);
          margin-top: -4px;
        }
      }
    }

    .description, div span {
      text-align: center;
      letter-spacing: 0.07em;
    }

    .description {
      font-size: 24px;
      line-height: 140.5%;
      margin: 8px auto 0 auto;
      max-width: 264px;
    }
  }
  .step + .step {
    margin-left: 12px;
  }
  @media(max-width: $mobile_size) {
    .list {
      flex-direction: column;
      max-width: 290px;
      margin: 0 auto;
    }

    .step {
      .description {
        font-size: 16px;
        line-height: 24px;
        max-width: 230px;
      }
      .num {
        div {
          span {
            margin: 0 0 0 5px;
          }
        }
      }
    }
    .step + .step {
      margin: 38px 0 0 0;
    }
  }
</style>
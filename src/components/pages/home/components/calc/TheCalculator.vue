<template>
  <div class="calculator">
      <div class="wrapper d-flex align-items-center justify-content-between">
        <div class="range d-flex align-items-center justify-content-between">
          <div class="calc">
            <sum-calc v-model="sum" :showRangeInfo="3"></sum-calc>
            <days-calc v-model="days"></days-calc>
          </div>
          <div class="result">
            <span class="text-big">{{ loanPriceString }} ₽</span>
            <span class="text">на</span>
            <span class="text-big">{{ days.count }} {{ loanDaysString }}</span>
          </div>
        </div>
        <base-button class="link" link mode="green" to="/primary">Оформить заявку</base-button>
      </div>
  </div>
</template>

<script>
import term from '@/helpers/string/term';
import price from '@/helpers/string/price';
import SumCalc from "@/components/pages/home/components/calc/SumCalc";
import DaysCalc from "@/components/pages/home/components/calc/DaysCalc";

  export default {
    components: {DaysCalc, SumCalc},
    data() {
      return {
        days: {
          type: 'days',
          count: 10
        },
        sum: 10000
      };
    },
    computed: {
      loanDaysString() {
        if (this.days.type === 'days') {
          return term(this.days.count);
        }
        return 'недель';
      },
      loanPriceString() {
        return price(this.sum);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .calculator {
    margin-top: 36px;
  }
  .wrapper {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    border: 1px solid #000;
    background-color: #FAFAFA;
    border-radius: 10px;

    min-height: 150px;
    padding: 26px 46px 20px 46px;
  }
  .calc, .range {
    width: 100%;
  }
  .range {
    max-width: 490px;
  }
  .calc {
    max-width: 300px;
  }
  .link {
    padding: 27px;
    min-width: 247px;
    margin-left: 16px;
  }
  .text, .text-big {
    letter-spacing: 0.07em;
    display: block;
  }
  .text-big {
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
  }
  .text {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin: 12px 0;
  }
</style>

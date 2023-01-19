<template>
  <div class="calculator">
      <div class="wrapper d-flex align-items-center justify-content-between">
        <div class="range d-flex align-items-center justify-content-between">
          <div class="calc">
            <div class="mobile d-flex align-items-center justify-content-between">
              <span>Сумма</span>
              <span>{{ loanPriceString }} ₽</span>
            </div>
            <sum-calc v-model="sum" :show-range-info="3"></sum-calc>
            <div class="mobile d-flex align-items-center justify-content-between">
                <span>Срок</span>
                <span>{{ days.count }} {{ loanDaysString }}</span>
            </div>
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
  import {mapGetters} from "vuex";

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
      ...mapGetters({
        calc: 'app/calculator',
      }),
      trueCountValue() {
        return this.calc.term.count ? +this.calc.term.count : this.days.count;
      },
      trueTypeValue() {
        return this.calc.term.type ? this.calc.term.type : this.days.type;
      },
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
    created() {
      this.sum = this.calc.amount || this.sum;
      this.days = {
          type: this.trueTypeValue,
          count: this.trueCountValue
      };
    }
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
    color: inherit;
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
  .mobile {
    display: none !important;
  }
  @media(max-width: $tablet_size) {
    .wrapper {
      padding: 26px 30px 20px 30px;
    }
    .calc {
      max-width: 260px;
    }
    .link {
      min-width: 227px;
    }
  }
  @media(max-width: $mobile_size) {
    .calculator {
      max-width: 93%;
      margin: 36px auto 0 auto;
    }
    .wrapper {
      box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
      border: none;
      padding: 18px 0;
      flex-direction: column;
    }
    .link {
      margin: 24px 0 0 0;
      padding: 12px;
      min-width: 212px;
    }
    .range, .calc {
      max-width: 100%;
    }
    .text, .result {
      display: none;
    }
    .mobile {
      display: flex !important;
      margin-bottom: 4px;
      padding: 0 15px;
      span {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.07em;
      }
    }
  }
</style>

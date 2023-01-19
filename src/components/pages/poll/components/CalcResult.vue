<template>
  <div class="result">
    <div class="helper">
      <div class="wrapper d-flex align-items-center">
        <div class="item d-flex align-items-center">
          <div class="icon d-flex align-items-center justify-content-center">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/icons/calc/card.svg" alt="card icon">
            </div>
          </div>
          <div class="content">
            <span>Сумма:</span>
            <input :class="{active: activeInput}"
                   type="text"
                   v-model.trim="calcSum"
                   ref="sum"
                   autocomplete="off"
                   autocapitalize="off"
                   autocorrect="off"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   @keyup="filterNumInput"
                   @input="initInput('sum')"
            >
            <span class="sign">000 ₽</span>
          </div>
        </div>
        <div class="item d-flex align-items-center">
          <div class="icon d-flex align-items-center justify-content-center">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/icons/calc/calendar.svg" alt="calendar icon">
            </div>
          </div>
          <div class="content">
            <span>Срок:</span>
            <input :class="{active: activeInput}"
                   type="text"
                   v-model.trim="calcDays"
                   ref="days"
                   autocomplete="off"
                   autocapitalize="off"
                   autocorrect="off"
                   pattern="[0-9]*"
                   inputmode="numeric"
                   @keyup="filterNumInput"
                   @input="initInput('days')"
            >
            {{ setLoanDaysString(calcType, calcDays) }}
          </div>
        </div>
        <div class="item d-flex align-items-center">
          <div class="icon d-flex align-items-center justify-content-center">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/icons/calc/flag.svg" alt="flag icon">
            </div>
          </div>
          <div class="content">
            <span>До:</span>
            <input type="text" v-model.trim="calcDate" readonly ref="date">
          </div>
        </div>
      </div>
      <button class="button" @click="unlockInputs" v-if="!activeInput">Изменить</button>
      <button class="button" @click="saveResult" v-else>Сохранить</button>
    </div>
  </div>
</template>

<script>
  import price from '@/helpers/string/price';
  import term from '@/helpers/string/term';
  import date from '@/helpers/string/date';
  import inputCheckMixin from '@/mixins/inputCheck';
  import {mapGetters} from "vuex";

  export default {
    mixins: [inputCheckMixin],
    data() {
      return {
        calcSum: null,
        calcDays: null,
        initCalcDays: null,
        calcType: null,
        calcDate: null,
        activeInput: false,
      };
    },
    computed: {
      ...mapGetters({
        calc: 'app/calculator',
      }),
      storeCount() {
        return this.calc.term.count;
      },
      storeType() {
        return this.calc.term.type;
      },
      storeSum() {
        return this.calc.amount;
      },
      loanDaysString() {
        if (this.storeType === 'days') {
          return term(this.storeCount);
        }
        return 'недель';
      },
    },
    methods: {
      setLoanDaysString(type, count) {
        if (type === 'days') {
          return term(count);
        }
        return 'недель';
      },
      initInput(type) {
        if(type === 'sum') this.calcSum = this.calcSum.replace(/[A-Za-zА-Яа-яЁё]/g, '');
        if(type === 'days') this.calcDays = this.calcDays.replace(/[A-Za-zА-Яа-яЁё]/g, '');
      },
      filterNumInput(e) {
        this.setInputWidth(e.target);
      },
      setInputWidth(input) {
        let length = null;
        if(input.value.length !== 0) {
          length = input.value.length;
        }
        if(input.value.length === 1 || input.value.length === 0) {
          length = 2;
        }
        input.setAttribute('size', length - 1);
      },
      unlockInputs() {
        this.activeInput = true;
        this.$refs.sum.focus();
      },
      calcNewDays() {
        if(+this.calcDays < 32) {
          this.calcType = 'days';
        } else {
          let count = 0;

          const week = +this.calcDays - 32;

          if (week !== 0) {
            count = Math.floor(week / 8 * 2);
          }
          this.calcDays = +('1' + count);
          this.calcType = 'weeks';
        }
        this.calcDate = date(+this.calcDays, this.calcType);
      },
      saveResult() {
        this.activeInput = false;
        this.setInputWidth(this.$refs.sum);
        this.setInputWidth(this.$refs.days);


        if(+this.calcSum === 0) this.calcSum = price(this.storeSum).split(' ')[0];

        if(+this.calcDays === 0) this.calcDays = this.storeCount;

        //new days
        if(+this.calcDays !== +this.initCalcDays) this.calcNewDays();

        //new store days
        this.$store.dispatch('app/setCalculator', { amount: +this.calcSum * 1000, term: {
           count: +this.calcDays,
           type: this.calcType,
          } });
      }
    },
    mounted() {
      this.setInputWidth(this.$refs.sum);
      this.setInputWidth(this.$refs.days);
    },
    created() {
      this.calcSum = price(this.storeSum).split(' ')[0];
      this.calcDays = this.initCalcDays = this.storeCount;
      this.calcType = this.storeType;
      this.calcDate = date(this.storeCount, this.storeType);
    }
  }
</script>

<style lang="scss" scoped>
  .result {
    margin-bottom: 48px;
  }
  .item + .item {
    margin-left: 44px;
  }
  .icon {
    background: #EFF3F9;
    border-radius: 10px;
    width: 62px;
    height: 62px;
    margin-right: 24px;
    .img {
      max-width: 32px;
      height: 32px;
    }
  }
  input,button {
    outline: none;
  }
  .content {
    span {
      display: block;
    }
    input {
      border: none;
      background: transparent;
      width: initial;
      padding: 0 0 2px 0;
      max-width: 90px;
      border-bottom: 1px solid transparent;
      pointer-events: none;
      transition: border-color 0.3s linear;
      &.active {
        pointer-events: initial;
        border-color: $primary-black;
      }
    }
    .sign {
      display: inline;
      padding-left: 4px;
    }
  }
  .content span, .content input, .button {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.07em;
  }
  .button {
    margin-top: 12px;
    background: none;
    border-bottom: 1px solid $primary-black;
    transition: border-color 0.3s linear;
    &:hover {
      border-color: transparent;
    }
  }
  @media(max-width: $mobile-size) {
    .result {
      padding: 0 24px;
      margin-bottom: 24px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .helper {
      width: 100%;
      max-width: 552px;
    }
    .wrapper {
      justify-content: space-between;
    }
    .item {
      flex-direction: column;
      width: 80px;
    }
    .item + .item {
      margin-left: 0px;
    }
    .icon {
      margin: 0 0 5px 0;
    }
    .content {
      span, input {
        text-align: center;
        font-size: 13px;
        line-height: 18px;
      }
      input {
        max-width: 80px;
      }
    }
    .button {
      margin-top: 18px;
      font-size: 12px;
      line-height: 18px;
    }
  }
  @media(max-width: 374px) {
    .item + .item {
      margin-left: 22px;
    }
  }
</style>
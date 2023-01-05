<template>
  <div class="result">
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
                 @keyup="filterNumInput"
          >
          <span class="sign">₽</span>
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
                 @keyup="filterNumInput"
          >
          {{ loanDaysString }}
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
</template>

<script>
  import Cookies from 'js-cookie';
  import price from '@/helpers/string/price';
  import term from '@/helpers/string/term';
  import date from '@/helpers/string/date';

  export default {
    data() {
      return {
        calcSum: price(+Cookies.get('sum')),
        calcDays: +JSON.parse(Cookies.get('term')).count,
        calcDate: date(+JSON.parse(Cookies.get('term')).count, JSON.parse(Cookies.get('term')).type),
        activeInput: false,
      };
    },
    computed: {
      loanDaysString() {
        if (JSON.parse(Cookies.get('term')).type === 'days') {
          return term(JSON.parse(Cookies.get('term')).count);
        }
        return 'недель';
      },
    },
    methods: {
      filterNumInput(e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
          e.preventDefault();
        }
        this.setInputWidth(e.target);
      },
      setInputWidth(input, num) {
        if(num > 0 && input.value.length > 1) {
          num = 1;
        } else {
          num = 0;
        }
        input.setAttribute('size', input.value.length - num);
      },
      unlockInputs() {
        this.activeInput = true;
        this.$refs.sum.focus();
      },
      saveResult() {
        this.activeInput = false;
        console.log(this.calcSum)

        // this.$store.dispatch('app/setCalculator', { amount: +this.calcSum.split(' ').join(''), term: {
        //
        //   } });
      }
    },
    mounted() {
      this.setInputWidth(this.$refs.sum, 0);
      this.setInputWidth(this.$refs.days, 1);
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
</style>
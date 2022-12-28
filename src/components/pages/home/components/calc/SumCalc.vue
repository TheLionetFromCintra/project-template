<template>
  <div class="sum">
    <vue-slider
        v-model="loanSum"
        :dotSize="12"
        :min="config.min"
        :max="config.max"
        :interval="config.step"
        @change="changeAmount"
    >
    </vue-slider>
    <div class="range d-flex align-items-center justify-content-between" v-if="showRangeInfo">
        <span
            v-for="item in showRangeInfo"
            :key="item"
        >
            {{ item === 1 ? minPrice : setPriceRange(item) }} ₽
        </span>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

import { defineAsyncComponent } from "vue";
import price from '@/helpers/string/price';
import { mapGetters } from 'vuex';
import 'vue-slider-component/theme/antd.css';

const VueSlider = defineAsyncComponent(() => import('vue-slider-component'));


  export default {
   components: {
     VueSlider
   },
   props: {
     modelValue: {
       type: Number
     },
     showRangeInfo: {
       type: Number,
       default: 0
     }
   },
   emits: ['update:modelValue'],
   data() {
     return {
       loanSum: null,
       config: {
         min: 1000,
         max: 100000,
         step: 1000
       }
     };
   },
   created() {
      this.loanSum = +Cookies.get('sum') || this.calculator.amount;
    },
   computed: {
       ...mapGetters({
         calculator: 'app/calculator',
       }),
      minPrice() {
        return price(this.config.min);
      },
   },
   methods: {
     setPriceRange(num) {
       return price(((this.config.max / (this.showRangeInfo - 1)) * (num - 1) || 0));
     },
     changeAmount(e) {
       this.$emit('update:modelValue', e);
       this.$store.dispatch('app/setCalculator', { amount: e });
     }
   },
  }
</script>

<style lang="scss" scoped>
  .sum {
    width: 100%;
  }
  .range {
    margin-top: 6px;
    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.07em;
      color: #B4B4B4;
      display: inline-block;
    }
  }
  @media(max-width: $mobile_size) {
    .range {
      display: none !important;
    }
  }
</style>
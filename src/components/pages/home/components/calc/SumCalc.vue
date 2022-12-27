<template>
  <div class="sum">
    <vue-slider
        v-model="loanSum"
        :dotSize="12"
        :min="config.min"
        :max="config.max"
        :interval="config.step"
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
import price from '@/helpers/string/price';
import VueSlider from 'vue-slider-component';
// import { mapGetters } from 'vuex';

import 'vue-slider-component/theme/antd.css'

  export default {
    components: {
      VueSlider
    },
    props: {
      model: {
        type: Number
      },
      showRangeInfo: {
        type: Number,
        default: 0
      }
    },
   data() {
     return {
       loanSum: 1000,
       config: {
         min: 1000,
         max: 100000,
         step: 1000
       }
     };
   },
   computed: {
       // ...mapGetters({
       //   calculator: 'application/calculator'
       // }),
      minPrice() {
        return price(this.config.min);
      },
     // loanSum: {
     //   set(amount) {
     //     this.$emit('change', amount)
     //     this.$store.commit('application/updateCalculator', { amount })
     //   },
     //   get() {
     //     return this.model
     //   }
     // }
   },
   methods: {
     setPriceRange(num) {
       return price(((this.config.max / (this.showRangeInfo - 1)) * (num - 1) || 0));
     }
   },
  // created() {
  //   this.loanSum = this.calculator.amount
  // },
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
</style>
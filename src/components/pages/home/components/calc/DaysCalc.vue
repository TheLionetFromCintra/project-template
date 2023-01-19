<template>
  <div class="days">
    <vue-slider
        v-model="filteredLoanDays"
        :dot-size="12"
        :min="1"
        :max="65"
        :interval="1"
    >
    </vue-slider>
    <div class="range d-flex align-items-center justify-content-between">
      <span>
        1 день
      </span>
      <span>
        10 недель
      </span>
      <span>
        18 недель
      </span>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  import { mapGetters } from 'vuex';

  const VueSlider = defineAsyncComponent(() => import('vue-slider-component'));

  export default {
    components: {
      VueSlider,
    },
    props: {
      modelValue: {
        type: Object
      },
    },
    emits: ['update:modelValue'],
    data() {
      return {
        loanDays: null
      };
    },
    computed: {
    ...mapGetters({
        calculator: 'app/calculator',
      }),
      trueCountValue() {
        return this.calculator.term.count ? +this.calculator.term.count : this.modelValue.count;
      },
      trueTypeValue() {
        return this.calculator.term.type ? this.calculator.term.type : this.modelValue.type;
      },
      filteredLoanDays: {
        get() {
          if (this.trueTypeValue === 'days') {
            return this.trueCountValue;
          } else {
            return 32 + (String(this.trueCountValue).substr(-1) * 4);
          }
        },
        set(v) {
          if (v <= 31) {
            const term = {
              type: 'days',
              count: v
            };
            this.$emit('update:modelValue', term);
            this.$store.dispatch('app/setCalculator', { term });
            return;
          }

          let count = 0;

          const week = v - 32;

          if (week !== 0) {
            count = Math.floor(week / 8 * 2);
          }

          const term = {
            type: 'weeks',
            count: +('1' + count)
          };

          this.$emit('update:modelValue', term);
          this.$store.dispatch('app/setCalculator', { term });
        }
      }
    },
    created() {
      this.$store.dispatch('app/setCalculator', { term: this.modelValue });
    }
  }
</script>

<style lang="scss" scoped>
  .days {
    margin-top: 28px;
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
    .days {
      margin-top: 0;
    }
  }
</style>
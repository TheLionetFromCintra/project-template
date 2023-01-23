<template>
  <div class="box">
    <label>
      <span v-if="label">{{ label }}</span>
      <div class="wrapper" :class="{error: errorMessage}">
        <input
            :ref="refName"
            :class="className"
            :type="type"
            :placeholder="placeholder"
            :maxlength="length"
            :value="modelValue"
            @input="initInput($event)"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            :pattern="`${inputType === 'letter' ? '[0-9]*' : ''}`"
            :inputmode="`${inputType === 'letter' ? 'numeric' : ''}`"
            @focus="focusEvent"
        >
      </div>
    </label>
    <small class="err-message" v-if="activeError && errorMessage">{{ errorMessage }}</small>
  </div>
</template>

<script>
  import './style/input.scss';
  import inputCheckMixin from '@/mixins/inputCheck';
  import luhn from '@/helpers/card/luhn';

  export default {
    mixins: [inputCheckMixin],
    emits: ['update:modelValue', 'focus'],
    props: {
      modelValue: {
        type: [String, Number],
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        required: false,
      },
      length: {
        type: String,
        required: false,
        default: null,
      },
      inputType: {
        type: String,
        required: false,
      },
      mask: {
        type: String,
        required: false,
      },
      dateType: {
        type: String,
        required: false,
      },
      placeholder: {
        type: String,
        required: false,
      },
      refName: {
        type: String,
        required: false,
      },
      errorMessage: {
        type: String,
        required: false,
      },
      focusNext: {
        type: String,
        required: false,
      },
      className: {
        type: String,
        required: false,
      },
      activeError: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      initInput(e) {
        this.forbidType(e, this.inputType);
        //set masks in general
        if(this.mask) {
          e.target.value = this.setMask(e.target.value, this.mask);
        }
        //set masks on dates
        if(this.dateType) {
          e.target.value = this.checkDate(e.target.value);
        }
        //autofocus and check card number
        if(+e.target.value.length === +this.length && this.focusNext) {
          if(this.className === 'cardNumber' && luhn(e.target.value)) {
            document.querySelector(`.${this.focusNext}`).focus();
          } else {
            // error
          }
          if(this.className !== 'cardNumber') {
            document.querySelector(`.${this.focusNext}`).focus();
          }
        }
        //check card date
        if(this.className === 'cardDate') {
          if (!e.target.value.length) {
            return;
          }

          const [month] = e.target.value.split('/');

          if (month > 12 || (month.length === 2 && +month === 0)) {
            e.target.value = '12';
          }
        }
        this.$emit('update:modelValue', e.target.value);
      },
      focusEvent() {
        this.$emit('focus');
      }
    },
    mounted() {
      if(this.className === 'cardNumber') {
        document.querySelector(`.${this.className}`).focus();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box input {
    padding: 12px 16px;
  }
  .inputs-wrapper, .passport {
    .box {
      span {
        min-height: 38px;
      }
    }
  }
  .inputs-wrapper, .personal {
    .box {
      max-width: 160px;
      label {
        max-width: 140px;
      }
    }
  }
  .passport {
    .box {
      max-width: 50%;
      label {
        max-width: 140px;
      }
    }
    .card__back {
      .box span {
        color: $primary-white;
      }
    }
  }
  .verif-form {
    .box {
      .wrapper {
        display: flex;
        justify-content: center;
      }
      input {
        padding: 12px;
        text-align: center;
        max-width: 232px;
      }
    }
  }
  @media(max-width: $mobile_size) {
    .inputs-wrapper, .personal {
      .box {
        max-width: 135px;
        label {
          min-width: 120px;
          max-width: 130px;
        }
        span {
          min-height: initial;
        }
      }
    }
    .inputs-wrapper {
      fieldset:last-child {
        .box {
          span {
            min-height: 34px;
          }
        }
      }
    }
    .passport {
      .box {
        label {
          max-width: 100%;
        }
        span {
          min-height: initial;
        }
      }
    }
    .card-form {
      .box {
        input, span {
          font-size: 12px;
          line-height: 15px;
          font-weight: 500;
        }
        span {
          margin-bottom: 6px;
          min-height: initial;
        }
        input {
          max-height: 32px;
          padding: 10px;
          border: 1px solid rgba($primary-black, 0.5);
          &:focus {
            border: 1px solid rgba($primary-black, 1);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper">
        <input
            :class="className"
            :type="type"
            :placeholder="placeholder"
            :maxlength="length"
            @input="initInput($event)"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            :pattern="`${inputType === 'letter' ? '[0-9]*' : ''}`"
            :inputmode="`${inputType === 'letter' ? 'numeric' : ''}`"
        >
      </div>
      <small class="err-message" v-if="errorMessage && false">{{ errorMessage }}</small>
    </label>
  </div>
</template>

<script>
  import './style/input.scss';
  import inputCheckMixin from '@/mixins/inputCheck';
  import luhn from '@/helpers/card/luhn';

  export default {
    mixins: [inputCheckMixin],
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        required: true,
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
          if (!e.target.value.length)
            return;

          const [month] = e.target.value.split('/');

          if (month > 12 || (month.length === 2 && +month === 0)) {
            e.target.value = '12';
          }
        }

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
  .personal .box input {
    max-width: 130px;
  }
  .card-form {
    .box {
      input {
        padding: 22px;
        background-color: #EFF3F9;
        border: 1px solid rgba(#21348E, 0.5);
        box-shadow: none;
        text-transform: uppercase;
        transition: border-color 0.3s linear;
        &::placeholder {
          font-weight: 600;
        }
        &:focus {
          border: 1px solid rgba(#21348E, 1);
        }
      }
    }
    .card__back {
      .box span {
        color: $primary-white;
      }
    }
  }
</style>
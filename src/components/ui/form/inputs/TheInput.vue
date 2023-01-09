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
        if(this.mask) {
          e.target.value = this.setMask(e.target.value, this.mask);
        }
        if(this.dateType && this.mask) {
          e.target.value = this.checkDate(this.setMask(e.target.value, this.mask));
        }
        if(+e.target.value.length === +this.length && this.focusNext) {
          document.querySelector(`.${this.focusNext}`).focus();
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
    padding: 12px 18px;
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
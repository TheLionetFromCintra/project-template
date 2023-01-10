<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper">
        <input
            type="text"
            :placeholder="placeholder"
            @input="initPhoneInput"
            :maxlength="maxlength"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            pattern="[0-9]*"
            inputmode="numeric"
        >
        <div class="success d-flex align-items-center justify-content-center">
          <div class="icon img-wrapper d-flex align-items-center justify-content-center">
            <img src="@/assets/images/icons/form/success.svg" alt="success icon">
          </div>
        </div>
      </div>
      <small class="err-message" v-if="errorMessage && false">{{ errorMessage }}</small>
    </label>
  </div>
</template>

<script>
import './style/input.scss';
import inputCheckMixin from '@/mixins/inputCheck';

const SEVEN = '+# ### ### ## ##';
const EIGHT = '# ### ### ## ##';

export default {
  mixins: [inputCheckMixin],
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      maxlength: 16,
      phoneMask: '+# ### ### ## ##',
    };
  },
  methods: {
    initPhoneInput(e) {
      this.forbidType(e, 'letter');
      this.setPhoneMask(e);
    },
    setPhoneMask(e) {
      switch (e.target.value[0]) {
        case undefined:
        case '7': {
          this.phoneMask = SEVEN;
          this.maxlength = 16;
          break;
        }
        case '8': {
          this.phoneMask = EIGHT;
          this.maxlength = 15;
          break;
        }
        case '+': {
          if (e.target.value[1] === undefined || e.target.value[1] === '7') {
            break;
          } else if (e.target.value[1] === '8') {
            this.phoneMask = EIGHT;
            this.maxlength = 15;
            break;
          } else
            e.target.value = '+7' + e.target.value.substr(1);
            break;
        }
        default: {
          e.target.value = '+7' + e.target.value.substr(1);
          this.phoneMask = SEVEN;
          this.maxlength = 16;
          return;
        }
      }

     e.target.value = this.setMask(e.target.value, this.phoneMask);
    }
  }
}
</script>

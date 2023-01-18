<template>
  <div class="box">
    <label :class="filledClass">
      <span v-if="label">{{ label }}</span>
      <div class="wrapper" :class="{error: errorMessage}">
        <input
            type="text"
            :placeholder="placeholder"
            @input="initPhoneInput($event)"
            :maxlength="maxlength"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            pattern="[0-9]*"
            inputmode="numeric"
            :value="modelValue"
            @focus="focusEvent"
        >
        <div class="success d-flex align-items-center justify-content-center" :class="{active: success}">
          <div class="icon img-wrapper d-flex align-items-center justify-content-center">
            <img src="@/assets/images/icons/form/success.svg" alt="success icon">
          </div>
        </div>
      </div>
      <small class="err-message" v-if="errorMessage">{{ errorMessage }}</small>
    </label>
  </div>
</template>

<script>
import './style/input.scss';
import inputCheckMixin from '@/mixins/inputCheck';
import phoneMaskMixin from '@/mixins/phoneMask';


export default {
  mixins: [inputCheckMixin, phoneMaskMixin],
  emits: ['update:modelValue', 'focus'],
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
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
    filledClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      success: false,
    };
  },
  methods: {
    initPhoneInput(e) {
      this.forbidType(e, 'letter');
      this.setPhoneMask(e);
      this.$emit('update:modelValue', e.target.value);

      if(this.checkPhone(e.target.value) && e.target.value !== '') {
        this.success = true;
      } else {
        this.success = false;
      }
    },
    focusEvent() {
      this.$emit('focus');
    }
  }
}
</script>

<style lang="scss" scoped>
.box input {
  padding-left: 16px;
}
.filled {
  opacity: 0.7;
  pointer-events: none;
}
</style>
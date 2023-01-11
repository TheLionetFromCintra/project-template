<template>
  <div class="box">
    <label>
      <span v-if="label">{{ label }}</span>
      <div class="wrapper">
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
import phoneMaskMixin from '@/mixins/phoneMask';


export default {
  mixins: [inputCheckMixin, phoneMaskMixin],
  props: {
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
  },
  methods: {
    initPhoneInput(e) {
      this.forbidType(e, 'letter');
      this.setPhoneMask(e);
    },
  }
}
</script>

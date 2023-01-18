<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper" :class="{error: errorMessage}">
        <input type="email" :placeholder="placeholder" :value="modelValue" @focus="focusEvent" @input="initInput($event)">
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
import inputCheck from "@/mixins/inputCheck";

export default {
  mixins: [inputCheck],
  emits: ['update:modelValue', 'focus'],
  props: {
    modelValue: {
      type: [String, Number],
    },
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
       success: false,
    };
  },
  methods: {
    initInput(e) {
      this.$emit('update:modelValue', e.target.value);
      if(this.checkEmail(e.target.value) && e.target.value !== '') {
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
</style>

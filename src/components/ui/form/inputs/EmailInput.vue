<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper">
        <input type="email" :placeholder="placeholder" :value="modelValue" @input="initInput($event)">
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

export default {
  emits: ['update:modelValue'],
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
  methods: {
    initInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.box input {
  padding-left: 16px;
}
</style>

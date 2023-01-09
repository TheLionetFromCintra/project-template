<template>
  <label class="radio-buttons">
    <span class="label">{{ label }}</span>
    <div
        class="wrapper d-flex align-items-center justify-content-between"
    >
      <radio-button
          v-for="option in options"
          :option="option"
          :key="option.key"
          :checked="option.key === '0' ? true : false"
      >
      </radio-button>
    </div>
  </label>
</template>

<script>
import RadioButton from './RadioButton.vue';
export default {
  components: {
    RadioButton,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
};
</script>

<style scoped lang="scss">
  .radio-buttons {
    margin-left: 24px;
  }
  .label {
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
    margin-bottom: 12px;
  }
  .wrapper {
    padding: 5px 6px;
    background: $primary-white;
    box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 12px 30px rgba(180, 185, 204, 0.26), 0px 0px 0px rgba(135, 135, 135, 0.42);
    border-radius: 10px;
  }
</style>
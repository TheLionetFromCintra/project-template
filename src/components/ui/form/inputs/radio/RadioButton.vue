<template>
  <label class="radio-wrapper">
    <input
        type="radio"
        name="gender"
        class="radio"
        :checked="checked"
        :value="option.key"
        @change="$emit('update:modelValue', $event.target.value)"
    />
    <span>{{ option.value }}</span>
  </label>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped lang="scss">
  .radio-wrapper span {
    display: block;
    font-weight: 500;
    position: relative;
    font-size: 16px;
    line-height: 19px;
    padding: 8px 22px;
    border-radius: 10px;
    color: $primary-grey;
    cursor: pointer;
    transition: background-color 0.3s linear, color 0.3s linear;
  }
  .radio-wrapper input:checked ~ span {
    background-color: $primary-blue;
    color: $primary-white;
    cursor: default;
  }
  .radio {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
</style>
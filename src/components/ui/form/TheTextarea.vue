<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper">
        <textarea
            :class="className"
            :placeholder="placeholder"
            @input="initInput($event)"
        ></textarea>
      </div>
      <small class="err-message" v-if="errorMessage && false">{{ errorMessage }}</small>
    </label>
  </div>
</template>

<script>
import './inputs/style/input.scss';

export default {
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
    className: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
  .box textarea {
    padding: 12px 16px;
  }
  @media(max-width: $mobile-size) {
    textarea {
      max-height: 100%;
      min-height: 84px;
    }
  }
</style>
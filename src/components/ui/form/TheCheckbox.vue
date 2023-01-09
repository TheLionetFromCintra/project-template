<template>
  <div class="checkbox">
    <label class="d-flex align-items-start justify-content-center">
      <input type="checkbox">
      <div class="description" v-html="desc">
      </div>
    </label>
    <small class="err-message" v-if="errorMessage && false">{{ errorMessage }}</small>
  </div>
</template>

<script>
  export default {
    props: {
      desc: {
        type: String,
        required: false,
      },
      errorMessage: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style lang="scss" scoped>
  label {
    cursor: pointer;
  }
  input {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-right: 14px;
    appearance: none;
    cursor: pointer;
    background: $primary-white;
    box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 12px 30px rgba(180, 185, 204, 0.26), 0px 0px 0px rgba(135, 135, 135, 0.42);
    border-radius: 10px;
    border: 1px solid transparent;
    transition: border-color 0.3s linear;
    &:checked {
      background-image: url('@/assets/images/icons/form/checkbox.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }
    &.error {
      border-color: #EB5757;
    }
  }
  .description {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.07em;
  }
  .err-message {
    padding-left: 46px;
  }
</style>
<template>
  <div class="poll-title">
    {{ `${currentStep} из ${maxStep}` }} <span>{{ title }}</span>
  </div>
  <div class="poll-step">
    <div class="progress-bar">
      <div class="bar" :style="`width: ${progressBar}%`"></div>
    </div>
    <div class="wrapper d-flex align-items-center justify-content-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      currentStep: {
        type: Number,
        required: true,
      },
      maxStep: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        initProgressBar: 10,
        progressBarStep: 30,
      };
    },
    computed: {
      progressBar() {
        return this.currentStep * this.progressBarStep + this.initProgressBar;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .poll-step {
    margin-top: 12px;
    width: 100%;
    position: relative;
    background: #EFF3F9;
    border-radius: 10px;
    min-height: 354px;
    overflow: hidden;
    padding: 42px 0 48px 0;
  }
  .progress-bar {
    position: absolute;
    top: 0;
    height: 3px;
    background: #EBEBEB;
    width: 100%;
    left: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .bar {
    height: 100%;
    background: $primary-blue;
  }
  .poll-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
    span {
      display: inline-block;
      padding-left: 14px;
    }
  }
  @media(max-width: $mobile_size) {
    .poll-step {
      margin-top: 14px;
      //margin: 0 -24px;
      min-height: 486px;
    }
  }
</style>
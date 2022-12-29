<template>
  <div class="bg">
    <div class="sub-container">
      <sub-header></sub-header>
      <h1 class="subtitle subtitle--poll">Оформление займа</h1>
      <calc-result></calc-result>
      <poll-step-wrapper :current-step="currentStep" :max-step="maxStep">

      </poll-step-wrapper>
    </div>
  </div>
</template>

<script>
import SubHeader from "@/components/layouts/SubHeader";
import CalcResult from "@/components/pages/poll/components/CalcResult";
import PollStepWrapper from "@/components/pages/poll/layouts/PollStepWrapper";


export default {
  components: {PollStepWrapper, CalcResult, SubHeader},
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    maxStep: {
      type: Number,
      required: true,
    }
  }
}
</script>


<style lang="scss" scoped>
  .bg {
    padding-bottom: 138px;
    background: #fff url('@/assets/images/background/poll/poll-bg.svg') repeat 90% 900px;
  }
</style>
<template>
  <poll-step  :show-calc="false" :show-title="false" width-class="final">
    <h1 class="subtitle subtitle--poll">Авторизация</h1>
    <div class="content d-flex justify-content-center">
        <router-view></router-view>
    </div>
  </poll-step>
</template>

<script>
import PollStep from "@/components/pages/poll/layouts/PollStep";

export default {
  components: {PollStep},
}
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 24px;
    width: 100%;
    background: #EFF3F9;
    border-radius: 10px;
    padding: 42px 0;
  }
  @media(max-width: $mobile_size) {
    .subtitle {
      display: block;
      padding: 0 24px;
      margin-bottom: 24px;
    }
    .content {
      padding: 42px 15px;
    }
  }
</style>
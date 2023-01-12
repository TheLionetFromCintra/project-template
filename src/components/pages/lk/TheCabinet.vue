<template>
  <div class="cabinet d-flex">
    <cabinet-side-bar></cabinet-side-bar>
    <div class="wrapper">
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="cabinet-footer">
        <the-footer></the-footer>
      </div>
    </div>
  </div>
</template>

<script>
import CabinetSideBar from "@/components/pages/lk/components/CabinetSideBar";
import TheFooter from "@/components/layouts/TheFooter";
export default {
  components: {TheFooter, CabinetSideBar}
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background: #fff url('@/assets/images/background/poll/poll-bg.svg') repeat 90% 900px;
  }
  .content {
    padding: 115px 95px 0 95px;
  }
</style>
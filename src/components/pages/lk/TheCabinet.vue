<template>
  <div class="cabinet d-flex">
    <cabinet-side-bar :is-desktop="isDesktop"></cabinet-side-bar>
    <mob-menu :is-visible="isVisible" :close-menu="closeMenu"></mob-menu>
    <div class="wrapper">
      <div class="content">
        <sub-header class="desktop-hidden" :is-visible="isVisible" :toggle-menu="toggleMenu"></sub-header>
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
import SubHeader from "@/components/layouts/SubHeader";

import mobileMixin from "@/mixins/mobile";
import MobMenu from "@/components/layouts/MobMenu";

export default {
  components: {MobMenu, TheFooter, CabinetSideBar, SubHeader},
  mixins: [mobileMixin],
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background: #fff url('@/assets/images/background/poll/poll-bg.svg') repeat 90% 900px;
  }
  .content {
    padding: 115px 95px 0 95px;
  }
  @media(max-width: $tablet_size) {
    .content {
      padding: 0 40px;
    }
  }
  @media(max-width: $mobile_size) {
    .wrapper {
      background: #fafafa;
    }
    .content {
      padding: 0 24px;
    }
  }
</style>
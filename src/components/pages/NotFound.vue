<template>
  <div class="bg--main">
    <mob-menu :is-visible="isVisible" :close-menu="closeMenu"></mob-menu>
    <the-header :is-visible="isVisible" :toggle-menu="toggleMenu"></the-header>
    <main-block title="Ошибка 404" desc="Страница не найдена"></main-block>
  </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import MainBlock from "@/components/pages/home/layouts/MainBlock";
import MobMenu from "@/components/layouts/MobMenu";

import mobileMixin from "@/mixins/mobile";

export default {
  components: {
    TheHeader,
    MainBlock,
    MobMenu
  },
  mixins: [mobileMixin],
};
</script>

<style lang="scss" scoped>
.bg--main {
  overflow: hidden;
}
.bg--main {
  background: linear-gradient(107.59deg, #F9F9FB 3.14%, #F3F4F6 51.42%, #EEF0F2 58.77%, #E0E7EA 96.01%);
  position: relative;
  z-index: 10;
  &::before {
    content: url("@/assets/images/background/main-bg.png");
    right: 0;
    bottom: -6px;
    position: absolute;
    z-index: -1;
  }
}
@media(max-width: $mobile_size) {
  .bg--main {
    &::before {
      content: url("@/assets/images/background/main-bg-mob.png");
      z-index: -1;
      right: -5px;
    }
  }
}
</style>
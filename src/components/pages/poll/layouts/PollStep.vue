<template>
  <div class="bg poll-main" :class="widthClass">
    <div class="sub-container" :class="widthClass">
      <mob-menu :is-visible="isVisible" :close-menu="closeMenu"></mob-menu>
      <sub-header :is-visible="isVisible" :toggle-menu="toggleMenu" :class="paddingClass"></sub-header>
      <h1 class="subtitle subtitle--poll" v-if="showTitle">Оформление займа</h1>
      <calc-result v-if="showCalc"></calc-result>
      <slot></slot>
    </div>
  </div>
  <the-footer class="m-0"></the-footer>
</template>

<script>
  import TheFooter from "@/components/layouts/TheFooter";
  import SubHeader from "@/components/layouts/SubHeader";
  import CalcResult from "@/components/pages/poll/components/CalcResult";
  import mobileMixin from "@/mixins/mobile";
  import MobMenu from "@/components/layouts/MobMenu";

  export default {
    components: {MobMenu,TheFooter, CalcResult, SubHeader},
    mixins: [mobileMixin],
    props: {
      paddingClass: {
        type: String,
        default: '',
      },
      widthClass: {
        type: String,
        default: '',
      },
      showCalc: {
        type: Boolean,
        default: true,
      },
      showTitle: {
        type: Boolean,
        default: true,
      }
    }
  }
</script>

<style scoped lang="scss">
  .sub-container.final {
    max-width: 1084px;
  }
  @media(max-width: $mobile-size) {
    .poll-main.final {
      background: #fafafa;
    }
  }
</style>
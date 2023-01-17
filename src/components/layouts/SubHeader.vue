<template>
  <header class="header">
    <div class="wrapper d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
        <img src="@/assets/images/logo.svg" alt="logo">
      </router-link>
      <div class="burger" :class="{active: isVisible}" @click="toggleMenu">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    toggleMenu: {
      type: Function,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    padding-top: 45px;
    margin-bottom: 48px;
    position: relative;
    z-index: 1001;
  }
  .logo {
    max-width: 76px;
    height: 46px;
  }
  .desktop-hidden {
    display: none;
  }
  @media(max-width: $tablet_size) {
    .desktop-hidden {
      display: block;
    }
  }
  @media(max-width: $mobile_size) {
    .header {
      padding: 24px 24px 0 24px;
      margin-bottom: 36px;
    }
    .logo {
      max-width: 50px;
      height: 32px;
    }
    .content .header {
      padding: 24px 0 0 0;
    }
  }
</style>
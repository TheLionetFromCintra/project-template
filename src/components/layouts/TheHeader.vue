<template>
  <header class="header">
      <div class="container">
        <div class="wrapper d-flex align-items-center justify-content-between">
          <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
            <img src="@/assets/images/logo.svg" alt="logo">
          </router-link>
          <div class="phone">
            <a class="link-hover" href="tel:${84991124367"><span>8 (499) 112 43 67</span></a>
          </div>
          <base-button link mode="black" to="/primary" class="button">
            Получить займ
          </base-button>
          <div class="burger" :class="{active: isVisible}" @click="toggleMenu">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
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
  padding-top: 50px;
  position: relative;
}
.wrapper {
  margin: 0 auto;
}
.logo {
  max-width: 50px;
  height: 32px;
}
.phone {
  margin-left: 117px;
  text-align: center;
  a {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.07em;
    color: $primary-black;
  }
}
.button {
  min-width: 167px;
}
@media(max-width: $tablet_size) {
  .header {
    z-index: 1001;
  }
  .phone, .button {
    display: none;
  }
}
@media(max-width: $mobile_size) {
  .header {
    padding-top: 36px;
  }
}
</style>

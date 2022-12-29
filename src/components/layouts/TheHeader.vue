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
          <div class="burger" :class="{active: isOpen}" @click="toggleMenu">
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
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
  padding-top: 50px;
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
.burger {
  display: none;
}
@media(max-width: $tablet_size) {
  .wrapper {
    max-width: 88%;
  }
  .burger {
    display: block;
    .line {
      display: block;
      height: 3px;
      width: 28px;
      border-radius: 15px;
      background-color: $primary-black;
    }
    .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }
    .line + .line {
      margin-top: 6.5px;
    }
    &.active {
      .line1 {
        transform: rotate(45deg);
      }
      .line2 {
        transform: scaleY(0);
      }
      .line3 {
        transform: rotate(-45deg);
      }
    }
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

<template>
  <header class="header">
    <div class="wrapper d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
        <img src="@/assets/images/logo.svg" alt="logo">
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 45px;
  margin-bottom: 24px;
}
.logo {
  max-width: 76px;
  height: 46px;
}
.burger {
  display: none;
}
@media(max-width: $tablet_size) {
  //.wrapper {
  //  max-width: 88%;
  //}
  //.burger {
  //  display: block;
  //  .line {
  //    display: block;
  //    height: 3px;
  //    width: 28px;
  //    border-radius: 15px;
  //    background-color: $primary-black;
  //  }
  //  .line1 {
  //    transform-origin: 0% 0%;
  //    transition: transform 0.4s ease-in-out;
  //  }
  //
  //  .line2 {
  //    transition: transform 0.2s ease-in-out;
  //  }
  //
  //  .line3 {
  //    transform-origin: 0% 100%;
  //    transition: transform 0.4s ease-in-out;
  //  }
  //  .line + .line {
  //    margin-top: 6.5px;
  //  }
  //  &.active {
  //    .line1 {
  //      transform: rotate(45deg);
  //    }
  //    .line2 {
  //      transform: scaleY(0);
  //    }
  //    .line3 {
  //      transform: rotate(-45deg);
  //    }
  //  }
  //}
  //.phone, .button {
  //  display: none;
  //}
}
@media(max-width: $mobile_size) {
  //.header {
  //  padding-top: 36px;
  //}
}
</style>
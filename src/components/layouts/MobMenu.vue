<template>
  <transition name="sidebar">
    <div class="sidebar" v-if="isVisible">
      <nav class="menu">
        <ul>
          <li>
            <router-link class="link d-inline-flex align-items-center" to="/lk/offers" @click="closeMenu">
              <div class="icon img-wrapper d-flex align-items-center justify-content-center">
                <img src="@/assets/images/icons/profile-menu/icon-offers.svg" alt="link menu icon">
              </div>
              <span>Предложения</span>
            </router-link>
          </li>
          <li v-for="link in links" :key="link.link">
            <router-link class="link d-inline-flex align-items-center" :to="link.link" @click="closeMenu">
              <div class="icon img-wrapper d-flex align-items-center justify-content-center">
                <img :src="require(`@/assets/images/icons/profile-menu/icon-${link.icon}.svg`)" alt="link menu icon">
              </div>
              <span>{{ link.name }}</span>
            </router-link>
          </li>
          <li>
            <button class="link d-inline-flex align-items-center">
              <div class="icon img-wrapper d-flex align-items-center justify-content-center">
                <img src="@/assets/images/icons/profile-menu/icon-exit.svg" alt="link menu icon">
              </div>
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      </nav>
      <div class="home-link">
        <router-link class="link d-inline-flex align-items-center" to="/" @click="closeMenu">
          <div class="icon img-wrapper d-flex align-items-center justify-content-center">
            <img src="@/assets/images/icons/profile-menu/icon-home.svg" alt="link menu icon">
          </div>
          <span>Главная</span>
        </router-link>
      </div>
      <div class="button d-flex justify-content-center">
        <base-button mode="green" link to="/login">Войти</base-button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    closeMenu: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      links: [
        {
          link: '/lk/profile',
          name: 'Профиль',
          icon: 'profile'
        },
        {
          link: '/lk/documents',
          name: 'Документы',
          icon: 'documents'
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  max-width: 346px;
  background-color: #EFF3F9;
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0;
  max-height: 100vh;

  padding: 42px 52px 0 98px;
}
.menu {
  li + li {
    margin-top: 12px;
  }
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid $primary-black;
}
.link {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.07em;
  color: inherit;
  opacity: 0.9;
  transition: opacity 0.3s linear;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -3px;
    z-index: -1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $primary-green-light;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  &.router-link-active {
    pointer-events: none;
    font-weight: 600;
    &::before {
      opacity: 1;
    }
  }
  &:hover, &:active, &:focus-within, &:focus {
    &::before {
      opacity: 1;
    }
    opacity: 1;
  }
}
.icon {
  max-width: 22px;
  height: 22px;
  margin-right: 20px;
}
@media(max-width: $tablet_size) {
  .sidebar {
    background-color: #fafafa;
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 138px 40px 0 40px;
  }
  .sidebar-enter-from,
  .sidebar-leave-to {
    transform: translateY(-100%);
  }
  .sidebar-enter-active {
    transition: all 0.5s ease-out;
  }
  .sidebar-leave-active {
    transition: all 0.5s ease-in;
  }
  .sidebar-enter-to,
  .sidebar-leave-from {
    transform: translateY(0%);
  }
  .sub-container {
    .menu, .home-link {
      max-width: 954px;
      margin: 0 auto 24px auto;
    }
    .home-link {
      margin-bottom: 0;
    }
  }
  .button {
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid $primary-black;
    a {
      min-width: 232px;
    }
  }
}
@media(max-width: $mobile_size) {
  .sidebar {
    padding: 100px 24px 0 24px;
  }
}
</style>
<template>
    <div class="sidebar" v-if="isDesktop">
      <div class="logo">
        <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
          <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>
      </div>
      <nav class="menu">
        <ul>
          <li>
            <router-link class="link d-inline-flex align-items-center" to="/lk/offers">
              <div class="icon img-wrapper d-flex align-items-center justify-content-center">
                <img src="@/assets/images/icons/profile-menu/icon-offers.svg" alt="link menu icon">
              </div>
              <span>Предложения</span>
            </router-link>
          </li>
          <li v-for="link in links" :key="link.link">
            <router-link class="link d-inline-flex align-items-center" :to="link.link">
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
        <router-link class="link d-inline-flex align-items-center" to="/">
          <div class="icon img-wrapper d-flex align-items-center justify-content-center">
            <img src="@/assets/images/icons/profile-menu/icon-home.svg" alt="link menu icon">
          </div>
          <span>Главная</span>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      isDesktop: {
        type: Boolean,
        default: false,
      },
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        links: [
          {
            link: '/lk/subscription',
            name: 'Подписки',
            icon: 'subscription'
          },
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
          {
            link: '/lk/feedback',
            name: 'Обратная связь',
            icon: 'feedback'
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
  .logo {
    max-width: 76px;
    height: 46px;
    margin-bottom: 42px;
  }
  .menu {
    li + li {
      margin-top: 12px;
    }
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
  .home-link {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid $primary-black;
  }
  .icon {
    max-width: 22px;
    height: 22px;
    margin-right: 20px;
  }
</style>
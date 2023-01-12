<template>
  <div class="wrapper">
    <h1 class="subtitle subtitle--cabinet">Документы</h1>
    <div class="content">
      <ul class="list">
        <li
            v-for="(document, index) in docs"
            :key="index"
            class="item"
        >
          <a :href="document.link" target="_blank" download class="d-inline-flex align-items-center">
            <div class="icon img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/icons/profile-menu/icon-pdf.svg" alt="document icon">
            </div>
            <span>{{ document.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        docs: [
          {
            link: 'test-link',
            title: 'Соглашение на обработку персональных данных',
          },
          {
            link: 'test-link',
            title: 'Соглашение на получение рекламных материалов',
          },
          {
            link: 'test-link',
            title: 'Защита от непредвиденных ситуаций',
          },
        ],
      };
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 48px;
  }
  li {
    a {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
      color: inherit;
    }
    span {
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s linear;
    }
    &:hover {
      span {
        border-color: $primary-black;
      }
    }
  }
  li + li {
    margin-top: 24px;
  }
  .icon {
    max-width: 24px;
    height: 24px;
    margin-right: 24px;
  }
</style>
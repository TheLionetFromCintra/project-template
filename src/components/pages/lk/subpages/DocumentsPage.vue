<template>
  <cabinet-page-wrapper title="Документы">
    <template #content>
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
    </template>
  </cabinet-page-wrapper>
</template>

<script>
  import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
  export default {
    components: {CabinetPageWrapper},
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
      &:hover {
        span {
          border-color: $primary-black;
        }
      }
    }
    span {
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s linear;
    }

  }
  li + li {
    margin-top: 24px;
  }
  .icon {
    max-width: 24px;
    height: 24px;
    margin: -4px 24px 0 0;
  }
  @media(max-width: $mobile_size) {
    .content {
      margin-top: 24px;
      padding: 0 24px;
    }
    li {
      a {
        font-size: 12px;
        line-height: 16px;
      }
      span {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
    li + li {
      margin-top: 12px;
    }
    .icon {
      margin: -4px 12px 0 0;
    }
  }
</style>
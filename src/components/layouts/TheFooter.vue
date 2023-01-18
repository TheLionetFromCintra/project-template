<template>
  <footer class="footer">
<!--      не забыть v-html-->
      <div class="description">
        <div class="container" v-html="text">
        </div>
      </div>
      <div class="bottom">
        <div class="container">
          <div class="parent d-flex align-items-center justify-content-between">
            <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/logo.svg" alt="logo">
            </router-link>
            <div class="wrapper d-flex flex-column align-items-center">
              <a class="link-hover" :href="`tel:${dictionary.phone}`">{{ phone }}</a>
              <a class="link-hover" href="mailto:support@mail.ru">support@mail.ru</a>
              <span>Все права защищены</span>
            </div>
            <base-button class="link" link href mode="grey" to="/unsubscribe">Отписаться</base-button>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";
import sbgMixin from "@/mixins/sbg";
import inputCheckMixin from "@/mixins/inputCheck";

export default {
  mixins: [sbgMixin, inputCheckMixin],
  computed: {
    ...mapGetters({
      dictionary: 'dictionary/dictionary'
    }),
    phone() {
      return this.setMask(this.dictionary.phone, '# (###) ###-##-##');
    },
    text() {
      // if (this.$route.name === 'Main' && this.$DICTIONARY?.footerTextIndex)
      //   return this.$DICTIONARY?.footerTextIndex
      //
      // if (this.isSbg)
      //   return this.$DICTIONARY?.footerTextFirst || this.$DICTIONARY?.footerText;
      if(!this.isAuth && this.isSbg) {
        return this.dictionary.footerTextFirst;
      } else {
        return this.dictionary.footerText;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 128px;
  }
  .description {
    padding: 58px 0;
    background-color: #EFF3F9;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.07em;
    &::v-deep {
      a {
        color: $primary-blue-dark;
        font-weight: 600;
      }
      p + p {
        margin-top: 32px;
      }
    }
  }
  .cabinet-footer {
    .container {
      max-width: 100%;
      padding: 58px 0 0 0;
      border-top: 1px solid $primary-grey;
    }
    .description {
      padding: 0 95px;
      background-color: transparent;
    }
    .wrapper {
      margin-left: 0;
    }
    .bottom .container {
      border: none;
      padding: 0 95px;
    }
  }
  .bottom {
    padding: 84px 0;
  }
  .logo {
    max-width: 122px;
    height: 74px;
  }
  .wrapper {
    margin-left: 76px;
    a, span {
      display: block;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
      color: inherit;
    }
    a + a, a + span {
      margin-top: 12px;
    }
  }
  .link {
    padding: 12px;
    min-width: 198px;
  }
  @media(max-width: $tablet_size) {
    .bottom {
      padding: 64px 0;
    }
    .description {
      font-size: 16px;
      line-height: 19px;
    }
    .cabinet-footer {
      .container {
        padding: 0 40px;
        border: none;
      }
      .wrapper {
        margin-left: 76px;
      }
      .description {
        padding: 58px 0;
        background-color: #EFF3F9;
      }
      .bottom {
        background: #fafafa;
        .container {
          padding: 0 40px;
        }
      }
    }
  }
  @media(max-width: $mobile_size) {
    .footer {
      margin-top: 72px;
      .container {
        padding: 0 24px;
      }
    }
    .description {
      padding: 40px 0 28px 0;
      font-size: 12px;
      line-height: 18px;
      &::v-deep p + p {
        margin-top: 24px;
      }
    }
    .cabinet-footer {
      .container {
        padding: 0 24px;
      }
      .wrapper {
        margin-left: 0;
      }
      .description {
        padding: 40px 0 28px 0;
      }
      .bottom .container {
        padding: 0 24px;
      }
    }
    .bottom {
      padding: 52px 0 108px 0;
    }
    .logo {
      max-width: 102px;
      height: 37px;
      order: 1;
    }
    .parent {
      flex-direction: column;
    }
    .wrapper {
      margin: 0;
      order: 3;
      a:not(.link), span {
        font-size: 12px;
        line-height: 18px;
      }
    }
    .link {
      margin: 32px 0 36px 0;
      order: 2;
    }
  }
</style>

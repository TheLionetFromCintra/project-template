<template>
  <div class="desc">
    <span>Введите код из смс</span>
  </div>
  <div class="content">
    <the-form @submit="submit">
      <template #inputs>
        <fieldset class="inputs d-flex align-items-center justify-content-center">
          <the-input
              placeholder="код из смс"
              input-type="letter"
              length="4"
          >
          </the-input>
          <resend-code text="Действителен"></resend-code>
        </fieldset>
        <div
             v-if="!isFio"
             class="link"
             @click="sendForm"
        >
          Заполнить форму?
        </div>
      </template>
      <template #default>
        <base-button class="button-main" mode="green">Продолжить</base-button>
      </template>
    </the-form>
  </div>
</template>

<script>
import ResendCode from "@/components/ui/ResendCode";
import TheInput from "@/components/ui/form/inputs/TheInput";
import TheForm  from "@/components/ui/form/TheForm";

import { mapGetters } from "vuex";

export default {
  components: {
    ResendCode,
    TheInput,
    TheForm
  },
  data() {
    return {
      isFio: false,
    };
  },
  computed: {
    ...mapGetters({
      user: ['app/user'],
      code_hash: ['app/code']
    })
  },
  methods: {
    submit() {

    },
    sendForm() {
      this.$router.push({
        name: 'UnsubInfo',
        params: {
          phone: this.$route.params.phone,
          message: 'Вы ввели неправильный код из СМС. Пожалуйста, заполните форму ниже:',
        }
      })
    }
  },
  async beforeRouteEnter(to, from, next) {
      const {
          info,
          phone
      } = to.params;

      if (info || phone) {
          next();
      } else {
          // Store.commit('application/load', false)
          next({
              name: 'Unsubscribe'
          });
      }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 24px;
  width: 100%;
  background: #EFF3F9;
  border-radius: 10px;
  padding: 42px;
}
.desc {
  max-width: 750px;
  span {
    display: block;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
}
form {
  align-items: flex-start !important;
  width: 100%;
  max-width: 624px;
  .box {
    max-width: 150px;
  }
  fieldset {
    justify-content: flex-start !important;
  }
}
.button-main {
  min-width: 178px;
  margin-top: 38px;
}
.timer {
  margin: 0 0 0 24px;
  justify-content: flex-start !important;
  width: fit-content;
  min-width: 260px;
}
.link {
  margin-top: 24px;
  cursor: pointer;
  width: fit-content;

  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.07em;
  color: inherit;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s linear;
  &:hover {
    border-color: $primary-black;
  }
}
@media(max-width: $mobile-size) {
  .content {
    margin-top: 24px;
    padding: 42px 15px;
  }
  .desc {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 24px auto;
  }
  form {
    align-items: center !important;
    margin: 0 auto;
    .box {
      min-width: 130px;
    }
    fieldset {
      justify-content: center !important;
    }
  }
  .timer {
    min-width: initial;
  }
  .link {
    margin: 24px auto 0 auto;
  }
}
</style>
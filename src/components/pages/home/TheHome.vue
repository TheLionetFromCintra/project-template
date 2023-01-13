<template>
  <div class="bg--main">
    <mob-menu :is-visible="isVisible" :close-menu="closeMenu"></mob-menu>
    <the-header :is-visible="isVisible" :toggle-menu="toggleMenu"></the-header>
    <main-block title="Для получения займа под 0% заполните анкету" desc="Получи деньги быстро и просто независимо от вашей кредитной истории"></main-block>
  </div>

  <base-wrapper class="steps observed" title="Как это работает?">
      <template #default>
        <steps-list></steps-list>
      </template>
  </base-wrapper>

  <base-wrapper class="ways observed" title="Способы получения займа в МФО">
    <template #default>
      <p class="text">Моментальный подбор подходящих займов: просто укажите, какая сумма вам необходима. Мы подберем предложения с моментальным переводом денег на карту.</p>
      <pay-list></pay-list>
    </template>
  </base-wrapper>

  <div class="bg--about observed">
    <base-wrapper class="about" title="О нас">
      <template #default>
        <about-list></about-list>
      </template>
    </base-wrapper>
  </div>

  <base-wrapper class="offers observed" title="Выберите свой займ в МФО">
    <template #default>
      <offers-list></offers-list>
    </template>
  </base-wrapper>

  <base-wrapper class="reviews observed" title="Отзывы наших клиентов">
    <template #default>
      <reviews-list></reviews-list>
    </template>
  </base-wrapper>

  <base-wrapper class="questions observed" title="Часто спрашивают">
    <template #default>
      <questions-list></questions-list>
    </template>
  </base-wrapper>

  <div class="bg--help observed">
    <base-wrapper class="help" title="Мы помогаем получить деньги">
      <template #default>
        <stat-list></stat-list>
      </template>
    </base-wrapper>
  </div>

  <base-wrapper class="contacts observed" title="Контактная информация" v-if="!isMobile">
    <template #default>
      <contacts-list></contacts-list>
    </template>
  </base-wrapper>

  <the-footer></the-footer>

</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import MainBlock from "@/components/pages/home/layouts/MainBlock";
import StepsList from "@/components/pages/home/components/StepsList";
import PayList from "@/components/pages/home/components/PayList";
import AboutList from "@/components/pages/home/components/AboutList";
import OffersList from "@/components/pages/home/components/OffersList";
import StatList from "@/components/pages/home/components/StatList";
import ContactsList from "@/components/pages/home/components/ContactsList";
import TheFooter from "@/components/layouts/TheFooter";
import QuestionsList from "@/components/pages/home/components/questions/QuestionsList";
import ReviewsList from "@/components/pages/home/components/ReviewsList";
import MobMenu from "@/components/layouts/MobMenu";

import mobileMixin from "@/mixins/mobile";

export default {
  components: {
    ReviewsList,
    QuestionsList,
    TheFooter,
    ContactsList,
    OffersList,
    AboutList,
    PayList,
    StepsList,
    TheHeader,
    MainBlock,
    StatList,
    MobMenu
  },
  mixins: [mobileMixin],
  methods: {
    setObserver() {
      const allSections = document.querySelectorAll('.observed');

      const revealSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.remove('observed--hidden');
        observer.unobserve(entry.target);
      };

      const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
      });

      allSections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.add('observed--hidden');
      });
    }
  },
  mounted() {
    this.setObserver();
  },
};
</script>

<style lang="scss" scoped>
  .observed {
    transition: transform 1s, opacity 1s;
  }
  .observed--hidden {
    opacity: 0;
    transform: translateY(8rem);
  }
  .steps {
    margin-top: 70px;
  }
  .ways {
    margin-top: 98px;
    padding-bottom: 76px;
    .text {
      max-width: 1028px;
      margin: 0 auto 48px auto;
      font-size: 24px;
      line-height: 160.9%;
      text-align: center;
      color: $primary-black-dark;
    }
  }
  .about {
    padding: 48px 0 50px 0;
  }
  .offers {
    margin-top: 86px;
  }
  .reviews {
    margin-top: 138px;
    padding-bottom: 138px;
  }
  .questions {
    margin-top: 106px;
    padding-bottom: 94px;
  }
  .help {
    padding: 74px 0 90px 0;
  }
  .contacts {
    margin-top: 94px;
  }
  .bg--about , .bg--help, .bg--main {
    overflow: hidden;
  }
  .bg--about {
    background: #EFF3F9 url('@/assets/images/background/about-bg.svg') repeat 90% 920px;
  }
  .bg--help {
    background: #EFF3F9 url('@/assets/images/background/help-bg.svg') repeat 90% 1300px;
  }
  .bg--main {
    background: linear-gradient(107.59deg, #F9F9FB 3.14%, #F3F4F6 51.42%, #EEF0F2 58.77%, #E0E7EA 96.01%);
    position: relative;
    z-index: 10;
    &::before {
      content: url("@/assets/images/background/main-bg.png");
      right: 0;
      bottom: -6px;
      position: absolute;
      z-index: -1;
    }
  }
  @media(max-width: $tablet_size) {
    .reviews {
      padding-bottom: 98px;
    }
  }
  @media(max-width: $mobile_size) {
    .observed--hidden {
      opacity: 0;
      transform: translateY(6rem);
    }
    .steps {
      margin-top: 52px;
    }
    .questions, .ways, .reviews {
      margin-top: 72px;
      padding-bottom: 0;
    }
    .bg--help, .bg--about {
      overflow: visible;
      margin-top: 72px;
      background: transparent;
    }
    .ways .text {
      display: none;
    }
    .bg--main {
      &::before {
        content: url("@/assets/images/background/main-bg-mob.png");
        z-index: -1;
        right: -5px;
      }
    }
  }
</style>




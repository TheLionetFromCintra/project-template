<template>
<<<<<<< HEAD
  <div class="bg">
    <the-header></the-header>
    <main-block></main-block>
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
  <div class="bg observed">
    <base-wrapper class="about" title="О нас">
=======
  <the-header></the-header>
  <main-block></main-block>

  <transition name="section" mode="out-in">
    <base-wrapper
      class="steps"
      title="Как это работает?"
      v-if="sections[0].isVisible"
    >
      <template #default>
        <steps-list></steps-list>
      </template>
    </base-wrapper>
  </transition>
  <transition name="section" mode="out-in">
    <base-wrapper
      class="ways"
      title="Способы получения займа в МФО"
      v-if="sections[1].isVisible"
    >
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb
      <template #default>
        <p class="text">
          Моментальный подбор подходящих займов: просто укажите, какая сумма вам
          необходима. Мы подберем предложения с моментальным переводом денег на
          карту.
        </p>
        <pay-list></pay-list>
      </template>
    </base-wrapper>
<<<<<<< HEAD
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
  <div class="bg observed">
    <base-wrapper class="help" title="Мы помогаем получить деньги">
      <template #default>
        <stat-list></stat-list>
      </template>
    </base-wrapper>
  </div>
  <base-wrapper class="contacts observed" title="Контактная информация">
    <template #default>
      <contacts-list></contacts-list>
    </template>
  </base-wrapper>

  <the-footer></the-footer>
=======
  </transition>
  <transition name="section" mode="out-in">
    <div class="bg" v-if="sections[2].isVisible">
      <base-wrapper class="about" title="О нас">
        <template #default>
          <about-list></about-list>
        </template>
      </base-wrapper>
    </div>
  </transition>
  <transition name="section" mode="out-in">
    <base-wrapper
      class="plans"
      title="Выберите свой займ в МФО"
      v-if="sections[3].isVisible"
    >
      <template #default> 123 </template>
    </base-wrapper>
  </transition>

  <the-observer @intersect="observeSection"></the-observer>
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import MainBlock from "@/components/pages/home/layouts/MainBlock";
import StepsList from "@/components/pages/home/components/StepsList";
import PayList from "@/components/pages/home/components/PayList";
import AboutList from "@/components/pages/home/components/AboutList";
<<<<<<< HEAD
import OffersList from "@/components/pages/home/components/OffersList";
import StatList from "@/components/pages/home/components/StatList";
import ContactsList from "@/components/pages/home/components/ContactsList";
import TheFooter from "@/components/layouts/TheFooter";
import QuestionsList from "@/components/pages/home/components/questions/QuestionsList";
import ReviewsList from "@/components/pages/home/components/ReviewsList";
=======
import TheObserver from "./components/TheObserver.vue";
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb

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
<<<<<<< HEAD
    StatList
  },
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
=======
    TheObserver,
  },
  data() {
    return {
      counter: 0,
      maxSteps: 4,
      sections: [
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
      ],
    };
  },
  methods: {
    observeSection() {
      if (this.counter < this.maxSteps) {
        this.sections[this.counter].isVisible = true;
        this.counter++;
      }
    },
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb
  },
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
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
  .bg {
    overflow: hidden;
    background: #EFF3F9 url('@/assets/images/test-bg.svg') repeat 1700px 920px;
    //background: #EFF3F9 url('@/assets/images/test-bg.svg') repeat 500px 500px;
  }
</style>
=======
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
.plans {
  margin-top: 86px;
}
.bg {
  overflow: hidden;
  background: #eff3f9 url("@/assets/images/test-bg.svg") repeat 1700px 920px;
  //background: #EFF3F9 url('@/assets/images/test-bg.svg') repeat 500px 500px;
}
.section-enter-from,
.section-leave-to {
  opacity: 0;
  transform: translateY(8rem);
}
.section-enter-active {
  transition: opacity 1s ease-out, transform 1.5s ease-out;
}
.section-leave-active {
  transition: opacity 1s ease-in, transform 1.5s ease-in;
}
.section-enter-to,
.section-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb

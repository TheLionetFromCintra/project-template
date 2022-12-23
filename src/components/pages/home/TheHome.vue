<template>
  <the-header></the-header>
  <main-block></main-block>
  <base-wrapper class="steps" title="Как это работает?">
      <template #default>
        <steps-list></steps-list>
      </template>
  </base-wrapper>
  <base-wrapper class="ways" title="Способы получения займа в МФО">
    <template #default>
      <p class="text">Моментальный подбор подходящих займов: просто укажите, какая сумма вам необходима. Мы подберем предложения с моментальным переводом денег на карту.</p>
      <pay-list></pay-list>
    </template>
  </base-wrapper>
  <div class="bg">
    <base-wrapper class="about" title="О нас">
      <template #default>
        <about-list></about-list>
      </template>
    </base-wrapper>
  </div>
  <base-wrapper class="plans" title="Выберите свой займ в МФО">
    <template #default>
      123
    </template>
  </base-wrapper>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import MainBlock from "@/components/pages/home/layouts/MainBlock";
import StepsList from "@/components/pages/home/components/StepsList";
import PayList from "@/components/pages/home/components/PayList";
import AboutList from "@/components/pages/home/components/AboutList";

export default {
  components: {
    AboutList,
    PayList,
    StepsList,
    TheHeader,
    MainBlock
  },
  data() {
    return {
      scrolled: false
    };
  },
  methods: {

  },
  mounted() {
    const allSections = document.querySelectorAll('section');

    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  },
};
</script>

<style lang="scss" scoped>
  section {
    transition: transform 1s, opacity 1s;
  }

  .section--hidden {
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
  .plans {
    margin-top: 86px;
  }
  .bg {
    overflow: hidden;
    background: #EFF3F9 url('@/assets/images/test-bg.svg') repeat 1700px 920px;
    //background: #EFF3F9 url('@/assets/images/test-bg.svg') repeat 500px 500px;
  }
</style>
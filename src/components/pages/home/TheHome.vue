<template>
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
      <template #default>
        <p class="text">
          Моментальный подбор подходящих займов: просто укажите, какая сумма вам
          необходима. Мы подберем предложения с моментальным переводом денег на
          карту.
        </p>
        <pay-list></pay-list>
      </template>
    </base-wrapper>
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
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import MainBlock from "@/components/pages/home/layouts/MainBlock";
import StepsList from "@/components/pages/home/components/StepsList";
import PayList from "@/components/pages/home/components/PayList";
import AboutList from "@/components/pages/home/components/AboutList";
import TheObserver from "./components/TheObserver.vue";

export default {
  components: {
    AboutList,
    PayList,
    StepsList,
    TheHeader,
    MainBlock,
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
  },
};
</script>

<style lang="scss" scoped>
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

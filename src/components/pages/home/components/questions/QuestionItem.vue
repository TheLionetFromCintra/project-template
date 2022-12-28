<template>
  <div class="item">
    <div class="top d-flex align-items-center justify-content-between" @click="showContent(index)">
      <span class="title">{{ question.title }}</span>
      <div class="button d-flex align-items-center justify-content-center" :class="{active: question.active}">
      </div>
    </div>
    <transition
        name="accordion"
        mode="out-in"
    >
      <div class="content" v-html="question.description" :class="{test: question.active}"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true,
      }
    },
    emits: ['toggle-open'],
    data() {
      return {
        isActive: this.question.active
      };
    },
    methods: {
      showContent(num) {
        this.$emit('toggle-open', num);
      },
      start(el) {
        el.style.height = el.scrollHeight + "px";
      },
      end(el) {
        el.style.height = "";
      },
    },
  }
</script>

<style scoped lang="scss">
  .item {
    border-bottom: 2px solid #2241D4;
  }
  .top {
    padding: 24px 0;
    cursor: pointer;
  }
  .item:first-child .top {
    padding-top: 0;
  }
  .title {
    display: block;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.07em;
    color: $primary-black-dark;
  }
  .button {
    width: 72px;
    height: 72px;
    border: 3px solid $primary-blue;
    border-radius: 50%;
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      height: 3px;
      width: 21px;
      background-color: $primary-blue;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s linear, transform 0.2s linear;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
    &.active {
      &::before {
        opacity: 0;
      }
      &::after {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }

  .content {
    padding: 0 52px;
    margin-left: 24px;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.07em;
    color: $primary-black-dark;
    max-width: 1010px;

    max-height: 0;
    overflow-y: hidden;
    transition: all 0.5s ease-out;

    &::v-deep ol {
      margin: 36px 0 0 0;
      padding: 0;
      counter-reset: num;
      list-style-type: none;
      li {
        position: relative;
        &::before {
          content: counter(num);
          counter-increment: num;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 3px;
          left: -52px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: $primary-blue;
          color: $primary-white ;
          font-size: 14px;
          line-height: 16px;
          padding-left: 2px;
        }
      }
      li + li {
        margin-top: 36px;
      }
    }
  }
  .content.test {
    max-height: 100vh;
    padding: 24px 0 40px 52px;
  }
  @media(max-width: $mobile_size) {

  }
</style>
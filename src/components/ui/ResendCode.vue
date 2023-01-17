<template>
  <div class="timer d-flex align-items-center justify-content-center">
    <div class="icon img-wrapper d-flex align-items-center justify-content-center" v-if="!isResend">
      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.5H3.5V9C3.5 4.30614 7.30614 0.5 12 0.5C16.6939 0.5 20.5 4.30614 20.5 9C20.5 13.6939 16.6939 17.5 12 17.5C9.8288 17.5 7.85939 16.6875 6.35733 15.3498L7.07049 14.6366C8.38396 15.7942 10.1116 16.5 12 16.5C16.1461 16.5 19.5 13.1461 19.5 9C19.5 4.85386 16.1461 1.5 12 1.5C7.85386 1.5 4.5 4.85386 4.5 9V9.5H5H6.79077L3.99548 12.2884L1.20711 9.5H3ZM12 9.25V9.53449L12.2446 9.67983L15.3145 11.5042L15.1057 11.8551L11.5 9.71531V5.5H12V9.25Z"
              fill="#8F8F8F" stroke="#8F8F8F"/>
      </svg>
    </div>
    <div class="timer-text" v-if="!isResend">
      {{ text }}
      {{ timerCount }} с</div>
    <button class="timer-text active d-flex align-items-center" v-else>
      <div class="icon img-wrapper d-flex align-items-center justify-content-center">
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5H3.5V9C3.5 4.30614 7.30614 0.5 12 0.5C16.6939 0.5 20.5 4.30614 20.5 9C20.5 13.6939 16.6939 17.5 12 17.5C9.8288 17.5 7.85939 16.6875 6.35733 15.3498L7.07049 14.6366C8.38396 15.7942 10.1116 16.5 12 16.5C16.1461 16.5 19.5 13.1461 19.5 9C19.5 4.85386 16.1461 1.5 12 1.5C7.85386 1.5 4.5 4.85386 4.5 9V9.5H5H6.79077L3.99548 12.2884L1.20711 9.5H3ZM12 9.25V9.53449L12.2446 9.67983L15.3145 11.5042L15.1057 11.8551L11.5 9.71531V5.5H12V9.25Z"
                :fill="!isResend ? '#8F8F8F' : '#21348E'" :stroke="!isResend ? '#8F8F8F' : '#21348E'"/>
        </svg>
      </div>
      <span>Выслать повторно</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isResend: false,
      timerCount: 59,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.isResend = true;
        }
      },
      immediate: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.timer {
  width: 100%;
  margin-top: 24px;
  .timer-text {
    color: #8F8F8F;
    &.active {
      color: #21348E;
      outline: none;
      background: transparent;
      span {
        white-space: nowrap;
      }
    }
  }
}
.icon {
  margin-right: 14px;
  max-width: 24px;
  height: 24px;
}
.timer .timer-text  {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.07em;
}
@media(max-width: $tablet-size) {
  .timer .timer-text {
    font-size: 14px;
    line-height: 17px;
  }
}
@media(max-width: $mobile-size) {
  .timer {
    margin-top: 12px;
    .timer-text {
      &.active {
        span {
          white-space: initial;
        }
      }
    }
  }
  .icon {
    max-width: 14px;
    height: 14px;
    margin-right: 14px;
  }
  .timer .timer-text {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
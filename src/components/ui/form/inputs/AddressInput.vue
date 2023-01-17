<template>
  <div class="box">
    <label>
      <span>{{ label }}</span>
      <div class="wrapper">
        <input
            ref="field"
            v-model="fieldModel"
            :class="className"
            :placeholder="placeholder"
            @focus="focusEvent"
            @keydown.up="keyUp"
            @keydown.down="keyDown"
            @keydown.enter="keyEnter"
        >
        <div class="select-list" v-if="showList">
          <ul class="loading" :class="{active: isFocus}" v-if="showLoading">
            <li v-for="i in showLoading"
                class="item-loading"
                :key="i">
              <div class="d-flex">
                <span></span> <span></span>
              </div>
            </li>
          </ul>
          <ul :class="{active: isFocus}" v-else>
            <li  class="before-item" v-if="beforeList">
              <span>
                {{ beforeList }}
              </span>
            </li>
            <li v-for="(item, index) in list"
                class="l-select__item"
                @click="setItem(item)"
                @mouseover="activeIndex = index"
                :class="{
                  'hovered': activeIndex === index
                }"
                :key="getPathItem(item, itemsKey)">
                  {{ getPathItem(item, itemsLabel) }}
            </li>
          </ul>
        </div>
      </div>
      <small class="err-message" v-if="errorMessage && false">{{ errorMessage }}</small>
    </label>
  </div>
</template>

<script>
import './style/input.scss';

export default {
  emits: ['focus', 'listClick','change'],
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
    itemsKey: {
      type: String,
      default: 'id'
    },
    itemsLabel: {
      type: String,
      default: 'title'
    },
    list: {
      type: Array,
      default: () => ([])
    },
    beforeList: {
      type: String,
      default: ''
    },
    showLoading: {
      type: Number,
      default: 0
    },
    activeValue: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      isFocus: false,
      fieldValue: '',
      activeIndex: 0
    }
  },
  computed: {
    showList() {
      return this.isFocus && (this.beforeList || this.showLoading || this.list.length > 0);
    },
    field() {
      return this.$refs.field.field;
    },
    fieldModel: {
      get() {
        return this.fieldValue;
      },
      set(v) {
        this.fieldValue = v;

        if (!this.isFocus)
          return;

        // this.$emit('input', v);
      }
    }
  },
  methods: {
    focusEvent() {
      this.isFocus = true;
      this.$emit('focus', this.fieldValue);
    },
    setItem(item) {
      this.$emit('listClick');
      this.fieldValue = item.value;

      this.$emit('change', this.fieldValue);
    },
    getPathItem(item, type) {
      if (!item)
        return null;

      if (Array.isArray(type))
        return type.map(i => this.getPathItem(item, i)).filter(i => i).join(', ');

      const path = type.split('.');
      let key = item;

      path.forEach(nextKey => key = key[nextKey]);
      return key || null;
    },
    globalEventCheck(e) {
      if (this.$el.contains(e.target) || document.activeElement === this.field)
        return;

      this.isFocus = false;
    },
    keyUp(e) {
      e.preventDefault();
      this.activeIndex--;

      if (this.activeIndex < 0)
        this.activeIndex = this.list.length - 1;
    },
    keyDown(e) {
      e.preventDefault();
      this.activeIndex++;

      if (this.activeIndex >= this.list.length)
        this.activeIndex = 0;
    },
    keyEnter(e) {
      e.preventDefault();
      if (!(this.list.length && this.list[this.activeIndex]))
        return;

      this.setItem(this.list[this.activeIndex]);
    }
  },
  mounted() {
    document.addEventListener('click', this.globalEventCheck);
    document.addEventListener('focusin', this.globalEventCheck);
    this.fieldValue = this.activeValue ? this.activeValue : '';
  },
  beforeUnmount() {
    document.removeEventListener('focusin', this.globalEventCheck);
    document.removeEventListener('click', this.globalEventCheck);
  }
}
</script>

<style lang="scss" scoped>
  .box input {
    padding: 12px 16px;
  }
  .wrapper {
    position: relative;
  }
  .select-list {
    position: absolute;
    left: 0;
    top: 8px;
    z-index: 2;
    transform: translateY(-100%);
    width: 100%;
    overflow: hidden;
    ul {
      background-color: $primary-white;
      border: 1px solid transparent;
      transition: border-color 0.3s linear;
      &.active {
        border: 1px solid $primary-blue;
        border-bottom-color: transparent;
      }
    }
    ul, li:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    li {
      cursor: pointer;
      padding: 10px 16px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
      color: $primary-grey;
      border-bottom: 1px solid $primary-grey;
      transition: background-color 0.3s linear;
      &.selected {
        color: $primary-black;
      }
      &:hover, &.hovered {
        background-color: rgba($primary-blue, 0.1);
      }
    }
    .item-loading {
        span {
          width: 70px;
          height: 15px;
          background-color: $primary-blue;
          margin-bottom: 0;
          position: relative;
          overflow-x: hidden;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            height: 100%;
            width: 20px;
            transform: skewX(-45deg);
            animation: flareAnimation;
            left: -150%;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
            animation: flareAnimation .8s infinite linear;
          }
        }
      span + span {
        margin-left: 6px;
      }
    }
    .before-item {
      pointer-events: none;
      span {
        margin-bottom: 0;
      }
    }
  }

  @keyframes flareAnimation {
    0% {
      left: -150%;
    }
    100% {
      left: 150%;
    }
  }
</style>
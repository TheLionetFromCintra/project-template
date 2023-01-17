<template>
  <div class="wrapper">
    <div class="title d-flex align-items-center">
      <h4>{{ title }}</h4>
      <router-link v-if="showIcon" to="edit" class="icon img-wrapper d-flex align-items-center justify-content-center">
        <img src="@/assets/images/icons/profile-menu/edit.svg" alt="edit data icon">
      </router-link>
    </div>
    <div class="content">
        <div class="item d-flex justify" v-for="field in fields" :key="field.label">
          <span class="label">{{ field.label }}</span>
          <span class="value">{{ field.value }}</span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      fields: {
        type: Array,
        required: true,
      },
      showIcon: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    &::before {
      content: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
      background-color: $primary-black;
      width: 390px;
    }
  }
  .wrapper + .wrapper {
    margin-top: 36px;
    padding-top: 38px;
    &::before {
      content: '';
    }
  }
  .title {
    margin-bottom: 36px;
    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.07em;
      min-width: 260px;
    }
  }
  .icon {
    max-width: 28px;
    height: 28px;
    margin-left: 10px;
  }
  .label, .value {
    display: block;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  .label {
    min-width: 180px;
  }
  .value {
    font-weight: 600;
    margin-left: 20px;
  }
  .item {
    margin-bottom: 12px;
    max-width: 600px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .personal-data {
    .item {
      &:nth-child(2), &:nth-child(5) {
        margin-bottom: 24px;
      }
    }
  }
  .passport-data {
    .item {
      &:nth-child(3) {
        margin-bottom: 24px;
      }
    }
  }
  .card-data {
    .label {
      min-width: 130px;
    }
  }
  @media(max-width: $mobile_size) {
    .title {
      h4 {
        min-width: initial;
      }
      width: 100%;
      justify-content: space-between;
    }
    .wrapper + .wrapper {
      margin-top: 48px;
      padding-top: 0;
      &::before {
        content: none;
      }
    }
    .item {
      max-width: 500px;
    }
    .label, .value {
      font-size: 14px;
      line-height: 18px;
    }
    .label, .card-data .label {
      min-width: 125px;
      max-width: 125px;
    }
    .value {
      margin-left: 20px;
    }
  }
</style>
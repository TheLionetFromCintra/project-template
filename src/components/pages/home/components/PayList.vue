<template>
  <ul class="list d-flex align-items-center justify-content-between">
    <li v-for="pay in pays" :key="pay">
      <div class="img img-wrapper d-flex align-items-center justify-content-center">
        <img :src="require(`@/assets/images/icons/pays/pay-${pay}.svg`)" :alt="pay">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        pays: ['visa', 'mir', 'master', 'qiwi']
      };
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    max-width: 896px;
    margin: 0 auto;
    li + li {
      margin-left: 24px;
    }
  }
  .img {
    max-width: 230px;
    height: 74px;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  @media(max-width: $mobile_size) {
    .list {
      justify-content: center !important;
      li:last-child {
        display: none;
      }
      .li + li {
        margin-left: 20px;
      }
      li:nth-child(3) {
        img {
          height: 100%;
          max-width: none;
        }
      }
    }
    .img {
      max-width: 58px;
      height: 22px;
    }
  }
</style>
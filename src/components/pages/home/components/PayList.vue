<template>
  <ul class="list d-flex align-items-center justify-content-between">
    <li v-for="pay in pays" :key="pay">
      <div class="img img-wrapper d-flex align-items-center justify-content-center">
        <img :src="require(`@/assets/images/icons/pays/pay-${pay}.svg`)">
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
  }
  .img {
    max-width: 230px;
    height: 74px;
    img {
      height: auto;
      max-width: 100%;
    }
  }
</style>
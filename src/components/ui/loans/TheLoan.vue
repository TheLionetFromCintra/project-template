<template>
  <div class="item d-flex flex-column align-items-center">
    <div class="logo img-wrapper d-flex align-items-center justify-content-center" v-if="loan.logo">
      <img :src="require(`@/assets/images/${loan.logo}`)" :alt="loan.title">
    </div>
    <div class="price" v-if="loan.header">{{ loan.header }} ₽</div>
    <div class="percent"><b>0%</b><span>/день</span></div>
    <div class="desc" v-if="loan.subHeader">{{ loan.subHeader }}</div>
    <div class="btn-wrapper">
      <a class="d-flex align-items-center justify-content-center" :href="loan.link" target="_blank">Получить деньги</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loan: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
 .item {
   background: #FAFAFA;
   border: 1px solid #181818;
   box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
   border-radius: 10px;
   min-height: 270px;
   width: 100%;
   padding: 14px 32px;
 }
 .logo {
   max-width: 136px;
   height: 32px;
   margin-bottom: 24px;
 }
 .price {
   font-weight: 600;
   font-size: 24px;
   line-height: 29px;
   letter-spacing: 0.07em;
   margin-bottom: 8px;
 }
 .percent {
   margin-bottom: 15px;
   background-color: rgba(208, 227, 255, 0.42);
   border-radius: 30px;
   font-size: 20px;
   line-height: 24px;
   letter-spacing: 0.07em;
   padding: 4px 10px;
   span {
     font-size: 18px;
   }
 }
 .desc {
   font-size: 16px;
   line-height: 25px;
   letter-spacing: 0.07em;
   text-align: center;
 }
  .btn-wrapper {
    width: 100%;
    margin-top: 24px;
    a {
      min-height: 56px;
      width: 100%;
      background-color: $primary-green-light;
      border-radius: 10px;

      font-weight: 600;
      font-size: 20px;
      line-height: 31px;
      text-align: center;
      letter-spacing: .07em;
      color: $primary-white;
      padding: 12px;
    }
  }
  @media(max-width: $mobile-size) {
    .item {
      min-width: 318px;
      max-width: 70%;
      min-height: 264px;
    }
    .price {
      font-size: 20px;
      line-height: 25px;
    }
    .percent {
      font-size: 18px;
      line-height: 22px;
      span {
        font-size: 16px;
      }
    }
    .desc {
      font-size: 14px;
      line-height: 20px;
    }
    .btn-wrapper {
      a {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
 @media(max-width: 374px) {
   .item {
     min-width: 274px;
   }
 }
</style>
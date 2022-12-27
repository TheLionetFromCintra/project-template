<template>
  <main class="main">
    <div class="container">
      <h1>Для получения займа под 0% заполните анкету</h1>
      <div class="description">
        <p>Получи деньги быстро и просто независимо от вашей кредитной истории</p>
      </div>
      <the-calculator></the-calculator>
      <benefits-list></benefits-list>
    </div>
  </main>
</template>

<script>
import BenefitsList from '../components/BenefitsList';
import TheCalculator from '../components/calc/TheCalculator';

 export default {
   components: {
     BenefitsList,
     TheCalculator
   }
 }
</script>

<style lang="scss" scoped>
.main {
  margin-top: 62px;
  padding-bottom: 50px;
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: 0.07em;
    color: $primary-blue-dark;
    margin: 0 auto;
    text-align: center;
    max-width: 762px;
  }
  .description {
    margin: 36px auto 0 auto;
    max-width: 754px;
    p {
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 0.07em;
    }
  }
}
</style>

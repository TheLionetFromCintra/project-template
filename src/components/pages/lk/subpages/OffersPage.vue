<template>
  <cabinet-page-wrapper title="Предложения">
    <template #desc>
      <div class="desc">
        <span><b>Быстро</b> оформить заявку с любой кредитной историей.</span>
        <span>Для гарантированного получения займа подайте заявки как минимум в 3 компании.</span>
        <span><b>Выберите свой займ в МФО:</b></span>
      </div>
    </template>
    <template #content>
      <div class="content">
        <div class="loans">
          <the-loan v-for="loan in loans" :key="loan.id" :loan="loan"></the-loan>
        </div>
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
import TheLoan from "@/components/ui/loans/TheLoan";

export default {
  components: {CabinetPageWrapper, TheLoan},
  data() {
    return {
      loans: [
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 1,
          title: 'webbankir',
          header: 'до 30 000'
        },
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 2,
          title: 'webbankir',
          header: 'до 80 000'
        },
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 3,
          title: 'webbankir',
          header: 'до 20 000'
        },
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 4,
          title: 'webbankir',
          header: 'до 50 000'
        },
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 5,
          title: 'webbankir',
          header: 'до 40 000'
        },
        {
          logo: 'zaymigo.png',
          subHeader: 'От 18 лет на срок до 30 дней',
          link: 'https://t.leads.tech/click/141/36/?sub1=vb&sub2=0&sub3=beeline&sub4=1&sub5=vb',
          id: 6,
          title: 'webbankir',
          header: 'до 90 000'
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
  .desc {
    margin-top: 24px;
    max-width: 750px;
    span {
      display: block;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
    }
    span + span {
      margin-top: 12px;
    }
  }
  .content {
    margin-top: 24px;
  }
  .loans {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 318px);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    @media(max-width: 1540px) {
      grid-template-columns: repeat(2, 318px);
    }
  }
  @media(max-width: $tablet_size) {
    .loans {
      grid-template-columns: repeat(2, 44.8%);
      justify-content: center;
    }
  }
  @media(max-width: $mobile_size) {
    .desc {
      span + span {
        margin-top: 16px;
      }
    }
    .loans {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
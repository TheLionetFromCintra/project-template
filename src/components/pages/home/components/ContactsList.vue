<template>
  <ul class="items justify-content-between">
    <li class="item d-flex flex-column align-items-center" v-for="contact in contacts" :key="contact.title">
      <div class="icon d-flex align-items-center justify-content-center">
        <div class="img img-wrapper d-flex align-items-center justify-content-center">
          <img :src="require(`@/assets/images/icons/contacts/${contact.icon}.svg`)" :alt="contact.title">
        </div>
      </div>
      <span>{{ contact.title }}</span>
      <a v-if="contact.icon === 'phone'" :href="`tel:${contact.value.replace(/[^0-9]/g, '')}`">{{ contact.value }}</a>
      <a v-else-if="contact.icon === 'email'" :href="`mailto:${contact.value}`">{{ contact.value }}</a>
      <span v-else>{{ contact.value }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        contacts: [
          {
            title: 'Телефон',
            value: '8 (499) 112 43 67',
            icon: 'phone',
          },
          {
            title: 'Эл. почта',
            value: 'support@e-finmarket.ru',
            icon: 'email',
          },
          {
            title: 'Адрес',
            value: '125047, г.Москва, ул 1-я тверская-ямская, д.12,помещ. 1, офис 2/002',
            icon: 'address',
          },
        ],
      };
    },
  }
</script>

<style lang="scss" scoped>
  .items {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 31.8%);
  }
  .item {
    width: 100%;
    min-height: 220px;
    a, span {
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #232323;
      display: inline-block;
      max-width: 294px;
    }
    span + span, span + a {
      padding-top: 4px;
    }
  }
  .icon {
    background: #EFF3F9;
    border-radius: 20px;
    margin-bottom: 38px;
    width: 112px;
    height: 122px;
    .img {
      max-width: 60px;
      height: 60px;
      img {
        height: auto;
        max-width: 100%;
      }
    }
  }
</style>
<template>
  <address-input
      label="Адрес регистрации:"
      placeholder="Респ Крым, пгт Массандра, г Ялта, ул Стахановская, д 15 к 2 кв 24"
      itemsLabel="value"
      itemsKey="value"
      @focus="focus"
      @input="getListTimeout"
      @listClick="clearList"
      :beforeList="warning"
      :showLoading="showLoading"
      :list="list"
      @change="change"
      :active-value="activeValue"
  >
  </address-input>
</template>

<script>
  import AddressInput from "@/components/ui/form/inputs/AddressInput";

  import axios from 'axios';

  const DADATA_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const TOKEN = '75c9f7a3271fd705ff6aa196fb67363564ed5121';

  export default {
    components: {AddressInput},
    props: {
      activeValue: {
        type: String,
        required: false,
      }
    },
    emits: ['update:modelValue', 'change'],
    mounted() {
      this.isMounted = true;
    },
    data() {
      return {
        list: [],
        warning: '',
        timeoutID: null,
        showLoading: 0,
        isMounted: false
      }
    },
    methods: {
      clearList() {
        this.list = [];
      },
      focus(v) {
        //later change
        if (this.list.length === 0)
          return;

        this.getList(v);
      },
      change(v) {
        this.$emit('update:modelValue', v);
      },
      getListTimeout(v) {
        this.warning = '';
        this.list = [];
        this.showLoading = 5;
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => this.getList(v.target.value), 600);

        this.$emit('update:modelValue', v.target.value);
      },
      getList(v) {
        if (!v) {
          this.list = [];
          this.showLoading = 0;
          return;
        }

        const data = {
          count: 5,
          restrict_value: true,
          query: v
        };

        axios.post(DADATA_URL, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`
          }
        }).finally(() => {
          this.showLoading = 0;
        }).then((response) => {
          if (response.data && response.data.suggestions && response.data.suggestions.length > 0) {
            this.list = response.data.suggestions;
          } else {
            this.list = [];
          }

          if (this.list.length === 0)
            this.warning = 'Нет вариантов удовлетворяющих запросу';
        })
      }
    },
  }
</script>
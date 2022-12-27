<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        required: false,
        default: null,
      },
      link: {
        type: Boolean,
        required: false,
        default: false,
      },
      to: {
        type: String,
        required: false,
        default: "/",
      },
    },
  };
</script>

<style lang="scss" scoped>
a, button {
  padding: 15px 14px;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 10px;
  display: inline-block;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.07em;
  outline: none;
}
a.black, button.black {
  color: $primary-black;
  border-color: #000;
}
a.green, button.green {
  color: $primary-white;
  background-color: $primary-green-light;
  border: none;
}
a.grey, button.grey {
  color: $primary-grey;
  border-color: $primary-grey;
}
</style>
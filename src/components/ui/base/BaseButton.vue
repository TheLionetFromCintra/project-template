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

  transition: color 0.3s linear, background-color 0.3s linear, border-color 0.3s linear, box-shadow 0.2s linear;
}
a.black, button.black {
  color: $primary-black;
  border-color: #000;

  &:hover {
    color: $primary-white;
    background-color: $primary-black;
  }
  &:focus, &:active, &:focus-within {
    box-shadow: 0px 4px 20px rgba(25, 25, 25, 0.42);
  }
}
a.green, button.green {
  color: $primary-white;
  background-color: $primary-green-light;
  border: none;
  &:hover {
    box-shadow: 0px 0px 5px rgba(66, 178, 141, 0.6), 0px 4px 15px rgba(33, 111, 85, 0.37);
  }
  &:focus, &:active, &:focus-within {
    background-color: #227C5E;
  }
}
a.grey, button.grey {
  color: $primary-grey;
  border-color: $primary-grey;
  &:hover {
    color: $primary-black;
    border-color: $primary-black;
  }
  &:focus, &:active, &:focus-within {
    filter: drop-shadow(0px 0px 12px rgba(25, 25, 25, 0.69));
  }
}
a.disabled, button.disabled {
  pointer-events: none;
  border: 1px solid #8F8F8F;
  background-color: transparent;
  color: #8F8F8F;
}
</style>
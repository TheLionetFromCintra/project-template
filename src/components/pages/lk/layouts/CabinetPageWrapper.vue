<template>
  <div class="wrapper">
    <h1 class="subtitle subtitle--cabinet">{{ title }}</h1>
    <slot name="desc"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
@media(max-width: $mobile_size) {
  .subtitle {
    padding: 0 24px;
  }
}
</style>
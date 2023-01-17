<template>
  <form @submit.prevent="$emit('submit')"
        novalidate
        class="form d-flex flex-column align-items-center"
  >
    <div class="top">
      <slot name="inputs"></slot>
    </div>
    <slot name="default"></slot>
  </form>
</template>

<script>
export default {
  emits: ['submit'],
}
</script>


<style lang="scss" scoped>
  .top {
    width: 100%;
  }
</style>
<template>
  <cabinet-page-wrapper title="Профиль">
    <template #content>
      <div class="content">
        profile page
      </div>
    </template>
  </cabinet-page-wrapper>
</template>
<script>
import CabinetPageWrapper from "@/components/pages/lk/layouts/CabinetPageWrapper";
export default {
  components: {CabinetPageWrapper}
}
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 48px;
  }
</style>
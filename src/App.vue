<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.initDictionary();
    this.initGetMe();
  },
  methods: {
    async initDictionary() {
      try {
        await this.$store.dispatch("dictionary/init");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    async initGetMe() {
      try {
        await this.$store.dispatch("app/update");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  }
}
</script>

<style lang="scss">
@import url("./assets/styles/reset.scss");
@import url("./assets/styles/main.scss");
</style>

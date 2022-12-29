<template>
  <poll-wrapper :current-step="currentStep" :max-step="maxStep"></poll-wrapper>
  <the-footer class="m-0"></the-footer>
</template>

<script>
  import TheFooter from "@/components/layouts/TheFooter";
  import PollWrapper from "@/components/pages/poll/layouts/PollWrapper";

  export default {
    components: {PollWrapper, TheFooter},
    data() {
      return {
        currentStep: 1,
        maxStep: 3,
      };
    }
  }
</script>

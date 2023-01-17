<template>
  <poll-step :show-calc="false" :show-title="false" width-class="final">
    <h1 class="subtitle subtitle--poll">Отказаться от подписки</h1>
    <div class="banner"></div>
    <router-view></router-view>
  </poll-step>
</template>

<script>
import PollStep from "@/components/pages/poll/layouts/PollStep";

export default {
  components: {PollStep},
  mounted() {
    this.createBanner();
  },
  methods: {
    createBanner() {
      const innerScript = document.createElement('script');
      const rtb = document.createElement('div');
      rtb.className = 'rtb';
      rtb.style.marginBottom = '36px';
      rtb.style.padding = '24px 24px 0 24px';
      innerScript.innerHTML = `
            let banner = null;
            if(!banner) {
             banner = document.querySelector(".rtb");
            }

            if(banner.parentNode.offsetWidth < 969) {
                banner.innerHTML = '<ins class="dd15595d" data-cp-size="300" data-key="4f6a6e2450671bdf31d6bb8cab106701"></ins><ins class="dd15595d" data-cp-size="300" data-key="4f6a6e2450671bdf31d6bb8cab106701"></ins>';
            } else {
                banner.innerHTML = '<ins class="dd15595d" data-cp-size="970" data-key="4f6a6e2450671bdf31d6bb8cab106701"></ins><ins class="dd15595d" data-cp-size="970" data-key="4f6a6e2450671bdf31d6bb8cab106701"></ins>';
            }
     `;
      rtb.appendChild(innerScript);
      document.querySelector('.banner').prepend(rtb);

      const script = document.createElement('script');
      script.src = 'https://network.adsfin.pro/59918a10.js';
      script.defer = true;
      document.head.appendChild(script);
    },
  }
}
</script>

<style lang="scss" scoped>
  @media(max-width: $mobile_size) {
    .subtitle {
      display: block;
      padding: 0 24px;
      margin-bottom: 24px;
    }
  }
</style>
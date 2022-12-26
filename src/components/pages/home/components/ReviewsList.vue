<template>
  <div class="list">
    <swiper
        :speed="500"
        :navigation="true"
        :modules="modules"
        :pagination="{
        dynamicBullets: true,
      }"
    >
      <swiper-slide v-for="review in reviews" :key="review.description">
          <div class="slide">
            {{  review.name }}
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination } from "swiper";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        reviews: [
          {
            name: 'Анна',
            rate: 5,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
          {
            name: 'Жанна',
            rate: 3,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
          {
            name: 'Инна',
            rate: 4,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
        ],
      };
    },
    setup() {
      return {
        modules: [Navigation, Pagination],
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>
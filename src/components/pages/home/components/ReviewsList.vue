<template>
  <div class="list">
    <swiper
        class="mySwiper"
        :speed="500"
        :modules="modules"
        :effect="'cards'"
        :navigation="true"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
      }"
    >
      <swiper-slide v-for="review in reviews" :key="review.id">
          <div class="slide d-flex">
            <div class="img img-wrapper d-flex align-items-center justify-content-center">
              <img :src="require(`@/assets/images/reviews/${review.photo}.jpg`)" alt="user photo">
            </div>
            <div class="wrapper">
              <span class="name">{{ review.name }}</span>
              <div class="rate d-flex align-items-center">
                <div class="icon img-wrapper d-flex align-items-center justify-content-center" v-for="(num, index) in review.rate" :key="index">
                  <img src="@/assets/images/reviews/star.svg" alt="star icon">
                </div>
              </div>
              <p class="description text-overflow" :title="review.description">
                {{ review.description }}
              </p>
            </div>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, EffectCards } from "swiper";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/effect-cards";

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        reviews: [
          {
            id: 666,
            name: 'Анна',
            rate: 5,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
          {
            id: 667,
            name: 'Жанна',
            rate: 3,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend.',
            photo: 'anna',
          },
          {
            id: 668,
            name: 'Инна',
            rate: 4,
            description: '123213Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
        ],
      };
    },
    setup() {
      return {
        modules: [Navigation, Pagination, EffectCards],
      };
    },
  }
</script>

<style lang="scss" scoped>
  .reviews {
    .swiper-slide {
      width: 592px !important;
      height: 274px;
    }
  }
  .list {
    position: relative;
    border-radius: 8px;
    perspective: 1px;
    //overflow: hidden;
    width: 100%;
    height: 420px;
    margin: 0 auto;
  }
  .slide {
    width: 592px;
    //height: 274px;
    height: 320px;
    background-color: #FAFAFA;
    box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01), 0px 131px 78px rgba(205, 207, 210, 0.05), 0px 58px 58px rgba(205, 207, 210, 0.09), 0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
    border-radius: 10px;
    padding: 20px 24px;
  }
  .img {
    max-width: 201px;
    height: 201px;
    border-radius: 10px;
    margin-right: 27px;
  }
  .name, .description {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
  }
  .name {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .description {
    line-height: 24px;
    max-width: 294px;
    -webkit-line-clamp: 7;
  }
  .rate {
    margin-bottom: 12px;
    .icon {
      max-width: 18px;
      height: 18px;
    }
    .icon + .icon {
      margin-left: 6px;
    }
  }
</style>
<template>
  <div class="list">
    <swiper
        class="mySwiper"
        :speed="500"
        :modules="modules"
        :grabCursor="true"
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

  import mobileMixin from "@/mixins/mobile";

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    mixins: [mobileMixin],
    data() {
      return {
        reviews: [
          {
            id: this.getRandomInt(),
            name: 'Анна',
            rate: 5,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
          {
            id: this.getRandomInt(),
            name: 'Жанна',
            rate: 3,
            description: 'Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend.',
            photo: 'anna',
          },
          {
            id: this.getRandomInt(),
            name: 'Инна',
            rate: 4,
            description: '123213Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
          {
            id: this.getRandomInt(),
            name: 'Инга',
            rate: 4,
            description: '123213Lorem ipsum dolor sit amet consectetur. Non orci elit quis urna dictum eleifend. Dictum facilisi egestas feugiat pellentesque ultrices id purus urna.',
            photo: 'anna',
          },
        ],
      };
    },
    methods: {
      getRandomInt() {
        return Math.floor(Math.random() * 100000000);
      }
    },
    setup() {
      return {
        modules: [Navigation, Pagination, EffectCards],
      };
    },
  }
</script>

<style lang="scss" scoped>
  .swiper {
    width: 592px;
    height: 320px;
  }
  .swiper-slide {
    border-radius: 10px;
    max-height: 274px;
    box-shadow:  0px 15px 30px rgba(180, 185, 204, 0.08), 0px 0px 0px rgba(135, 135, 135, 0.42);
  }
  .list {
    position: relative;
    width: 100%;
    height: 380px;
    margin: 0 auto;
  }
  .slide {
    background-color: #FAFAFA;
    padding: 20px 24px;
    height: 234px;
  }
  .img {
    max-width: 201px;
    height: 201px;
    border-radius: 10px;
    margin-right: 27px;
    flex-shrink: 0;
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
  @media(max-width: $tablet_size) {
    .swiper {
      width: 500px;
    }
  }
  @media(max-width: $mobile_size) {
    .swiper {
      width: 320px;
      height: 180px;
      @media(max-width: 374px) {
        width: 290px;
      }
    }
    .swiper-slide {
      max-height: 180px;
    }
    .list {
      height: 225px;
    }
    .slide {
      padding: 20px 14px 20px 20px;
      height: 140px;
    }
    .img {
      max-width: 100px;
      height: 100px;
      margin-right: 22px;
    }
    .name {
      margin-bottom: 8px;
    }
    .description {
      font-size: 12px;
      line-height: 18px;
      max-width: 100%;
      -webkit-line-clamp: 4;
    }
    .rate {
      margin-bottom: 8px;
      .icon {
        max-width: 12px;
        height: 12px;
      }
    }
  }
</style>
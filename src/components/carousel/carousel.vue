<template>
  <div>
    <VueSlickCarousel
        v-bind="settings"
        ref="carousel"
    >
        <carouselItem
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"/>
    </VueSlickCarousel>
    <button @click="showPrev" class="prev"></button>
    <button @click="showNext" class="next"></button>

  </div>
</template>

<script>

import carouselItem from "@/components/carouselItem/carouselItem";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "vCarousel",
  components: {
    carouselItem,
    VueSlickCarousel,
  },
  props: {
    carousel_data: {
      type: Array,
      default:() => []
    }
  },
  data() {
    return {
      settings: {
        "dots": true,
        "arrows": false,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "focusOnSelect": true,
        "responsive": [
          {
            "breakpoint": 585,
            "settings": {
            }
          }
        ]
      }
    }
  },

  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },

}
</script>

<style scoped lang="scss">

  .next,
  .prev {
    position: absolute;
    top: 150px;
    bottom: 0;
    width: 40px;
    height: 40px;
    border:  none;
    background-image: url("../../../public/images/arrow.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      cursor: pointer;
      background-image: url("../../../public/images/arrow_hover.svg");
    }
  }

  .next {
    transform: rotate(270deg);
    right: -45px;
  }

  .prev {
    transform: rotate(90deg);
    left: -45px;
  }

  @media screen and (max-width: 585px) {
    .next,
    .prev {
      display: none;
    }
  }

</style>
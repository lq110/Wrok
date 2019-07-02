<template>
  <swiper :options="swiperOption">
    <!-- key 一般用它的唯一值  尽量不用索引-->
    <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
      <img :src="slide.imgurl" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "carrousel",
  props: {
    swiperSlides: {
      type: Array,
      default: () => [5, 6, 7]
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.swiper-slide img {
  width: 100%;
  height: 500px;
}
</style>


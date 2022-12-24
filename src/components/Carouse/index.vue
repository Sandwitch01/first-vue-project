<template>
  <div class="swiper-container" ref="imgSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imgList" :key="img.id">
        <img :src="img.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carouse",
  props:{
    imgList:{
      type:Array,
      default:[]
    }
  },
  watch:{
    imgList:{
      handler(newValue,oldValue){
        this.$nextTick(()=>{
          new Swiper(
              this.$refs.imgSwiper,
              {
                loop: true,
                autoplay: true,//可选选项，自动滑动
                pagination: {
                  el: '.swiper-pagination',
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              }
          )
        })
      },
      immediate:true
    }
  }

}
</script>

<style scoped>

</style>
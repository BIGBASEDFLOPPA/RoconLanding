<script setup>
import ImageSlider from "@/components/features/ImageSlider.vue";
import slider1 from '@/assets/images/slider/slider1.webp'
import slider2 from '@/assets/images/slider/slider2.webp'
import slider3 from '@/assets/images/slider/slider3.webp'
import slider4 from '@/assets/images/slider/slider4.webp'


const sliderData = [
  {
    image: slider1,
    text: {
      title: 'Немного упругости',
      subtitle: 'Чуть-чуть сияния, и ощущение, что вы о себе позаботились'
    }
  },
  {image: slider2, text: null},
  {image: slider3, text: null},
  {image: slider4, text: null},
  {image: slider1, text: null}
]
</script>

<template>
  <section class="slider-container">
    <ImageSlider :slides="sliderData"/>
  </section>
</template>

<style scoped>
.slider-container {
  padding-bottom: 96px;
  width: 100%;
}

@media (max-width: 960px) {
  .slider-container {
    padding-bottom: 64px;
  }
}
</style>
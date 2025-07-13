<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import BtnBase from '@/components/UI/BtnBase.vue'

const props = defineProps({
  slides: Array
})

const promoVisible = ref(false)
const currentIndex = ref(0)
const slider = ref(null)

const slidesToShow = 4
const slideWidth = 300

function updateVisibility() {
  const width = window.innerWidth
  promoVisible.value = width > 640
  updatePosition()
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('resize', updateVisibility)
  if (slider.value) {
    slider.value.addEventListener('mousedown', touchStart)
    slider.value.addEventListener('touchstart', touchStart, {passive: true})
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibility)
  if (slider.value) {
    slider.value.removeEventListener('mousedown', touchStart)
    slider.value.removeEventListener('touchstart', touchStart)
  }
})

function updatePosition() {
  if (slider.value) {
    slider.value.style.transform = `translateX(-${currentIndex.value * slideWidth}px)`
  }
}

function nextSlide() {
  const totalSlides = props.slides.length + (promoVisible.value ? 1 : 0)
  if (currentIndex.value < totalSlides - slidesToShow) {
    currentIndex.value++
    updatePosition()
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    updatePosition()
  }
}

let isDragging = false
let startX = 0
let currentTranslate = 0
let prevTranslate = 0
let animationID
let sliderContainer = null

function touchStart(event) {
  isDragging = true
  sliderContainer = slider.value
  startX = getX(event)
  prevTranslate = -currentIndex.value * slideWidth
  currentTranslate = prevTranslate
  animationID = requestAnimationFrame(animation)
  document.addEventListener('mousemove', touchMove)
  document.addEventListener('mouseup', touchEnd)
  document.addEventListener('touchmove', touchMove)
  document.addEventListener('touchend', touchEnd)
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  const totalSlides = props.slides.length + (promoVisible.value ? 1 : 0)
  if (Math.abs(movedBy) > 10) {
    if (movedBy < -100 && currentIndex.value < totalSlides - slidesToShow) {
      currentIndex.value++
    } else if (movedBy > 100 && currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  updatePosition()

  document.removeEventListener('mousemove', touchMove)
  document.removeEventListener('mouseup', touchEnd)
  document.removeEventListener('touchmove', touchMove)
  document.removeEventListener('touchend', touchEnd)
}

function touchMove(event) {
  if (!isDragging) return
  const currentX = getX(event)
  const deltaX = currentX - startX
  const maxTranslate = 0
  const totalSlides = props.slides.length + (promoVisible.value ? 1 : 0)
  const minTranslate = -(totalSlides - slidesToShow) * slideWidth
  currentTranslate = Math.min(maxTranslate, Math.max(minTranslate, prevTranslate + deltaX))
}

function getX(event) {
  return event instanceof TouchEvent ? event.touches[0].clientX : event.clientX
}

function animation() {
  if (sliderContainer) {
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  }
  if (isDragging) {
    animationID = requestAnimationFrame(animation)
  }
}
</script>

<template>
  <div class="slider-wrapper">

    <h2 v-if="!promoVisible">
      Это — не совсем то, что вы думаете
    </h2>

    <div ref="slider" class="slider">

      <div v-if="promoVisible" class="slide promo-slide" key="promo-slide">
        <h2>Это — не <br> совсем то, что<br> вы думаете</h2>
      </div>
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" class="slide-img"/>
        <div v-if="slide.text" class="overlay">
          <h3>{{ slide.text.title }}</h3>
          <p>{{ slide.text.subtitle }}</p>
        </div>
      </div>

    </div>

    <div class="arrows" v-if="promoVisible">
      <BtnBase @click="prevSlide" size="m" bg="white" class="arrow" no-hover>
        <img src="@/assets/icons/bigBlackArrow.svg" alt="icon"/>
      </BtnBase>
      <BtnBase @click="nextSlide" size="m" no-hover class="arrow">
        <img src="@/assets/icons/bigArrow.svg" alt="icon"/>
      </BtnBase>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.slider-wrapper {
  width: 100%;
  max-width: 1160px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.mobile-heading {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.slider {
  display: flex;
  transition: transform 0.3s ease;
  cursor: grab;
  user-select: none;
  will-change: transform;
}

.slide {
  flex: 0 0 auto;
  width: min(300px, 100%);
  height: clamp(250px, 50vw, 450px);
  margin-right: 10px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide:last-child {
  margin-right: 0;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  user-select: none;
  pointer-events: none;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  color: white;
  width: 100%;
  border-radius: 0 0 16px 16px;
  background: linear-gradient(to top, rgba(0, 128, 0, 0.6), transparent);
}

.promo-slide {
  background: transparent;
  display: flex;
  padding: 0 10px;
  align-items: stretch
}


.arrows {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 10px;
}

.arrow {
  padding: 0;
}

@media (max-width: 640px) {
  .slide {
    flex: 0 0 calc((100% - (2 * 10px)) / 3);
    min-width: 250px;
    height: clamp(250px, 45vw, 350px);
  }
}
</style>

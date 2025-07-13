<script setup>
import {ref, onMounted} from "vue"
import Loader from "@/components/ui/Loader.vue"
import BtnBase from "@/components/ui/BtnBase.vue"

const isLoading = ref(true)
const loadError = ref(false)
const mapInitialized = ref(false)

function loadYandexMapScript(callback, onError, timeoutMs = 10000) {
  if (window.ymaps) {
    callback()
    return
  }

  const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]')
  if (existingScript) existingScript.remove()

  const script = document.createElement("script")
  script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
  script.type = "text/javascript"

  const timeout = setTimeout(() => {
    script.remove()
    onError(new Error("Timeout loading Yandex Maps"))
  }, timeoutMs)

  script.onload = () => {
    clearTimeout(timeout)
    callback()
  }

  script.onerror = () => {
    clearTimeout(timeout)
    onError(new Error("Failed to load Yandex Maps"))
  }

  document.head.appendChild(script)
}

function initMap() {
  if (!window.ymaps) {
    loadError.value = true
    isLoading.value = false
    return
  }

  if (mapInitialized.value) return
  mapInitialized.value = true

  ymaps.ready(() => {
    new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 12,
      controls: ["zoomControl", "typeSelector", "fullscreenControl"]
    })

    isLoading.value = false
  })
}

function loadMap() {
  isLoading.value = true
  loadError.value = false

  loadYandexMapScript(
      () => initMap(),
      () => {
        isLoading.value = false
        loadError.value = true
      },
      10000
  )
}

function retry() {
  mapInitialized.value = false

  const oldMap = document.getElementById("map")
  if (oldMap?.parentNode) {
    const newMap = document.createElement("div")
    newMap.id = "map"
    oldMap.parentNode.replaceChild(newMap, oldMap)
  }

  setTimeout(() => {
    loadMap()
  }, 100)
}

onMounted(() => {
  loadMap()
})
</script>

<template>
  <div class="map-wrapper">
    <Loader v-if="isLoading" text="Загружаем карту..." :size="32"/>

    <div v-else-if="loadError" class="map-error">
      <p>
        Если карта не загружается, скорее всего, причина в активном VPN.
        Рекомендуем временно отключить его и обновить страницу.
      </p>
      <BtnBase @click="retry" bg="error" size="l">Попробовать ещё раз</BtnBase>
    </div>

    <div id="map"/>
  </div>
</template>

<style scoped>
.map-wrapper {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  min-height: 400px;
}

#map {
  width: 100%;
  height: 500px;
}

.map-error {
  background: #ffeaea;
  color: #a33;
  padding: 24px;
  border-radius: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
</style>

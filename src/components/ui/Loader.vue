<template>
  <div class="loader-wrapper">
    <span class="spinner" :style="{ width: size + 'px', height: size + 'px' }" />
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, default: '' },
  size: { type: Number, default: 32 },
})
</script>

<style scoped lang="scss">
.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4a6b56;
  font-size: 16px;
  gap: 12px;
  padding: 20px;
  background: #f7faf8;
  border-radius: 16px;
}

.spinner {
  border: 4px solid #bacfc1;
  border-top-color: #4a6b56;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <button
      :class="[
      'btn-base',
      sizeClass,
      bgClass,
      { 'btn-base--no-hover': noHover }
    ]"
      v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  size?: 's' | 'm' | 'l'
  bg?: 'white' | 'green' | 'error'
  noHover?: boolean
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 's': return 'btn-base--s'
    case 'm': return 'btn-base--m'
    case 'l': return 'btn-base--l'
    default: return 'btn-base--m'
  }
})

const bgClass = computed(() => {
  if (props.bg === 'white') return 'btn-base--white'
  if (props.bg === 'error') return 'btn-base--error'
  return 'btn-base--green'
})
</script>

<style scoped lang="scss">
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 0 16px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  > * {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 1;
    min-width: 0;
  }

  svg,
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &--s {
    height: 24px;
  }

  &--m {
    height: 27px;
  }

  &--l {
    height: 52px;
  }

  &--green {
    background-color: #1f8b48;
    color: white;

    &:not(.btn-base--no-hover):hover {
      background-color: #176934;
      color: white;
    }
  }

  &--white {
    background-color: white;
    color: black;
    border: 1px solid transparent;

    &:not(.btn-base--no-hover):hover {
      background-color: #1f8b48;
      color: white;
      border-color: transparent;
    }
  }

  &--error {
    background-color: #d64545;
    color: white;

    &:not(.btn-base--no-hover):hover {
      background-color: #b33a3a;
      color: white;
    }
  }
}
</style>

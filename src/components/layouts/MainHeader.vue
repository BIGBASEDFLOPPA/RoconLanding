<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-container">
        <img src="@/assets/icons/logo.png" alt="лого"/>
      </div>
      <button class="burger-button" @click="toggleMobileMenu">
        <img src="@/assets/icons/burgerIcon.svg" alt="кнопка"/>
      </button>
      <nav class="nav-buttons desktop-nav">
        <BtnBase
            v-for="(button, index) in buttons"
            :key="index"
            size="m"
            bg="white"
            @click="handleButtonClick(button.action)"
        >
          {{ button.label }}
        </BtnBase>
      </nav>
    </div>
    <transition name="slide">
      <nav v-if="isMobileMenuOpen" class="mobile-menu">
        <BtnBase
            v-for="(button, index) in buttons"
            :key="index"
            size="m"
            bg="white"
            class="mobile-btn"
            @click="handleButtonClick(button.action)"
        >
          {{ button.label }}
        </BtnBase>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import {ref} from 'vue';
import BtnBase from '@/components/ui/BtnBase.vue';

const buttons = [
  {label: 'О средстве', action: 'home'},
  {label: 'Состав', action: 'services'},
  {label: 'Вопросы', action: 'about'},
  {label: 'Отзывы', action: 'contact'},
  {label: 'Попробовать', action: 'contact'},
  {label: 'Для своих', action: 'contact'}
];

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleButtonClick = (action) => {
  console.log('Button action:', action);
  isMobileMenuOpen.value = false;
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  padding: 8px 10px;
  margin: 16px 0;
  height: 68px;
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

.nav-buttons.desktop-nav {
  display: flex;
  gap: 12px;

  @media (max-width: 840px) {
    display: none;
  }
}

.burger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 840px) {
    display: flex;
  }
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  padding: 16px;
  border-radius: 24px;
  margin: 0 24px 16px;
  z-index: 10;

  .mobile-btn {
    text-align: left;
  }

  @media (min-width: 840px) {
    display: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

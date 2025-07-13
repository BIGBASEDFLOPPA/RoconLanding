<script setup>
import BtnBase from '@/components/UI/BtnBase.vue'
import iconClock from '@/assets/icons/iconClock.svg'
import iconGeo from '@/assets/icons/iconGeo.svg'
import iconMail from '@/assets/icons/iconMail.svg'
import iconPhone from '@/assets/icons/iconPhone.svg'

const handleContactClick = () => {
  console.log('Кнопка "Связься" нажата')
}

const features = [
  {text: 'Офис, где делают странные, но симпатичные вещи', icon: iconGeo},
  {text: 'Пн-Пт с 10:00 до 20:00', icon: iconClock},
  {text: '8 (800) 444 44 44', icon: iconPhone},
  {text: '8 (800) 888 88 88', icon: iconPhone},
  {text: 'example@mail.ru', icon: iconMail}
]

const baseFeatures = features.slice(0, 2)
const phoneFeatures = features.slice(2, 4)
const mailFeature = features[4]
</script>

<template>
  <div class="contacts-info">
    <h2 class="contacts-title">Контакты</h2>

    <ul class="contacts-list">
      <li v-for="(item, i) in baseFeatures" :key="i">
        <img :src="item.icon" alt="icon"/>
        <span>{{ item.text }}</span>
      </li>

      <div class="phone-group">
        <li v-for="(item, i) in phoneFeatures" :key="'phone' + i">
          <img :src="item.icon" alt="icon"/>
          <span>{{ item.text }}</span>
        </li>
      </div>

      <li>
        <img :src="mailFeature.icon" alt="icon"/>
        <span>{{ mailFeature.text }}</span>
      </li>
    </ul>

    <BtnBase size="l" @click="handleContactClick" class="btn-send">
      <span>Отправить</span>
      <img src="@/assets/icons/bigArrowInverted.svg" alt="icon"/>
    </BtnBase>
  </div>
</template>

<style scoped lang="scss">
.contacts-info {
  background-color: #f9f9f9;
  width: 100%;
  border-radius: 24px;
  padding: 64px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 48px;
  }

  @media (max-width: 640px) {
    padding: 24px;
  }

  .contacts-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .contacts-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .phone-group {
      display: flex;
      gap: 2rem;
      margin-bottom: 1rem;

      li {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  }

  .btn-send {
    @media (max-width: 320px) {
      width: 100%;
    }
  }
}
</style>

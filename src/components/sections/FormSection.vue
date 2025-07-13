<template>
  <section class="form-section" :class="{ mobile: isMobile }">
    <div class="info-column">
      <h2 class="form-title">
        Если вы тоже решили<br />«а почему бы и нет»
      </h2>
      <ul class="features-list">
        <li class="feature-item" v-for="(item, i) in features" :key="i">
          <img class="icon" :src="smallArrow" alt="icon" />
          {{ item }}
        </li>
      </ul>
    </div>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-group">
          <input
              type="text"
              v-model="formData.name"
              class="form-input"
              required
              placeholder="Имя"
          />
        </div>
        <div class="form-group">
          <input
              type="tel"
              v-model="formData.phone"
              class="form-input"
              required
              placeholder="Телефон"
          />
        </div>
      </div>

      <div class="consent-info">
        <img src="@/assets/icons/iconCheck.svg" alt="icon" />
        <span>Согласен(-на) на обработку чего угодно — лишь бы форма работала</span>
      </div>

      <BtnBase size="l" bg="white" no-hover class="submit-btn">
        <span>Отправить</span>
        <img src="@/assets/icons/bigArrow.svg" alt="icon" />
      </BtnBase>
    </form>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import BtnBase from "@/components/UI/BtnBase.vue";
import smallArrow from "@/assets/icons/smallArrow.svg";

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const formData = ref({
  name: "",
  phone: "",
});

const features = [
  "Можно заказать много",
  "Доступ возможен через серверный интерфейс",
  "Можно просто поболтать",
];

const handleSubmit = () => {
  console.log("Форма отправлена:", formData.value);
  alert("Форма отправлена!");
};
</script>

<style scoped lang="scss">
.form-section {
  display: flex;
  justify-content: space-around;
  background-color: #1f8b48;
  padding: 48px;
  border-radius: 24px;
  margin-bottom: 96px;
  color: white;
  flex-wrap: nowrap;
  transition: all 0.3s ease;

  &.mobile {
    flex-direction: column;
    padding: 24px;
  }

  @media (max-width: 960px) {
    margin-bottom: 64px;
  }

  .form-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .info-column {
    flex: 1 1 auto;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    .feature-item {
      display: flex;
      align-items: center;
      padding-bottom: 16px;

      .icon {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 5px;
      }
    }
  }

  .contact-form {
    flex: 1 1 auto;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .form-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .form-group {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
      }
    }

    .form-input {
      padding: 0.75rem;
      border: 1px solid transparent;
      border-radius: 4px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: #aaa;
      }
    }

    .consent-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: nowrap;

      img {
        flex-shrink: 0;
      }
    }
    .submit-btn{
      width: 50%;
      min-width: 200px;
    }
    @media(max-width: 320px) {
      .submit-btn {
        width: 100%;
      }
    }
  }
}
</style>

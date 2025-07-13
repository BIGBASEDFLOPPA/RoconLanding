<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo-mobile">
        <img src="@/assets/icons/logo.png" alt="logo" />
      </div>

      <div class="footer__layout">
        <div class="footer__links">
          <ul class="footer__links-grid">
            <li><a class="footer__link" href="#">О системе</a></li>
            <li><a class="footer__link" href="#">Архитектура</a></li>
            <li><a class="footer__link" href="#">Для своих</a></li>
            <li><a class="footer__link" href="#">Состав</a></li>
            <li><a class="footer__link" href="#">Отзывы</a></li>
          </ul>
          <div class="footer__line" />
        </div>

        <div class="footer__info">
          <div class="footer__meta">
            <p>Коллаген © 2025</p>
            <a class="footer__link" href="#">Политика обработки чего-то личного</a>
          </div>
          <div class="footer__logo-desktop">
            <img src="@/assets/icons/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer {
  padding: 2rem 1rem;
  color: #333;

  &__content {
    max-width: 1160px;
    margin: 0 auto;
  }

  &__layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__links {
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      width: 100%;
      align-items: center;
    }
  }

  &__links-grid {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    li:nth-child(4),
    li:nth-child(5) {
      margin-top: 0.5rem;
    }

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  }

  &__link {
    font-family: 'Tilda Sans VF', sans-serif;
    text-decoration: none;
    color: #2e2d2b;
    transition: color 0.3s;

    &:hover {
      color: #666;
    }
  }

  &__info {
    flex: 1 1 40%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    text-align: right;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
      text-align: center;
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    @media (max-width: 768px) {
      align-items: center;
    }

    @media (max-width: 320px) {
      text-align: center;
    }
  }

  &__logo-mobile {
    display: none;
    text-align: center;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__logo-desktop {
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__line {
    display: none;
    width: 90%;
    height: 2px;
    background-color: black;
    margin: 2rem auto 0;

    @media (max-width: 768px) {
      display: block;
    }

    @media (max-width: 320px) {
      margin: 1rem auto;
    }
  }
}
</style>

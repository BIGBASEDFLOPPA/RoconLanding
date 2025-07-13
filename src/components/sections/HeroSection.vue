<template>
  <section class="hero-wrapper">
    <div class="hero">
      <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
      >
        <source src="@/assets/videos/heroVideo.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-left">
          <h1 v-if="windowWidth > 320">Просто потому <br /> что можем</h1>
          <template v-if="windowWidth > 480">
            <p v-if="windowWidth > 1200" v-html="texts.largeScreen" />
            <p v-else-if="windowWidth > 960" v-html="texts.mediumScreen" />
            <p v-else v-html="texts.smallScreen" />
            <BtnBase size="l" bg="green" no-hover>
              <span>Попробовать просто так</span>
              <img src="@/assets/icons/bigArrowInverted.svg" alt="icon" />
            </BtnBase>
          </template>
        </div>

        <div v-if="windowWidth > 480" class="certificate-absolute">
          <p>Сертификат есть. Но это не точно.</p>
          <p>СГР №AM.01.01.01.003.R.00 o47 4.06.24</p>
        </div>
      </div>
    </div>

    <div class="hero-below" v-if="windowWidth <= 480">
      <template v-if="windowWidth > 320">
        <p>{{ texts.mobileText }}</p>
        <BtnBase size="l" bg="green" no-hover>
          <span>Попробовать просто так</span>
          <img src="@/assets/icons/bigArrowInverted.svg" alt="icon" />
        </BtnBase>
        <div class="certificate">
          <p>Сертификат есть. Но это не точно.</p>
          <p>СГР №AM.01.01.01.003.R.00 o47 4.06.24</p>
        </div>
      </template>

      <template v-else>
        <h1>Просто потому что можем c Collagen</h1>
        <p>{{ texts.mobileText}}</p>
        <BtnBase size="l" bg="green" no-hover>
          <span>Попробовать просто так</span>
          <img src="@/assets/icons/bigArrowInverted.svg" alt="icon" />
        </BtnBase>
        <div class="certificate">
          <p>Сертификат есть. Но это не точно.</p>
          <p>СГР №AM.01.01.01.003.R.00 o47 4.06.24</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BtnBase from '@/components/UI/BtnBase.vue'

const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})

const texts = {
  largeScreen: `Мы запустили основной цикл в 06:42.<br>Результаты наблюдаются, но не зафиксированы.<br>Рекомендуем сохранять спокойствие до <br>следующего сигнала.`,
  mediumScreen: `Мы сделали это средство не ради прибыли, <br>а из любви к красивым словам. Один стик <br>в день — и вы чувствуете, что делаете что-то важное. Что<br>именно — решать вам.`,
  smallScreen: `Мы сделали это средство не ради прибыли, <br>а из любви к красивым словам. Один стик <br>в день — и вы чувствуете, что делаете что-то<br>важное. Что именно — решать вам.<br>и красивой!`,
  mobileText: `Мы сделали это средство не ради прибыли, а из любви к красивым словам.
Один стик в день — и вы чувствуете, что делаете что-то важное.
Что именно — решать вам.`,
}
</script>

<style scoped lang="scss">
.hero-wrapper {
  width: 100%;
  margin-bottom: 96px;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 960px) {
    margin-bottom: 64px;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 480px;
    background: #000;
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: 480px) {
      height: 200px;
    }

    &-video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
      border-radius: 24px;
    }

    &-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
      z-index: 2;
    }

    &-content {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 40px 40px 0;
      color: #fff;
      box-sizing: border-box;

      @media (max-width: 480px) {
        text-align: center;
        align-items: center;
      }

      .hero-left {
        position: absolute;
        top: 100px;
        max-width: 600px;

        h1 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          margin-bottom: 16px;
        }

        p {
          margin-bottom: 24px;
        }
      }

      .certificate-absolute {
        position: absolute;
        top: 350px;
        right: 32px;
        text-align: right;
        opacity: 0.8;
        max-width: 40vw;
        padding-left: 12px;
        box-sizing: border-box;
        word-wrap: break-word;
        word-break: break-word;

        @media (max-width: 960px) {
          top: 320px;
          right: 20px;
          max-width: 50vw;
        }

        @media (max-width: 720px) {
          top: 300px;
          right: 10px;
          max-width: 60vw;
        }

        @media (max-width: 630px) {
          top: 420px;
        }

        p {
          margin: 0;
          line-height: 1.3;
        }
      }
    }
  }

  .hero-below {
    padding: 24px 0;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .certificate {
      color: #848482;
    }
  }
}
</style>

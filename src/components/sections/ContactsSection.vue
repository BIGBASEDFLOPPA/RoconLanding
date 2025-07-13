<template>
  <section class="contacts-section">
    <ContactsInfo />
    <ContactsMap />
  </section>
</template>

<script setup>
import ContactsInfo from '../layouts/ContactsInfo.vue';
import ContactsMap from '../features/ContactsMap.vue';
</script>

<style scoped lang="scss">
.contacts-section {
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  max-width: 1160px;
  margin: 0;
  box-sizing: border-box;

  > * {
    flex: 1 1 100%;
    box-sizing: border-box;

    @media (min-width: 640px) {
      flex: 1 1 48%;
    }
  }
}
</style>

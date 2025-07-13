<script setup>
import MainHeader from "@/components/layouts/MainHeader.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import SliderSection from "@/components/sections/SliderSection.vue";
import FormSection from "@/components/sections/FormSection.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";
import MainFooter from "@/components/layouts/MainFooter.vue";
</script>

<template>
  <div class="container">
    <MainHeader/>
    <HeroSection/>
    <SliderSection/>
    <FormSection/>
    <ContactsSection/>
    <MainFooter/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
}


</style>


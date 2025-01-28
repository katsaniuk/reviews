<template>
  <div>
    <div class="language-switcher">
      <button @click="switchLanguage('en')">EN</button>
      <button @click="switchLanguage('ua')">UA</button>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const switchLanguage = (lang: 'en' | 'ua') => {
  locale.value = lang;
};
</script>

<style>
.language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}
.language-switcher button {
  margin-left: 0.5rem;
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
.language-switcher button:hover {
  background: #e0e0e0;
}
</style>

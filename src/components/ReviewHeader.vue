<template>
  <div class="review-header">
    <img :src="googleLogo" alt="Google Logo" class="logo" />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import googleLogo from '../assets/google.svg';

defineProps<{ title: string }>();
</script>

<style scoped>
.review-header {
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.logo {
  width: 40px;
  height: auto;
}

.title {
  font-family: 'Formular', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #394155;
  margin: 0;
}

@media (max-width: 1199px) and (min-width: 577px) {
  .review-header {
    gap: 0.5rem;
    align-items: flex-start;
  }
  .title {
    padding-top: 0.5rem;
  }
}

@media (max-width: 576px) and (min-width: 360px) {
  .review-header {
    flex-wrap: wrap;
  }
}
</style>

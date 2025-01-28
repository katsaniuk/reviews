<template>
  <div class="home-page">
    <h1>
      {{ $t('home.welcome') }}
    </h1>
    <p>{{ $t('home.description') }}</p>
    <router-link to="/reviews" class="nav-button">
      {{ $t('buttons.goToReviews') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
// Логіка домашньої сторінки
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
}

.nav-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #357abd;
}
</style>

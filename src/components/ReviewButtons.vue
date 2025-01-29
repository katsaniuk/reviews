<template>
  <div class="review-actions">
    <button class="secondary-button" @click="redirectToGoogle">
      {{ $t('buttons.goToGoogle') }}
    </button>
    <button class="primary-button" @click="$emit('open-modal')">
      {{ $t('buttons.customAction') }}
    </button>
  </div>
</template>

<script setup lang="ts">
const redirectToGoogle = () => {
  window.location.href = 'https://www.google.com';
};
</script>

<style scoped>
.review-actions {
  display: flex;
  gap: 12px;
  margin-left: auto;
}

.secondary-button,
.primary-button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Formular', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  transition: all 0.3s ease;
}

.secondary-button {
  background: linear-gradient(90.66deg, #3cb9a0 0.57%, #1786ac 99.43%);
  color: #394155;
}

.primary-button {
  background: linear-gradient(90deg, #e6f7f5 0%, #f8fcfc 100%);
  color: #394155;
}

.secondary-button:hover,
.primary-button:hover {
  background: #36a8a0;
  color: #ffffff;
}

@media (max-width: 576px) {
  .review-actions {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }

  .secondary-button,
  .primary-button {
    width: 100%;
  }
}
</style>

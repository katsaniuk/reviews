<template>
  <div class="review-component">
    <div class="review-block-logo">
      <div class="logo-container">
        <!-- Логотип -->
        <img :src="googleLogo" alt="Google Logo" class="logo" />

        <!-- Заголовок -->
        <h1 class="title">{{ review.title }}</h1>
      </div>

      <!-- Рейтинг та зірочки -->
      <div class="rating-container">
        <div class="rating-stars">
          <span class="rating-value">{{ review.rating }}</span>
          <div class="stars">
            <span v-for="starIndex in 5" :key="starIndex" class="star">
              <span class="empty">★</span>
              <span
                class="filled"
                :style="getStarStyle(starIndex, review.rating)"
                >★</span
              >
            </span>
          </div>
        </div>
        <div class="rating-info">
          <span class="reviews-count">
            ({{ review.reviewsCount }} {{ $t('review.reviewsCount') }})
          </span>
        </div>
      </div>
    </div>

    <div class="review-block-button">
      <!-- Кнопки -->
      <button class="secondary-button" @click="redirectToGoogle">
        {{ $t('buttons.goToGoogle') }}
      </button>
      <button class="primary-button" @click="showModal">
        {{ $t('buttons.customAction') }}
      </button>
    </div>

    <!-- Модальне вікно -->
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ $t('modal.thankYou') }}</h2>
        <button @click="closeModal" class="modal-close-btn">
          {{ $t('modal.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import googleLogo from '../assets/google.svg';

interface ReviewData {
  title: string;
  rating: number;
  reviewsCount: number;
}

const isModalVisible = ref(false);

const getStarStyle = (index: number, rating: number) => {
  const decimal = rating - (index - 1);
  return {
    width: decimal >= 1 ? '100%' : decimal <= 0 ? '0%' : `${decimal * 100}%`
  };
};

const redirectToGoogle = () => {
  window.location.href = 'https://www.google.com';
};

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

defineProps<{
  review: ReviewData;
}>();
</script>

<style scoped>
.review-component {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem auto;
  width: 90%;
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
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating-stars {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  font-size: 3rem;
  position: relative;
  color: #ddd;
}

.star {
  position: relative;
  margin: 0 2px;
  display: inline-block;
  size: 20px;
}

.empty {
  display: inline-block;
}

.filled {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  color: #ffd700;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.3s ease;
}

.rating-info {
  font-family: 'Formular', sans-serif;
  display: flex;
  gap: 0.5rem;
}

.rating-value {
  font-size: 24px;
  padding-top: 10px;
  color: #394155;
}

.reviews-count {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #394155;
}

.review-block-logo {
  display: flex;
  gap: 2rem;
}

.logo-container {
  display: flex;
  gap: 2rem;
}

@media (max-width: 1199px) and (min-width: 577px) {
  .review-component {
    align-items: start;
  }

  .review-block-logo {
    flex-direction: column;
    justify-content: center;
    gap: 0rem;
  }
  .review-block-button {
    margin-top: inherit;
  }
  .rating-container {
    align-items: center;
  }
}

@media (max-width: 576px) and (min-width: 360px) {
  .review-component {
    display: block;
  }
  .review-block-logo {
    display: block;
    width: 80%;
  }
  .review-block-button {
    flex-direction: column;
  }
  .rating-container {
    flex-direction: column;
    align-items: start;
  }
  .rating-info {
    padding-top: 6px;
    padding-bottom: 20px;
  }
}

.review-block-button {
  display: flex;
  gap: 12px;
  margin-left: auto;
}

.secondary-button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90.66deg, #3cb9a0 0.57%, #1786ac 99.43%);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  font-family: 'Formular', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #394155;
}

.secondary-button:hover {
  background: #36a8a0;
  color: #ffffff;
}

.primary-button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, #e6f7f5 0%, #f8fcfc 100%);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  font-family: 'Formular', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #394155;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background: #36a8a0;
  color: #ffffff;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.modal-close-btn {
  padding: 10px 20px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal-close-btn:hover {
  background: #357abd;
}
</style>

<template>
  <div>
    <router-link to="/" class="nav-button">
      {{ $t('buttons.backToHome') }}
    </router-link>
    <div
      v-for="(review, index) in reviews"
      :key="index"
      class="review-container"
    >
      <ReviewComponent :review="review" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ReviewComponent from '../components/ReviewComponent.vue';

interface ReviewData {
  title: string;
  rating: number;
  reviewsCount: number;
}

const reviews = ref<ReviewData[]>([]);

const fetchReviews = async () => {
  try {
    const response = await fetch(
      'https://6796af6bbedc5d43a6c5dfad.mockapi.io/reviews'
    );

    if (!response.ok) throw new Error('Error fetching reviews');

    const data: ReviewData[] = await response.json();
    console.log('Reviews fetched:', data);

    reviews.value = data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    // Приклад даних за замовчуванням
    reviews.value = [
      { title: 'Default Review 1', rating: 4.8, reviewsCount: 123 },
      { title: 'Default Review 2', rating: 4.2, reviewsCount: 98 }
    ];
  }
};

onMounted(() => {
  fetchReviews();
});
</script>

<style scoped>
.review-container {
  margin-bottom: 1rem;
}

.nav-button {
  display: inline-block;
  margin: 1rem;
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

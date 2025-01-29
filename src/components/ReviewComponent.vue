<template>
  <div class="review-component">
    <div class="review-block">
      <ReviewHeader :title="review.title" />
      <ReviewRating
        :rating="review.rating"
        :reviewsCount="review.reviewsCount"
      />
    </div>
    <ReviewActions @open-modal="showModal" />
    <ReviewModal v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ReviewHeader from './ReviewHeader.vue';
import ReviewRating from './ReviewRating.vue';
import ReviewActions from './ReviewButtons.vue';
import ReviewModal from './ReviewModal.vue';

interface ReviewData {
  title: string;
  rating: number;
  reviewsCount: number;
}

defineProps<{ review: ReviewData }>();

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
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
  transition: all 0.3s ease-in-out;
}

.review-block {
  display: flex;
  gap: 2rem;
}

@media (max-width: 1199px) and (min-width: 577px) {
  .review-component {
    gap: 0rem;
  }
  .review-block {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 576px) and (min-width: 360px) {
  .review-component {
    display: block;
  }
  .review-block {
    display: block;
  }
  .rating-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

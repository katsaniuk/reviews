<template>
  <div class="rating-container">
    <div class="rating-stars">
      <span class="rating-value">{{ rating }}</span>
      <div class="stars">
        <span v-for="index in 5" :key="index" class="star">
          <span class="empty">★</span>
          <span class="filled" :style="{ width: starWidth(index).value }"
            >★</span
          >
        </span>
      </div>
    </div>
    <span class="reviews-count">({{ reviewsCount }})</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ rating: number; reviewsCount: number }>();

const starWidth = (index: number) =>
  computed(() => {
    const diff = props.rating - (index - 1);
    return diff >= 1 ? '100%' : diff > 0 ? `${diff * 100}%` : '0%';
  });
</script>

<style scoped>
.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.rating-stars {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  transition: width 0.3s ease-in-out;
}

.rating-value {
  font-family: 'Formular', sans-serif;
  font-size: 24px;
  color: #394155;
}

.reviews-count {
  font-family: 'Formular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #394155;
}

@media (max-width: 576px) {
  .rating-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .stars {
    font-size: 3rem;
  }
}
</style>

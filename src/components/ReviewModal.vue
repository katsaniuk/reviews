<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <h2>{{ $t('modal.thankYou') }}</h2>
      <button @click="$emit('close')" class="modal-close-btn">
        {{ $t('modal.close') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
  position: relative;
}

.modal-close-btn {
  padding: 10px 20px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease-in-out;
}

.modal-close-btn:hover {
  background: #357abd;
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1.5rem;
  }

  .modal-close-btn {
    width: 100%;
  }
}
</style>

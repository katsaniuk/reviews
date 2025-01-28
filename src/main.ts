import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

// Імпорт повідомлень перекладу
import messages from './locales';

const i18n = createI18n({
  legacy: false, // Використовуємо Composition API
  globalInjection: true, // Дозволяє використовувати `$t` глобально
  locale: 'en', // Мова за замовчуванням
  fallbackLocale: 'en', // Резервна мова
  messages // Об'єкт із перекладами
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');

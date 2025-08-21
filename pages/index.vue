<script setup lang="ts">
useHead({
  title: 'Главная страница'
})
</script>

<template>
  <div class="home-page">
    <h1>Главная страница</h1>
    <p>Добро пожаловать в приложение управления пользователями</p>

    <div class="features">
      <h2>Возможности:</h2>
      <ul>
        <li>Просмотр списка пользователей</li>
        <li>Детальная информация о пользователе</li>
        <li>Модальные окна для просмотра данных</li>
      </ul>
    </div>

    <div class="actions">
      <NuxtLink to="/users" class="btn btn-primary">
        Перейти к пользователям
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.features {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.features ul {
  margin-left: 1.5rem;
}

.actions {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2980b9;
}
</style>

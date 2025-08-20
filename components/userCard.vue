<script setup lang="ts">
import type { IPersonDataDTO } from "~/types/PersonDataDTO";

defineProps<{
	user: IPersonDataDTO | null;
}>();
</script>

<template>
	<div v-if="user" class="user-card">
		<h2>{{ user.lastName }} {{ user.firstName }} {{ user.fatherName }}</h2>

		<div class="user-section">
			<h3>Персональные данные</h3>
			<p><strong>Дата рождения:</strong> {{ user.dateOfBirth }}</p>
			<p><strong>Возраст:</strong> {{ user.yearsOld }}</p>
			<p><strong>Телефон:</strong> {{ user.phone }}</p>
			<p><strong>Email:</strong> {{ user.email }}</p>
		</div>

		<div class="user-section">
			<h3>Паспортные данные</h3>
			<p>
				<strong>Серия/номер:</strong> {{ user.pasportSerial }}
				{{ user.pasportNumber }}
			</p>
			<p><strong>Код подразделения:</strong> {{ user.pasportCode }}</p>
			<p><strong>Выдан:</strong> {{ user.pasportOtd }}</p>
			<p><strong>Дата выдачи:</strong> {{ user.pasportDate }}</p>
		</div>

		<!-- Добавьте другие секции по аналогии -->
	</div>
</template>

<style scoped>
.user-card {
	padding: 20px;
}
.user-section {
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #eee;
}
.user-section h3 {
	margin-top: 0;
	color: #42b983;
}
</style>

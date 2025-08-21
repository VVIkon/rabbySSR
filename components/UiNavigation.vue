<script setup lang="ts">
	const props = defineProps<{
		authUser: string;
	}>();
</script>

<template>
	<nav class="navigation">
		<NuxtLink to="/" class="nav-link">Главная</NuxtLink>
		<NuxtLink to="/users" class="nav-link">Пользователи</NuxtLink>
		<div class="auth-user-wrapper">
			<span v-if="authUser" class="auth-user">{{ authUser }}</span>
		</div>
	</nav>
</template>

<style scoped>
.navigation {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: #2c3e50;
}

.nav-link {
	color: white;
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	transition: background-color 0.3s;
}

.nav-link:hover {
	background-color: #34495e;
}

.nav-link.router-link-active {
	background-color: #3498db;
}
.auth-user-wrapper {
	margin-left: auto;
}
.auth-user {
	font-weight: 500;
	color: white;
	margin-right: 0.5rem;
}
</style>

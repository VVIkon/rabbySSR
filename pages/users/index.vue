<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useUsersStore } from "~/stores/users";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const usersStore = useUsersStore();
const router = useRouter();

const isModalOpen = ref(false);

useHead({
	title: "Список пользователей",
});

onMounted(async () => {
	if (!authStore.isAuthenticated) {
		await router.push("/login");
	} else {
		await usersStore.fetchUsers();
	}
});

const handleLogout = () => {
	authStore.logout();
	router.push("/login");
};

const openUserModal = async (userId: string) => {
	await usersStore.fetchUser(userId);
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
};
</script>

<template>
	<div>
		<h1>Пользователи</h1>
		<button @click="handleLogout">Выйти</button>

		<div v-if="usersStore.isLoading">Загрузка...</div>
		<table v-else>
			<thead>
				<tr>
					<th>ID</th>
					<th>Имя</th>
					<th>Фамилия</th>
					<th>Действия</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in usersStore.users" :key="user.id">
					<td>{{ user.id }}</td>
					<td>{{ user.firstName }}</td>
					<td>{{ user.lastName }}</td>
					<td>
						<button @click="openUserModal(user.id)">
							Просмотр
						</button>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- Модальное окно -->
		<div v-if="isModalOpen" class="modal">
			<div class="modal-content">
				<span class="close" @click="closeModal">&times;</span>
				<UserCard
					v-if="usersStore.currentUser"
					:user="usersStore.currentUser"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
table {
	width: 100%;
	border-collapse: collapse;
}
th,
td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
}
th {
	background-color: #f2f2f2;
}
tr:nth-child(even) {
	background-color: #f9f9f9;
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal-content {
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	width: 80%;
	max-width: 600px;
	max-height: 80vh;
	overflow-y: auto;
}
.close {
	float: right;
	font-size: 28px;
	font-weight: bold;
	cursor: pointer;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const credentials = ref({
	login: "alla46",
	password: "81b62a119",
});
const isLoading = ref(false);
const error = ref("");

const handleLogin = async () => {
	try {
		isLoading.value = true;
		error.value = "";
		await authStore.login(credentials.value);
		await router.push("/");
	} catch (err) {
		error.value = "Неверные учетные данные";
	} finally {
		isLoading.value = false;
	}
};
</script>

<template>
	<div class="login-container">
		<h1>Авторизация</h1>
		<form @submit.prevent="handleLogin">
			<div class="form-group">
				<label for="login">Логин</label>
				<input
					id="login"
					v-model="credentials.login"
					type="text"
					required
				/>
			</div>
			<div class="form-group">
				<label for="password">Пароль</label>
				<input
					id="password"
					v-model="credentials.password"
					type="password"
					required
				/>
			</div>
			<button type="submit" :disabled="isLoading">
				{{ isLoading ? "Загрузка..." : "Войти" }}
			</button>
			<p v-if="error" class="error">{{ error }}</p>
		</form>
	</div>
</template>

<style scoped>
.login-container {
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
}
.form-group {
	margin-bottom: 15px;
}
label {
	display: block;
	margin-bottom: 5px;
}
input {
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
}
button {
	width: 100%;
	padding: 10px;
	background-color: #42b983;
	color: white;
	border: none;
	cursor: pointer;
}
button:disabled {
	background-color: #cccccc;
}
.error {
	color: red;
	margin-top: 10px;
}
</style>

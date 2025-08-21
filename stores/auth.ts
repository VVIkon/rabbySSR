import { defineStore } from "pinia";
import type { IPersonDataDTO } from "../types/PersonDataDTO";

interface ILoginResponse {
	token: string;
	user: IPersonDataDTO;
}

export const useAuthStore = defineStore("auth", () => {
	const user = ref<IPersonDataDTO | null>(null);
	const token = ref<string | null>(null);
	const isAuthenticated = computed(() => !!token.value);

	onMounted(() => {
		token.value = localStorage.getItem("auth_token");
	});

	const login = async (credentials: { login: string, password: string }) => {
		try {
			const response = await $fetch<ILoginResponse>("/api/auth/login", {
				method: "POST",
				body: credentials,
			});

			// Сохраняем токен
			token.value = response.token;
			user.value = response.user
			localStorage.setItem("auth_token", response.token);

			return response;
		} catch (error) {
			throw error;
		}
	};

	const logout = () => {
		token.value = null;
		user.value = null;
		localStorage.removeItem("auth_token");
	};

	return { user, token, isAuthenticated, login, logout };
});

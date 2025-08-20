import { defineStore } from "pinia";
import type { IPersonDataDTO } from "../types/PersonDataDTO";

export const useUsersStore = defineStore("users", () => {
	const users = ref<
		Array<{ id: string; firstName: string; lastName: string }>
	>([]);
	const currentUser = ref<IPersonDataDTO | null>(null);
	const isLoading = ref(false);
	const { $api } = useNuxtApp();

	const fetchUsers = async () => {
		isLoading.value = true;
		try {
			users.value = await $api('/api/users') || [];
		} finally {
			isLoading.value = false;
		}
	};

	const fetchUser = async (id: string) => {
		isLoading.value = true;
		try {
			currentUser.value = await $api(`/api/users/${id}`) || null;
		} finally {
			isLoading.value = false;
		}
	};

	return { users, currentUser, isLoading, fetchUsers, fetchUser };
});

export default defineNuxtRouteMiddleware(async (to) => {
	const authStore = useAuthStore();
	const router = useRouter();

	if (to.path === "/login") {
		if (authStore.isAuthenticated) {
			return navigateTo("/");
		}
		return;
	}

	if (!authStore.isAuthenticated) {
		return navigateTo("/login");
	}
});

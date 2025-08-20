export default defineNuxtPlugin(() => {
	//   const { token } = useAuth(); // Ваш хук для работы с аутентификацией
	const auth = useAuthStore();

	// Перехватчик для $fetch
	const $api = $fetch.create({
		onRequest({ options }) {
			// Добавляем токен к заголовкам, если он есть
			if (auth?.token) {
				const headers = new Headers(options.headers as HeadersInit);
				headers.set("Authorization", `Bearer ${auth.token}`);
				options.headers = headers;
			}
		},
		onRequestError({ error }) {
			console.error("Request error:", error);
		},
	});

	// Делаем $api доступным глобально
	return {
		provide: {
			api: $api,
		},
	};
});

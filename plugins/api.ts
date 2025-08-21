export default defineNuxtPlugin(() => {
	const auth = useAuthStore();

	// Перехватчик для $fetch
	const $api = $fetch.create({
		onRequest({ options }) {
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

	return {
		provide: {
			api: $api,
		},
	};
});

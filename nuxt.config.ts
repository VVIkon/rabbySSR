// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@pinia/nuxt"],
	css: ["./assets/css/main.css"],
	plugins: ["~/plugins/api.ts"],
	nitro: {
		routeRules: {
			"/api/**": {
				cors: true,
				headers: {
					"Access-Control-Allow-Methods": "GET,POST",
				},
			},
		},
		externals: {
			inline: ["jsonwebtoken"],
		},
	},
	runtimeConfig: {
		jwtSecret: process.env.JWT_SECRET,
		public: {
			apiBase: "/api",
			appUrl: process.env.APP_URL || "http://localhost:3000",
		},
	},

	typescript: {
		typeCheck: true,
		strict: true,
		tsConfig: {
			// compilerOptions: {
			// 	types: ["~/types/global"],
			// },
		},
	},
});

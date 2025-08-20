declare module "nitropack" {
	interface RuntimeConfig {
		jwtSecret: string;
	}
	interface PublicRuntimeConfig {
		apiBase: string;
	}
}

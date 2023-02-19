declare namespace NodeJS {
	interface ProcessEnv {
		readonly NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT: string;
		readonly NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: string;
		readonly NEXT_PUBLIC_GA_ID: string;
		readonly SENDGRID_API_KEY: string;
		readonly GITHUB_TOKEN: string;
		readonly GITHUB_USERNAME: string;
		readonly GOOGLE_RECAPTCHA_SECRET_KEY: string;
	}
}

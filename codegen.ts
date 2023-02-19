import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir, true);

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		'https://api.github.com/graphql': {
			headers: {
				Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
				'User-agent': `${process.env.GITHUB_USERNAME}`,
			},
		},
	},
	documents: ['./src/queries/**/*.ts'],
	ignoreNoDocuments: true,
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;

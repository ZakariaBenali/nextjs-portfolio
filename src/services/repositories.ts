import axios from 'axios';
import { GetRepositoriesQuery } from 'gql/graphql';
import { GetRepositories } from 'queries/repositories.queries';

export const getRepositories = async () => {
	const { data } = await axios<{ data: GetRepositoriesQuery }>(process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
		data: {
			query: GetRepositories,
		},
	});

	return data;
};

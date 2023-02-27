export const GetRepositories = /* GraphQL */ `
	query GetRepositories {
		viewer {
			repositories(
				first: 9
				orderBy: { field: STARGAZERS, direction: DESC }
				isFork: false
				ownerAffiliations: [OWNER]
				privacy: PUBLIC
			) {
				edges {
					node {
						id
						name
						description
						url
						stargazers {
							totalCount
						}
						forks {
							totalCount
						}
						watchers {
							totalCount
						}
						repositoryTopics(first: 5) {
							nodes {
								topic {
									name
								}
							}
						}
					}
				}
			}
		}
	}
`;

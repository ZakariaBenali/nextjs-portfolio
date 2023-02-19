/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
	'\n\tquery GetRepositories {\n\t\tviewer {\n\t\t\trepositories(\n\t\t\t\tfirst: 8\n\t\t\t\torderBy: { field: STARGAZERS, direction: DESC }\n\t\t\t\tisFork: false\n\t\t\t\townerAffiliations: [OWNER]\n\t\t\t\tprivacy: PUBLIC\n\t\t\t) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\turl\n\t\t\t\t\t\tstargazers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\tforks {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\twatchers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\trepositoryTopics(first: 5) {\n\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\ttopic {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetRepositoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetRepositories {\n\t\tviewer {\n\t\t\trepositories(\n\t\t\t\tfirst: 8\n\t\t\t\torderBy: { field: STARGAZERS, direction: DESC }\n\t\t\t\tisFork: false\n\t\t\t\townerAffiliations: [OWNER]\n\t\t\t\tprivacy: PUBLIC\n\t\t\t) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\turl\n\t\t\t\t\t\tstargazers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\tforks {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\twatchers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\trepositoryTopics(first: 5) {\n\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\ttopic {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery GetRepositories {\n\t\tviewer {\n\t\t\trepositories(\n\t\t\t\tfirst: 8\n\t\t\t\torderBy: { field: STARGAZERS, direction: DESC }\n\t\t\t\tisFork: false\n\t\t\t\townerAffiliations: [OWNER]\n\t\t\t\tprivacy: PUBLIC\n\t\t\t) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\turl\n\t\t\t\t\t\tstargazers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\tforks {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\twatchers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t\trepositoryTopics(first: 5) {\n\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\ttopic {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
	infer TType,
	any
>
	? TType
	: never;

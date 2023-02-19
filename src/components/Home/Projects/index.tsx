import { BodySection } from 'components/common/BodySection';
import { SectionTitle } from 'components/common/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { FC } from 'react';
import { RepositoryEdge } from 'gql/graphql';

interface Props {
	repositories: RepositoryEdge[];
}

const Projects: FC<Props> = ({ repositories }) => {
	return (
		<BodySection id="projects">
			<div className="container">
				<SectionTitle title="Open sources." />
				<div className="flex flex-wrap">
					{repositories.map(({ node }, i) => (
						<ProjectCard key={node?.id ?? i} node={node} />
					))}
				</div>
			</div>
		</BodySection>
	);
};

export { Projects };

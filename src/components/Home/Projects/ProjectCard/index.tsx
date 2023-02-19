import Show from 'assets/icons/show.svg';
import Fork from 'assets/icons/fork.svg';
import Star from 'assets/icons/star.svg';
import { FC } from 'react';
import { Maybe, Repository } from 'gql/graphql';
import { Description } from './Description';
import Link from 'assets/icons/link.svg';

interface Props {
	node?: Maybe<Repository>;
}

const ProjectCard: FC<Props> = ({ node }) => {
	if (!node) {
		return null;
	}
	const { name, description, url, repositoryTopics, watchers, stargazers, forks } = node;
	return (
		<div className="w-full pb-4 pr-4 xl:w-1/3">
			<a href={url} target="_blank" rel="noreferrer" className="relative flex flex-col h-full bg-white p-7 group">
				<Link className="absolute w-5 transition duration-300 -translate-x-2 translate-y-2 opacity-0 top-5 right-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
				<h3 className="mb-5 text-xl font-bold break-all sm:text-2xl">{name}</h3>
				<Description description={description} />
				<div className="mt-auto mb-5 overflow-hidden">
					{repositoryTopics.nodes && (
						<ul className="flex flex-wrap -ml-5 list-disc list-inside tags marker:text-gray-300 sm:text-base">
							{repositoryTopics.nodes.map((rt, i) => (
								<li key={i} className="pr-3 font-medium capitalize">
									{rt?.topic.name}
								</li>
							))}
						</ul>
					)}
				</div>
				<ul className="flex flex-wrap text-lg font-semibold sm:text-xl">
					<li className="flex items-center mr-8 text-property-primary">
						<Star className="w-5 h-5 mr-2 sm:w-6 sm:h-6" />
						{stargazers.totalCount}
					</li>
					<li className="flex items-center mr-8 text-property-secondary">
						<Show className="w-5 h-5 mr-2 sm:w-6 sm:h-6" />
						{watchers.totalCount}
					</li>
					<li className="flex items-center text-property-tertiary">
						<Fork className="w-6 h-6 mr-2 sm:h-7 sm:w-7" />
						{forks.totalCount}
					</li>
				</ul>
			</a>
		</div>
	);
};

export { ProjectCard };

import { Navbar } from 'components/common/Navbar';
import { Background } from 'components/common/Background';
import { Hero } from 'components/Home/Hero';
import { About } from 'components/Home/About';
import { Experience } from 'components/Home/Experience';
import { Work } from 'components/Home/Work';
import { Projects } from 'components/Home/Projects';
import { Contact } from 'components/Home/Contact';
import { Footer } from 'components/common/Footer';
import { GetStaticProps } from 'next';
import { RepositoryEdge } from 'gql/graphql';
import { SEO } from 'components/Home/SEO';
import { getRepositories } from 'services';

interface Props {
	repositories: RepositoryEdge[];
}

export default function Home({ repositories }: Props) {
	const hasProjects = repositories.length > 0;
	return (
		<>
			<SEO />
			<Background />
			<Navbar hasProjects={hasProjects} />
			<Hero />
			<About />
			<Experience />
			<Work />
			{hasProjects && <Projects repositories={repositories} />}
			<Contact />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const revalidate = 10;
	try {
		const repositories = await getRepositories();
		return {
			revalidate,
			props: {
				repositories: repositories.data.viewer.repositories.edges,
			},
		};
	} catch (err) {
		return {
			revalidate,
			props: {
				repositories: [],
			},
		};
	}
};

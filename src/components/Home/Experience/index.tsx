import { BodySection } from 'components/common/BodySection';
import { SectionTitle } from 'components/common/SectionTitle';
import { FC } from 'react';
import { experiences } from 'data/experience';
import { Tab, TabList, TabPanel, Tabs } from 'react-with-tabs';
import { ExperienceSingle } from './ExperienceSingle';

const Experience: FC = () => {
	return (
		<BodySection className="text-white bg-footer-bg" id="experience">
			<div className="container flex flex-col items-center">
				<SectionTitle title="Where I've worked." className="text-center" />
				<Tabs selectedClassName="pointer-events-none !text-white" className="flex flex-col items-center">
					<TabList>
						{experiences.map((d, i) => (
							<Tab
								className="px-6 py-2 mb-2 text-2xl font-semibold bg-black cursor-pointer font-outfit hover:text-primary-500 text-white/60"
								key={i}
							>
								{d.company}
							</Tab>
						))}
					</TabList>
					{experiences.map((experience, i) => (
						<TabPanel key={i}>
							<ExperienceSingle {...experience} />
						</TabPanel>
					))}
				</Tabs>
			</div>
		</BodySection>
	);
};

export { Experience };

import { BodySection } from 'components/common/BodySection';
import { SectionTitle } from 'components/common/SectionTitle';
import { TabList } from './Tabs/TabList';
import { Tab } from './Tabs/Tab';
import { TabPanel } from './Tabs/TabPanel';
import { FC, useState } from 'react';
import { experiences } from 'data/experience';

const Experience: FC = () => {
	const [selected, setSelected] = useState(0);
	return (
		<BodySection className="text-white bg-footer-bg" id="experience">
			<div className="container flex flex-col items-center">
				<SectionTitle title="Where I’ve worked." className="text-center" />
				<div className="flex flex-col items-center">
					<TabList>
						{experiences.map((d, i) => (
							<Tab key={i} selected={i === selected} onClick={() => setSelected(i)}>
								{d.company}
							</Tab>
						))}
					</TabList>
					{experiences.map((experience, i) => {
						if (selected === i) {
							return <TabPanel key={i} {...experience} />;
						}
					})}
				</div>
			</div>
		</BodySection>
	);
};

export { Experience };

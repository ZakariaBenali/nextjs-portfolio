import { BodySection } from 'components/common/BodySection';
import { Divider } from 'components/common/Divider';
import { ServiceCard } from './ServiceCard';
import { SectionTitle } from 'components/common/SectionTitle';
import { FC } from 'react';
import { services } from 'data/services';
import { getColor } from 'helpers/getColor';
import { Description } from './Description';

const About: FC = () => {
	return (
		<BodySection id="about">
			<div className="container flex flex-wrap items-start p-5 lg:justify-center">
				<SectionTitle title="About me" className="mb-8 lg:mb-16" />
				<Divider className="hidden mx-8 mt-6 bg-black lg:block" />
				<Description />
				<div className="flex flex-wrap justify-center w-full mt-24">
					{services.map(({ text, title, color }, i) => (
						<ServiceCard key={i} title={title} color={color ?? getColor(i)}>
							{text}
						</ServiceCard>
					))}
				</div>
			</div>
		</BodySection>
	);
};

export { About };

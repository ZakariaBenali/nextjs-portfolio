import { BodySection } from 'components/common/BodySection';
import { SectionTitle } from 'components/common/SectionTitle';
import { WorkCard } from './WorkCard';
import { works } from 'data/work';
import { getColor } from 'helpers/getColor';

const Work = () => {
	return (
		<BodySection id="work">
			<div className="container">
				<SectionTitle title="Things I built." />
				<div className="flex flex-wrap">
					{works.map(({ color, ...rest }, i) => (
						<WorkCard key={i} color={color ?? getColor(i, '99')} {...rest} />
					))}
				</div>
			</div>
		</BodySection>
	);
};

export { Work };

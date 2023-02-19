import { BodySection } from 'components/common/BodySection';
import { SectionTitle } from 'components/common/SectionTitle';
import { FC } from 'react';
import { ContactForm } from './ContactForm';

const Contact: FC = () => {
	return (
		<BodySection id="contact">
			<div className="container xl:px-20">
				<SectionTitle title="Get in touch with me." />
				<ContactForm />
			</div>
		</BodySection>
	);
};

export { Contact };

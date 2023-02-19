import { FC } from 'react';
import { SocialLink } from './SocialLink';
import { socialLinks } from 'data/socialLinks';

const Socials: FC = () => {
	return (
		<ul className="flex flex-wrap mt-4 max-w-xs/2">
			{socialLinks.map((sLink, i) => (
				<li key={i}>
					<SocialLink href={sLink.destination} target="_blank" rel="noreferrer" title={sLink.title}>
						{sLink.icon}
					</SocialLink>
				</li>
			))}
		</ul>
	);
};

export { Socials };

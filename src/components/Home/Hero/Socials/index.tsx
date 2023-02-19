import { socialLinks } from 'data/socialLinks';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { SocialLink } from './SocialLink';

const Socials: FC = () => {
	return (
		<div className="flex flex-wrap py-5">
			{socialLinks.map((sLink, i) => (
				<motion.div
					className="my-2"
					key={i}
					initial={{
						x: -20,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						delay: (i + 1) / 10,
					}}
				>
					<SocialLink key={i} href={sLink.destination} target="_blank" rel="noreferrer" title={sLink.title}>
						{sLink.icon}
					</SocialLink>
				</motion.div>
			))}
		</div>
	);
};

export { Socials };

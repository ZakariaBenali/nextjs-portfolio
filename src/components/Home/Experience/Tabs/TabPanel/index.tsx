import { Technologies } from './Technologies';
import { Responsibilities } from './Responsibilities';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedDivider } from 'components/common/AnimatedDivider';
import { Experience } from 'data/experience';

const TabPanel: FC<Experience> = ({
	company,
	date,
	role,
	jobType,
	country,
	workArrangement,
	technologies,
	responsibilities,
}) => {
	return (
		<div className="relative flex flex-col mt-16 md:flex-row">
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				className="mr-6"
				transition={{
					delay: 0.1,
				}}
			>
				<div className="flex">
					<h3 className="text-lg">{date}</h3>
					<AnimatedDivider containerClasses="mt-3 ml-10" className="hidden bg-white md:block" />
				</div>
				<h3 className="mb-8 text-xl font-semibold text-secondary-400">
					{company}, {country}
				</h3>
				<p className="text-sm font-semibold">Technologies:</p>
				<Technologies data={technologies} />
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 0.2,
				}}
				className="mr-6"
			>
				<div>
					<h2 className="mb-2 text-2xl font-semibold">{role}</h2>
					<h3 className="mb-4 text-xl font-semibold text-secondary-400">
						{jobType}, {workArrangement}
					</h3>
					<Responsibilities data={responsibilities} />
				</div>
			</motion.div>
		</div>
	);
};

export { TabPanel };

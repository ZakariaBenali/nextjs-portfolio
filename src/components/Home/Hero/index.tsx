import { FC } from 'react';
import { Button } from 'components/common/Buttons/Button';
import { scrollIntoView } from 'helpers/scrollToView';
import { TransitionTextUp } from './TransitionTextUp';
import { MainHeading } from './MainHeading';
import { Socials } from './Socials';
import { motion } from 'framer-motion';
import { MainParagraph } from './MainParagraph';
import { AnimatedDivider } from 'components/common/AnimatedDivider';

const Hero: FC = () => {
	return (
		<section id="hero" className="relative pt-52 pb-28">
			<div className="container">
				<p className="pt-2 px-2 pb-2 lg:pb-3 text-xl font-medium lg:pt-4 lg:px-4  lg:!leading-11 lg:text-4xl bg-primary-100 w-fit">
					<TransitionTextUp>Software Developer & UI/UX Designer</TransitionTextUp>
				</p>
				<MainHeading>
					<span>Design and Code solutions</span>
					<span>for target costumers.</span>
				</MainHeading>
				<MainParagraph>
					<span>Creating leading websites with experiences that matter once </span>
					<span>a customer enters.</span>
				</MainParagraph>
				<div className="flex flex-wrap items-center mt-20">
					<motion.div
						initial={{
							y: 115,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 0.5,
						}}
					>
						<Button className="mr-4 lg:mr-0" onClick={() => scrollIntoView('projects')}>
							View projects
						</Button>
					</motion.div>
					<AnimatedDivider containerClasses="mx-8" />
					<Socials />
				</div>
			</div>
		</section>
	);
};

export { Hero };

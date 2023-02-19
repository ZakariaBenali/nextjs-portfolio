import { FC } from 'react';
import { motion } from 'framer-motion';
import { Divider, DividerProps } from './Divider';
import clsx from 'clsx';
interface Props extends DividerProps {
	containerClasses?: string;
}

const AnimatedDivider: FC<Props> = ({ length, containerClasses, ...rest }) => {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			className={clsx('hidden overflow-hidden lg:block', containerClasses)}
			variants={{
				initial: {
					width: 0,
				},
				animate: {
					width: `${length}px`,
				},
			}}
			transition={{
				duration: 0.3,
				ease: 'easeIn',
			}}
		>
			<Divider length={length} {...rest} />
		</motion.div>
	);
};

AnimatedDivider.defaultProps = {
	length: 80,
};

export { AnimatedDivider };

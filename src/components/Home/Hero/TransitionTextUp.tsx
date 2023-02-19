import clsx from 'clsx';
import { motion, Transition } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

interface Props {
	className?: string;
}
const TransitionTextUp: FC<PropsWithChildren<Props & Omit<Transition, 'ease'>>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<span className={clsx('inline-block overflow-hidden', className)}>
			<motion.span
				className="inline-block"
				initial={{
					y: 115,
				}}
				animate={{
					y: 0,
				}}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					...rest,
				}}
			>
				{children}
			</motion.span>
		</span>
	);
};

export { TransitionTextUp };

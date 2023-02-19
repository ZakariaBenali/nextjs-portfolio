import { FC } from 'react';
import { motion } from 'framer-motion';

const Spinner: FC<{ className: string }> = ({ className }) => {
	return (
		<div className={className}>
			<motion.div
				initial={{
					width: 0,
					height: '100%',
				}}
				animate={{
					width: '100%',
					height: '100%',
				}}
				transition={{
					duration: 0.4,
					delay: 0.3,
				}}
				className="overflow-hidden"
			>
				<motion.svg
					initial={{
						rotate: 0,
					}}
					animate={{
						rotate: '360deg',
					}}
					transition={{
						repeat: Infinity,
						duration: 1,
						delay: 0.4,
					}}
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="20" cy="20" r="19" stroke="currentFill" strokeWidth="2" />
					<path d="M20 0C8.9543 0 0 8.9543 0 20H2C2 10.0589 10.0589 2 20 2V0Z" fill="currentColor" />
				</motion.svg>
			</motion.div>
		</div>
	);
};

export { Spinner };

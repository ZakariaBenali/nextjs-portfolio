import { FC } from 'react';
import { motion } from 'framer-motion';

const Logo: FC = () => {
	return (
		<p className="text-2xl font-bold uppercase font-outfit">
			<span className="font-medium">Zakaria</span> Benali
			<motion.span
				className="inline-block  w-1.5 h-1.5 text-2xl rounded-full bg-primary-500"
				transition={{
					duration: 1,
					ease: 'easeOut',
					delay: 0.1,
				}}
				animate={{
					opacity: ['0%', '100%'],
					y: ['0%', '-100%', '0%', '-80%', '0%', '-50%', '0%', '-30%', '0%', '-10%', '0%'],
				}}
			></motion.span>
		</p>
	);
};

export { Logo };

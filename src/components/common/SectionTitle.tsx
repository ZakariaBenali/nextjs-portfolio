import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadElement> {
	title: string;
}

const SectionTitle: FC<Props> = ({ title, className, ...rest }) => {
	return (
		<h2 className={clsx('text-4xl lg:text-5xl font-bold font-outfit mb-16', className)} {...rest}>
			{title}
		</h2>
	);
};

export { SectionTitle };

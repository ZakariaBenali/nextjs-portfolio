import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const BodySection: FC<HTMLAttributes<HTMLScriptElement>> = ({ children, className, ...rest }) => {
	return (
		<section className={clsx('py-32 relative', className)} {...rest}>
			{children}
		</section>
	);
};

export { BodySection };

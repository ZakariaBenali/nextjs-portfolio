import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const BodySection: FC<PropsWithChildren & HTMLAttributes<HTMLScriptElement>> = ({ children, className, ...rest }) => {
	return (
		<section className={clsx('py-32 relative', className)} {...rest}>
			{children}
		</section>
	);
};

export { BodySection };

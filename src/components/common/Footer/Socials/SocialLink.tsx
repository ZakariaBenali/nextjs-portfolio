import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

const SocialLink: FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<a className={clsx('inline-block w-7 text-secondary-400 mr-4 mb-4', className)} {...rest}>
			{children}
		</a>
	);
};

export { SocialLink };

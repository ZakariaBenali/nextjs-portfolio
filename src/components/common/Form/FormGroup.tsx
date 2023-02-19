import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

const FormGroup: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ className, children, ...rest }) => {
	return (
		<div className={clsx('flex flex-col', className)} {...rest}>
			{children}
		</div>
	);
};

export { FormGroup };

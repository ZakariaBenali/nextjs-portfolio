import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

const FormGroup: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => {
	return (
		<div className={clsx('flex flex-col', className)} {...rest}>
			{children}
		</div>
	);
};

export { FormGroup };

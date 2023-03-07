import { FC, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

const FormLabel: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, className, ...rest }) => {
	return (
		<label className={clsx('text-xl font-semibold mb-4', className)} {...rest}>
			{children}
		</label>
	);
};

export { FormLabel };

import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	text: string;
}
const Tag: FC<Props> = ({ text, className, ...rest }) => {
	return (
		<span className={clsx('px-5 py-2 rounded-full text-xs font-semibold', className)} {...rest}>
			{text}
		</span>
	);
};

export { Tag };

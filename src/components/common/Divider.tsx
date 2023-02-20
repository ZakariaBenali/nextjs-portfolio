import { FC, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface DividerProps extends HTMLAttributes<HTMLSpanElement> {
	length?: number;
}
const Divider: FC<DividerProps> = ({ length, className, ...rest }) => {
	return (
		<div
			style={{
				height: '2px',
				width: `${length}px`,
			}}
			className={clsx('flex-shrink-0', className)}
			{...rest}
		></div>
	);
};

Divider.defaultProps = {
	length: 80,
};

export { Divider };

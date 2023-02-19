import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { FormControl, FormControlProps } from './FormControl';

type Props = FormControlProps & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = (props) => {
	const { className, error, ...rest } = props;
	return (
		<FormControl error={error}>
			<input
				className={clsx('placeholder:text-gray-400 outline-none bg-transparent h-14 w-full pl-5', className)}
				{...rest}
			/>
		</FormControl>
	);
};

export { Input };

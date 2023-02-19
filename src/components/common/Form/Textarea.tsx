import { FC, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import { FormControl, FormControlProps } from './FormControl';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & FormControlProps;

const Textarea: FC<Props> = ({ className, error, ...rest }) => {
	return (
		<FormControl error={error}>
			<textarea
				rows={6}
				className={clsx('placeholder:text-gray-400 outline-none w-full h-full bg-transparent pl-5 pt-4', className)}
				{...rest}
			></textarea>
		</FormControl>
	);
};

export { Textarea };

import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLLIElement> {
	selected?: boolean;
}

const Tab: FC<Props> = ({ selected, children, ...rest }) => {
	return (
		<li
			className={clsx('text-2xl py-2 px-6 font-outfit font-semibold bg-black mb-2 cursor-pointer', {
				'hover:text-primary-500 text-white/60': !selected,
				'pointer-events-none': selected,
			})}
			{...rest}
		>
			{children}
		</li>
	);
};

Tab.defaultProps = {
	selected: false,
};

export { Tab };

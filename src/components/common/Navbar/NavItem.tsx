import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
interface Props extends HTMLAttributes<HTMLLIElement> {
	showMenu: boolean;
}

const NavItem: FC<Props> = ({ className, showMenu, children, ...rest }) => {
	return (
		<li
			className={clsx(
				'flex-1 w-full border-b border-black/10 bg-body-bg flex items-center justify-center transition ease-in-out',
				'duration-300 lg:opacity-100 lg:translate-y-0 lg:pointer-events-all lg:bg-transparent lg:border-none lg:flex-none lg:w-auto',
				className,
				{
					'translate-y-10 opacity-0': !showMenu,
				},
			)}
			{...rest}
		>
			{children}
		</li>
	);
};

export { NavItem };

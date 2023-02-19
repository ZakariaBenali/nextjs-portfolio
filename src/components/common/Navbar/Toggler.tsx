import { FC } from 'react';
import clsx from 'clsx';

interface Props {
	showMenu: boolean;
	setShowMenu: () => void;
}
const Toggler: FC<Props> = ({ showMenu, setShowMenu }) => {
	return (
		<button
			type="button"
			aria-label="nav-toggler"
			onClick={() => setShowMenu()}
			className={clsx('relative flex flex-col justify-between w-8 h-6 transition ease-in-out duration-300 lg:hidden', {
				'rotate-90': showMenu,
			})}
		>
			<div
				className={clsx('absolute flex flex-col justify-between w-full h-full', {
					'opacity-0': showMenu,
				})}
			>
				<div className="w-full h-1 bg-black"></div>
				<div className="w-full h-1 bg-black "></div>
				<div className="w-full h-1 bg-black"></div>
			</div>
			<div
				className={clsx({
					'opacity-0': !showMenu,
				})}
			>
				<div className="absolute w-full h-1 rotate-45 -translate-y-1/2 bg-black top-1/2"></div>
				<div className="absolute w-full h-1 -rotate-45 -translate-y-1/2 bg-black top-1/2"></div>
			</div>
		</button>
	);
};

export { Toggler };

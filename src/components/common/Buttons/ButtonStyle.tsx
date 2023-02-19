import { FC, PropsWithChildren } from 'react';
import { Divider } from '../Divider';
import clsx from 'clsx';
import { Spinner } from './Spinner';

export interface ButtonStyleProps {
	isLoading?: boolean;
}

const ButtonStyle: FC<PropsWithChildren<ButtonStyleProps>> = ({ isLoading, children }) => {
	return (
		<div
			className={clsx(
				'relative flex items-center px-5 py-4 overflow-hidden font-medium text-white bg-black group lg:py-5 lg:px-7 text-md lg:text-lg',
				{
					'cursor-progress': isLoading,
				},
			)}
		>
			<Divider
				className={clsx(
					'absolute w-4 transition-all duration-300 ease-in-out -translate-x-1/2 bg-white opacity-0 -left-5',
					{
						'!w-40 -left-0 opacity-0 duration-700': isLoading,
						'group-hover:opacity-100 group-hover:-left-3': !isLoading,
					},
				)}
			/>

			{isLoading && <Spinner className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />}
			<span
				className={clsx('transition-all duration-300 ease-in-out group-hover:translate-x-3', {
					'translate-x-3 opacity-0': isLoading,
				})}
			>
				{children}
			</span>
		</div>
	);
};

export { ButtonStyle };

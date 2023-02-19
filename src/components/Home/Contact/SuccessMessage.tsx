import TickSquare from 'assets/icons/thick-square.svg';
import { FC, PropsWithChildren } from 'react';

const SuccessMessage: FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className="flex items-center w-full p-4 mb-6 leading-4 text-white bg-success">
			<TickSquare className="mr-2" />
			{children}
		</p>
	);
};

export { SuccessMessage };

import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Service } from 'data/services';

type Props = HTMLAttributes<HTMLDivElement> & Omit<Service, 'text'>;

const ServiceCard: FC<Props> = ({ title, color, className, children, ...rest }) => {
	return (
		<div className="pb-4 pr-4 lg:w-1/3">
			<div
				className={clsx('py-5 px-6 rounded-2xl relative max-w-md h-full w-full', className)}
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23cececa' stroke-width='3' stroke-dasharray='10%2c10' stroke-dashoffset='13' stroke-linecap='square'/%3e%3c/svg%3e")`,
				}}
				{...rest}
			>
				<div
					className="w-8 h-8 mb-3 rounded-full"
					style={{
						backgroundColor: color,
						boxShadow: `0px 4px 6px ${color}B3`,
					}}
				></div>
				<h2 className="mb-6 text-2xl font-bold lg:text-3xl">{title}</h2>
				<p className="text-xl max-w-paragraph-xs">{children}</p>
			</div>
		</div>
	);
};

export { ServiceCard };

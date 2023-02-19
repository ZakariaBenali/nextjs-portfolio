import TickSquare from 'assets/icons/thick-square.svg';
import { FC } from 'react';

interface Props {
	data: string[];
}
const Responsibilities: FC<Props> = ({ data }) => {
	return (
		<ul>
			{data.map((resp, i) => (
				<li key={i} className="flex items-center mb-3">
					<TickSquare className="flex-shrink-0 text-primary-500" />
					<p className="max-w-md ml-4 text-gray-400">{resp}</p>
				</li>
			))}
		</ul>
	);
};

export { Responsibilities };

import { Tag } from 'components/common/Tag';
import { Technology } from 'data/technologies';
import { FC } from 'react';
interface Props {
	data: Technology[];
}
const Technologies: FC<Props> = ({ data }) => {
	return (
		<div className="flex flex-wrap max-w-xs mt-2 ">
			{data.map((tech, i) => (
				<Tag key={i} text={tech} className="mb-2 mr-2 text-secondary-400 bg-secondary-400/10" />
			))}
		</div>
	);
};

export { Technologies };

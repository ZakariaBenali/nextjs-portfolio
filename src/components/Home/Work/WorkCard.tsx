import { Divider } from 'components/common/Divider';
import { Tag } from 'components/common/Tag';
import { Work } from 'data/work';
import Image from 'next/image';
import { FC } from 'react';

const WorkCard: FC<Work> = ({ title, description, url, technologies, image, color }) => {
	return (
		<div className="pb-4 lg:pr-4 lg:w-1/2">
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="block h-full p-10 pb-0 overflow-hidden cursor-pointer group"
				style={{
					backgroundColor: `${color}`,
				}}
			>
				<div className="flex flex-col items-center h-full">
					<div className="flex flex-col xl:mb-10 2xl:flex-row">
						<h3 className="flex-shrink-0 text-xl font-bold 2xl:text-2xl">{title}</h3>
						<Divider className="hidden mx-4 mt-3 2xl:block" />
						<p className="mt-4 mb-5 text-base 2xl:text-xl 2xl:mt-0">{description}</p>
					</div>
					<div className="flex flex-wrap mt-auto mb-4 lg:justify-center lg:items-center xl:max-w-xl">
						{technologies.map((tech, i) => (
							<Tag key={i} text={tech} className="mb-3 mr-3 bg-black/10" />
						))}
					</div>
					<div className="relative w-full max-w-xl p-4 pb-0 transition duration-300 shadow-lg group-hover:shadow-2xl h-44 sm:h-80 lg:h-52 xl:h-64 2xl:h-80 group-hover:-translate-y-2 group-hover:scale-105">
						<Image
							src={image}
							alt="project"
							className="object-cover object-top transition duration-300 "
							fill
							sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 30vw,
              30vw"
						/>
					</div>
				</div>
			</a>
		</div>
	);
};

export { WorkCard };

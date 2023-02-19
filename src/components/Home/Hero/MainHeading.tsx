import React, { FC, PropsWithChildren } from 'react';
import { TransitionTextUp } from './TransitionTextUp';

const MainHeading: FC<PropsWithChildren> = ({ children }) => {
	return (
		<h1 className="flex flex-wrap max-w-xl mt-10 mb-10 text-5xl font-extrabold !leading-tight lg:text-7xl lg:max-w-headings">
			{Array.isArray(children) ? (
				children.map((c, i) => (
					<TransitionTextUp key={i} delay={(i + 1) / 10}>
						{c}
					</TransitionTextUp>
				))
			) : (
				<TransitionTextUp delay={0.2}>{children}</TransitionTextUp>
			)}
		</h1>
	);
};

export { MainHeading };

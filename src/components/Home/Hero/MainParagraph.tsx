import React, { FC, PropsWithChildren } from 'react';
import { TransitionTextUp } from './TransitionTextUp';

const MainParagraph: FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className="max-w-lg text-2xl font-medium !leading-tight lg:text-4xl lg:max-w-headings">
			{Array.isArray(children) ? (
				children.map((c, i) => (
					<TransitionTextUp key={i} delay={(i + 1) / 10}>
						{c}
					</TransitionTextUp>
				))
			) : (
				<TransitionTextUp delay={0.2}>{children}</TransitionTextUp>
			)}
		</p>
	);
};

export { MainParagraph };

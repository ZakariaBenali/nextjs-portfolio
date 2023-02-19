import { FC, PropsWithChildren } from 'react';

const TabList: FC<Required<PropsWithChildren>> = ({ children }) => {
	return <ul className="flex flex-wrap items-center justify-center overflow-hidden">{children}</ul>;
};

export { TabList };

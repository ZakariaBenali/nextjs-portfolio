import { AnchorHTMLAttributes, FC } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const SocialLink: FC<Props> = ({ children, href, target, ...rest }) => {
	return (
		<a
			href={href}
			target={target}
			className="flex items-center justify-center w-12 h-12 p-3 mr-5 transition bg-white rounded-full lg:p-4 lg:w-16 lg:h-16 hover:-translate-y-2"
			{...rest}
		>
			{children}
		</a>
	);
};

SocialLink.defaultProps = {
	target: '_blank',
};

export { SocialLink };

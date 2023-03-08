import { FC } from 'react';
import { Logo } from 'components/common/Logo';
import { BodySection } from 'components/common/BodySection';
import { Socials } from './Socials';
import HeartColored from 'assets/icons/heart-colored.svg';

const Footer: FC = () => {
	return (
		<footer className="text-white bg-footer-bg">
			<BodySection className="pb-10">
				<div className="container">
					<div className="flex flex-wrap justify-between pr-4">
						<div>
							<Logo />
							<p className="max-w-sm mt-3">
								Web developer and UI/UX Designer with over 3 years of experience ready to take your online business to
								the next level.
							</p>
						</div>
						<div>
							<h3 className="mt-5 text-2xl font-semibold xs:mt-0">Find me on:</h3>
							<Socials />
						</div>
					</div>
					<hr className="my-10 opacity-20" />
					<p className="flex items-center justify-center text-sm xs:text-base">
						<span className="mr-1 font-bold">@{new Date().getFullYear()}</span> - Made with
						<HeartColored className="mx-2" /> By{' '}
						<a
							target="_blank"
							rel="noreferrer"
							className="ml-1 font-semibold text-secondary-400 hover:underline"
							href="https://github.com/ZakariaBenali"
						>
							Zakaria Benali
						</a>
					</p>
				</div>
			</BodySection>
		</footer>
	);
};

export { Footer };

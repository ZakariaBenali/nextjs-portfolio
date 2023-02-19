import { yearsToNow } from 'helpers/yearsToNow';

const Description = () => {
	return (
		<p className="text-lg leading-8 lg:text-xl max-w-paragraph">
			I am Benali Zakaria a {yearsToNow('1997')} years old self-taught Full stack developer and UI/UX Designer with more
			than {yearsToNow('2020-06-01')} years of experience. I&apos;ve worked with various clients from individuals to
			startups on various projects, which made me gain more experience and be more flexible in finding the right
			solutions for targeted customers. This also makes me confident that I will provide you with the best solutions for
			your business.
		</p>
	);
};

export { Description };

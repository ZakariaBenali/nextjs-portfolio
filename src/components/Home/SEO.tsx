import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title="Web Developer & UI/UX Designer"
			description="I'm a web Developer And UI/UX Designer, Worked on various types of projects and I'm confident you'll enjoy working with me."
			openGraph={{
				url: 'https://www.url.ie/a',
				images: [
					{
						url: 'https://cdn.zakariabenali.me/images/seo.png',
						width: 800,
						height: 600,
						alt: 'A photo showing all technologies i can work with',
						type: 'image/png',
					},
				],
				siteName: 'Benali Zakaria Portfolio',
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export { SEO };

import { Technology } from './technologies';

export interface Work {
	title: string;
	description?: string;
	color?: `#${string}`;
	url: string;
	image: string;
	technologies: Technology[];
}

export const works: Work[] = [
	{
		title: 'Benali.me',
		url: 'https://zakariabenali.me/',
		description:
			'zakariabenali.me is my personal portfolio, featuring some of my works and all services and technologies i provide',
		image: 'https://cdn.zakariabenali.me/images/developer-portfolio-light.png',
		technologies: ['Next.js', 'React', 'CSS', 'AWS', 'Figma', 'Typescript', 'Strapi'],
	},
];

import { Technology } from './technologies';

export interface Experience {
	company: string;
	date: `${string} - ${string}`;
	country: string;
	workArrangement: string;
	role: string;
	jobType: string;
	responsibilities: string[];
	technologies: Technology[];
}

export const experiences: Experience[] = [
	{
		company: 'Tokidos',
		country: 'Canada',
		workArrangement: 'Remote',
		date: '01, 2022 - 04, 2022',
		role: 'Full stack developer',
		jobType: 'Freelance',
		technologies: ['Laravel', 'Javascript', 'Statamic', 'Jquery', 'TailwindCSS', 'AWS', 'PHP'],
		responsibilities: [
			'Converting a Figma template to a fully functioning Laravel website',
			'Configuring a newsletter system.',
			'Hosting the website in AWS Lightsail',
			'Using Statamic a CMS as requested by the company.',
			'Creating a multilanguage  website',
		],
	},
	{
		company: 'Devotech',
		country: 'Morocco',
		workArrangement: 'Remote',
		date: 'Nov 2021 - May 2022',
		role: 'Lead Front End',
		jobType: 'Freelance',
		technologies: ['React', 'Next.js', 'TailwindCSS', 'Typescript', 'Strapi', 'AWS', 'Figma', 'Nest.js'],
		responsibilities: [
			'Building multiple websites from Figma files using React.Js and Next.Js',
			'Design user interfaces with Figma and Adobe XD',
			'Fixing bugs and adding features to APIs built with Strapi and Nest.js',
			'Maintaining React.Js and Next.Js applications on AWS Amplify',
			'Improve performance for Next.Js Applications.',
			'Using CloudFront and s3 to host and serve static files',
			'Using Metamask and Metamask flask to build react crypto-based apps',
			'Interacting with Solidity to build smart contracts.',
			'Front-end and UI/UX Design Consulting.',
		],
	},
	{
		company: 'German center',
		country: 'Morocco',
		workArrangement: 'Remote',
		date: 'Jun 2021 - Jul 2022',
		role: 'Full stack developer',
		jobType: 'Freelance',
		technologies: ['Laravel', 'Sass', 'Jquery', 'HTML', 'CSS', 'Javascript'],
		responsibilities: [
			'Design main website with Adobe XD.',
			'Convert Adobe Design to a fully functioning Laravel website',
			'Creating a custom CMS to manage the website with a PDF export function',
			'Adding a dynamic localization system that allows adding or removing language',
			'Hosting the website on shared hosting',
		],
	},
	{
		company: 'Globally',
		country: 'Global',
		workArrangement: 'Freelance',
		date: 'Jun 2020 - Present',
		role: 'Full stack developer',
		jobType: 'Freelance',
		technologies: ['Laravel', 'Sass', 'Jquery', 'HTML', 'CSS', 'Javascript', 'Adobe XD', 'Figma'],
		responsibilities: [
			'Serving over 30 clients globally',
			'Design websites with Adobe XD and Figma',
			'Coding multiple website using Laravel, TailwindCSS and React',
			'Maintaining and hosting website on AWS infrastructure',
		],
	},
];

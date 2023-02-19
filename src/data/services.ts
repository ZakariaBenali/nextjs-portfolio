export interface Service {
	title: string;
	color?: `#${string}`;
	text: string;
}

export const services: Service[] = [
	{
		title: 'Web Development',
		text: 'A web developer with over 3 years of experience in both professional industry and freelancing, serving clients globally in both front-end and backend development.',
	},

	{
		title: 'UI/UX Designing',
		text: 'Over the course of three years, I have served over 20 global clients as a UI/UX Designer by creating visually appealing and user-friendly interfaces for web products using Figma and Adobe XD.',
	},
];

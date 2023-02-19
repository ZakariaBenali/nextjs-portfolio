import Github from 'assets/icons/github.svg';
import Dribbble from 'assets/icons/dribbble.svg';
import Linkedin from 'assets/icons/linkedin.svg';
import React from 'react';

export interface SocialLink {
	destination: string;
	title: string;
	icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
	{
		destination: 'https://github.com/ZakariaBenali',
		title: 'Github',
		icon: <Github />,
	},
	{
		destination: 'https://dribbble.com/benalizakaria',
		title: 'Dribbble',
		icon: <Dribbble />,
	},
	{
		destination: 'https://www.linkedin.com/in/zakaria-benali-115a7420b/',
		title: 'Linkedin',
		icon: <Linkedin />,
	},
];

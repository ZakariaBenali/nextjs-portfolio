import Github from 'assets/icons/social-media/Github.svg';
import Twitter from 'assets/icons/social-media/Twitter.svg';
import Linkedin from 'assets/icons/social-media/Linkedin.svg';
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
		destination: 'https://twitter.com/Zakariabenali2',
		title: 'Twitter',
		icon: <Twitter />,
	},
	{
		destination: 'https://www.linkedin.com/in/zakaria-benali-115a7420b/',
		title: 'Linkedin',
		icon: <Linkedin />,
	},
];

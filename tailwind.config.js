/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1480px',
			},
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '0',
			},
		},
		extend: {
			screens: {
				xs: '440px',
			},
			fontFamily: {
				sans: 'var(--font-plusJakartaSans)',
				outfit: 'var(--font-outfit)',
			},
			colors: {
				black: 'rgb(var(--color-black) / <alpha-value>)',
				error: 'rgb(var(--color-error) / <alpha-value>)',
				success: 'rgb(var(--color-success) / <alpha-value>)',
				primary: {
					500: 'rgb(var(--color-primary-500) / <alpha-value>)',
					100: 'rgb(var(--color-primary-100) / <alpha-value>)',
				},
				secondary: {
					400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
				},
				gray: {
					400: 'rgb(var(--color-gray-400) / <alpha-value>)',
					100: 'rgb(var(--color-gray-100) / <alpha-value>)',
				},
				property: {
					primary: 'rgb(var(--color-property-primary) / <alpha-value>)',
					secondary: 'rgb(var(--color-property-secondary) / <alpha-value>)',
					tertiary: 'rgb(var(--color-property-tertiary) / <alpha-value>)',
				},
				'body-bg': 'rgb(var(--color-body-bg) / <alpha-value>)',
				'footer-bg': 'rgb(var(--color-footer-bg) / <alpha-value>)',
			},

			borderRadius: {
				inherit: ' inherit',
			},
			maxWidth: {
				headings: '65.3125rem',
				paragraph: '58.125rem',
				'paragraph-xs': '25.625rem',
				'xs/2': '10rem',
			},
			height: {
				nav: 'calc(100vh - 96px);',
			},

			lineHeight: {
				inherit: 'inherit',
				11: '2.75rem',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};

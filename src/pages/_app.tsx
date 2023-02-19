import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans, Outfit } from '@next/font/google';
import clsx from 'clsx';
import { GoogleAnalytics } from 'components/common/Scripts/GoogleAnalytics';

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plusJakartaSans',
});

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GoogleAnalytics />
			<main
				className={clsx(`${plusJakartaSans.variable} ${outfit.variable} font-sans bg-body-bg min-h-screen relative`, {
					'debug-screens': process.env.NODE_ENV === 'development',
				})}
			>
				<Component {...pageProps} />
			</main>
		</>
	);
}

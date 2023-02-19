import Script from 'next/script';

const GoogleAnalytics = () => {
	if (!process.env.NEXT_PUBLIC_GA_ID) {
		return null;
	}
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
			/>
			<Script id="gtag" strategy="afterInteractive">
				{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
							page_path: window.location.pathname,
							debug_mode: true
						});
					`}
			</Script>
		</>
	);
};

export { GoogleAnalytics };

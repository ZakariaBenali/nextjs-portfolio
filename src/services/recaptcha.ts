import axios from 'axios';

export async function validateCaptcha(token: string) {
	const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
	const { data } = await axios(
		`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
		{
			method: 'POST',
		},
	);
	if (!data.success) {
		throw new Error('Verifying captcha failed');
	}
}

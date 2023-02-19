import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseError } from '@sendgrid/mail';
import { sendSendGridMessage, validateCaptcha } from 'services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { body } = req;
	try {
		await validateCaptcha(body['g-recaptcha-response']);
		await sendSendGridMessage(body);
		res.status(200).json({
			success: true,
		});
	} catch (err) {
		const error = err as ResponseError;
		const code = error.code || 400;
		res.status(code).json({
			success: false,
			message: error.message,
		});
	}
}

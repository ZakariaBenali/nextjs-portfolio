import type { ContactMessage } from 'components/Home/Contact/ContactForm';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendSendGridMessage(body: ContactMessage) {
	const { email, name, message, subject } = body;

	const msg: MailDataRequired = {
		to: 'benalizakaria.me@gmail.com',
		from: {
			email: 'benalizakaria.me@gmail.com',
			name: name,
		},
		subject,
		html: `<strong>From: ${email}</strong><p>${message}</p>`,
	};
	await sgMail.send(msg);
}

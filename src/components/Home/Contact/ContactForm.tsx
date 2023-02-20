import { Button } from 'components/common/Buttons/Button';
import { FormGroup } from 'components/common/Form/FormGroup';
import { FormLabel } from 'components/common/Form/FormLabel';
import { Input } from 'components/common/Form/Input';
import { Textarea } from 'components/common/Form/Textarea';
import { Form, Formik, FormikHelpers } from 'formik';
import { ZodError, z } from 'zod';
import axios from 'axios';
import { formatAxiosResponse } from 'helpers/formatAxiosResponse';
import { ChangeEvent, useRef, useState } from 'react';
import { SuccessMessage } from './SuccessMessage';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormControlError } from 'components/common/Form/FormControlError';

const initialValues = {
	name: '',
	email: '',
	subject: '',
	message: '',
	'g-recaptcha-response': '',
};

export type ContactMessage = typeof initialValues;

const Schema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email(),
	subject: z.string().min(1, 'Subject is required'),
	message: z.string().min(10, 'The message should be at least 10 characters'),
	'g-recaptcha-response': z.string().min(1, 'Captcha error, Please refresh the page and try again'),
});

const ContactForm = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const handleSubmit = async (values: ContactMessage, actions: FormikHelpers<ContactMessage>) => {
		try {
			setFormSubmitted(false);
			await axios('/api/contact', {
				method: 'POST',
				data: values,
			});
			setFormSubmitted(true);
			actions.resetForm();
			recaptchaRef.current?.reset();
		} catch (err) {
			const message = formatAxiosResponse(err);
			actions.setStatus(message);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validate={(values) => {
				try {
					Schema.parse(values);
				} catch (errors) {
					return (errors as ZodError).formErrors.fieldErrors;
				}
			}}
			onSubmit={handleSubmit}
		>
			{({ values, setFieldValue, handleChange, handleBlur, errors, touched, isSubmitting, status }) => {
				const _handleChange = (e: ChangeEvent<HTMLElement>) => {
					if (!values['g-recaptcha-response'] && recaptchaRef.current) {
						recaptchaRef.current.execute();
					}
					handleChange(e);
				};
				return (
					<Form className="flex flex-wrap">
						{status && <p className="w-full p-4 mb-6 leading-4 text-white bg-error/90">{status}</p>}
						<FormGroup className="w-full mb-4 sm:pr-2 sm:w-1/2">
							<FormLabel>Your name</FormLabel>
							<Input
								onChange={_handleChange}
								onBlur={handleBlur}
								name="name"
								placeholder="What should i call you ?"
								error={touched.name ? errors.name : ''}
								value={values.name}
							/>
						</FormGroup>
						<FormGroup className="w-full mb-4 sm:pl-2 sm:w-1/2">
							<FormLabel>Your email</FormLabel>
							<Input
								onChange={_handleChange}
								onBlur={handleBlur}
								name="email"
								type="email"
								placeholder="Where can i reach you ?"
								error={touched.email ? errors.email : ''}
								value={values.email}
							/>
						</FormGroup>
						<FormGroup className="w-full mb-4">
							<FormLabel>Subject</FormLabel>
							<Input
								onChange={_handleChange}
								onBlur={handleBlur}
								name="subject"
								placeholder="What your message about ?"
								error={touched.subject ? errors.subject : ''}
								value={values.subject}
							/>
						</FormGroup>
						<FormGroup className="w-full mb-4">
							<FormLabel>Message</FormLabel>
							<Textarea
								onChange={_handleChange}
								onBlur={handleBlur}
								name="message"
								placeholder="What is your message ?"
								error={touched.message ? errors.message : ''}
								value={values.message}
							/>
						</FormGroup>
						{formSubmitted && <SuccessMessage>Your message has been sent</SuccessMessage>}
						<FormGroup className="items-end w-full mt-4">
							<ReCAPTCHA
								size="invisible"
								ref={recaptchaRef}
								onChange={(value) => {
									setFieldValue('g-recaptcha-response', value);
								}}
								sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
							/>
							{touched['g-recaptcha-response'] && errors['g-recaptcha-response'] && (
								<FormControlError>{errors['g-recaptcha-response']}</FormControlError>
							)}
						</FormGroup>
						<Button isLoading={isSubmitting} className="mt-16 ml-auto" type="submit">
							Send message
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
};

export { ContactForm };

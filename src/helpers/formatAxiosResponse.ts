import { isAxiosError } from 'axios';

export function formatAxiosResponse(error: unknown) {
	const defaultMessage = 'Error occurred, please try again later';

	if (isAxiosError(error)) {
		if (error.code === 'ECONNABORTED') {
			return 'The request timed out. Please try again later.';
		}

		if (error.message === 'Network Error') {
			return 'Could not connect to the server. Please check your internet connection and try again';
		}
		switch (error.response?.status) {
			case 403:
				return "Looks like you've entered some bad data";
			case 500:
				return 'The server encountered an error.';
			default:
				return error.response?.data.message || defaultMessage;
		}
	}

	return defaultMessage;
}

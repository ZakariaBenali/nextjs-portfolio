export function isValidDate(dateString: string) {
	const timestamp = Date.parse(dateString);
	return !isNaN(timestamp);
}

export function yearsToNow(date: string) {
	if (!date) {
		return;
	}

	if (!isValidDate(date)) {
		return;
	}
	const startDateMs = new Date(date).getTime();
	const currentDateMs = new Date().getTime();

	const differentInMs = currentDateMs - startDateMs;

	const years = differentInMs / (1000 * 60 * 60 * 24 * 365);

	return years.toFixed(0);
}

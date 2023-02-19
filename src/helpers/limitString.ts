export const stringLimit = (str: string, limit = 100, append?: string) => {
	const appendToString = append ? append : '...';
	let finalString = str;
	if (str.length > limit) {
		finalString = str.slice(0, limit) + appendToString;
	}
	return finalString;
};

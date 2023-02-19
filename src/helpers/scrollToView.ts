export const scrollIntoView = (targetSection: string) => {
	if (!targetSection) {
		return;
	}
	const section = document.getElementById(targetSection);
	if (!section) {
		return;
	}

	section.scrollIntoView({ behavior: 'smooth' });
};

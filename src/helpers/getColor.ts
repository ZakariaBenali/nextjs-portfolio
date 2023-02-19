export const COLORS: `#${string}`[] = ['#63C4D1', '#FF8E5E', '#90C29B', '#8678BA', '#A6B777', '#FFCE00'];

export const getColor = (index: number, hexOpacity?: string): `#${string}` => {
	const colorIndex = index % COLORS.length;
	const color = COLORS[colorIndex];
	return hexOpacity ? `${color}${hexOpacity}` : color;
};

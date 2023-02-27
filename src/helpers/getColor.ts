export const COLORS: `#${string}`[] = ['#63C4D1', '#FF8E5E', '#1FC9A4', '#95B0B4', '#c7c504', '#6295CF'];

export const getColor = (index: number, hexOpacity?: string): `#${string}` => {
	const colorIndex = index % COLORS.length;
	const color = COLORS[colorIndex];
	return hexOpacity ? `${color}${hexOpacity}` : color;
};

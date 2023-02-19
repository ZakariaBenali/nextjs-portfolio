const Background = () => {
	return (
		<div
			style={{
				maxWidth: '732px',
				maxHeight: '1100px',
			}}
			className="absolute top-0 right-0 flex flex-col items-end w-full h-screen"
		>
			<div
				style={{
					backgroundColor: '#D9DDDA',
					width: '100%',
				}}
				className="flex-1 w-full"
			></div>
			<div
				style={{
					backgroundColor: '#D0D0CE',
					width: '90%',
					height: '5%',
				}}
				className="flex-shrink-0"
			></div>
		</div>
	);
};

export { Background };

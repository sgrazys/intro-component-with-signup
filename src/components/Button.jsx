function Button({ color, bgColor, blackOpacity, fontSize, children }) {
	const customStyle = {
		width: '100%',
		fontFamily: 'inherit',
		fontWeight: '600',
		fontSize: fontSize,
		textTransform: 'uppercase',
		color: color,
		backgroundColor: bgColor,
		padding: '1em 0',
		border: 'none',
		borderRadius: '0.3333em',
		boxShadow: `0 -4px 0 0 ${blackOpacity} inset `,
		cursor: 'pointer',
	};

	return <button style={customStyle}>{children}</button>;
}

export default Button;

function Button({ children }) {
	return (
		<button
			className='form-btn'
			type='submit'>
			{children}
		</button>
	);
}

export default Button;

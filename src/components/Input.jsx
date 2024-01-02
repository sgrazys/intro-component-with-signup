import Icon from './Icon';

function Input({ value, type, placeholder, errMsg, showErr, onChange }) {
	return (
		<div className='input-container'>
			<div className='input-row'>
				<input
					onChange={onChange}
					value={value}
					type={type}
					placeholder={placeholder}
				/>

				{showErr && <Icon />}
			</div>

			{showErr && (
				<p className='error-msg '>
					<em>{errMsg}</em>
				</p>
			)}
		</div>
	);
}

export default Input;

import Icon from './Icon';

function Input({ value, type, placeholder, errMsg, showErr, name, onChange }) {
	return (
		<div className='input-container'>
			<div className='input-row'>
				<input
					onChange={onChange}
					value={value}
					type={type}
					placeholder={placeholder}
					name={name}
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

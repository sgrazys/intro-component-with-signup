import Button from './Button';

function Form({ children }) {
	return (
		<main className='container-main'>
			{children}
			<form className='form'>
				<input
					type='text'
					placeholder='First Name'
				/>
				<input
					type='text'
					placeholder='Last Name'
				/>
				<input
					type='text'
					placeholder='Email Address'
				/>
				<input
					type='text'
					placeholder='Password'
				/>
				<Button
					color={'#fff'}
					bgColor={'#38cc8c'}
					blackOpacity={'#00000017'}
					fontSize={'1.5rem'}
					margin={'0 0 -0.6em 0'}>
					Claim you free trial
				</Button>
				<p className='terms'>
					By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
				</p>
			</form>
		</main>
	);
}

export default Form;

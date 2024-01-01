import { useState } from 'react';
import Button from './Button';
import PricingInfo from './PricingInfo';
import Input from './Input';

function Form() {
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isValidFName, setIsValidFName] = useState(true);
	const [isValidLName, setIsValidLName] = useState(true);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);

	function resetValidationState(val, validationState, setter) {
		if (val && !validationState) setter(true);
	}

	function isNotEmptyInput(val, setter) {
		if (val.trim() === '') {
			setter(false);
			return;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		isNotEmptyInput(fName, setIsValidFName);
		isNotEmptyInput(lName, setIsValidLName);
		isNotEmptyInput(password, setIsValidPassword);

		const emailArr = email?.split('');
		const domain = email.slice('@');
		const invalidSymbols = [' ', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '\\', '?', '/'];
		const emailUserName = email.slice(0, email.indexOf('@'));

		if (!email.includes('@') || email.trim() === '' || !domain.includes('.') || emailArr.some((char) => invalidSymbols.includes(char)) || emailUserName.trim() === '') {
			setIsValidEmail(false);
			return;
		}

		if (fName && lName && email && password) {
			setFName('');
			setLName('');
			setEmail('');
			setPassword('');
		}
	}

	function handleFName(e) {
		e.preventDefault();
		setFName(e.target.value);
		resetValidationState(fName, isValidFName, setIsValidFName);
	}

	function handlelName(e) {
		e.preventDefault();
		setLName(e.target.value);
		resetValidationState(lName, isValidLName, setIsValidLName);
	}

	function handlePassword(e) {
		e.preventDefault();
		setPassword(e.target.value);
		resetValidationState(password, isValidPassword, setIsValidPassword);
	}

	function handleEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
		resetValidationState(email, isValidEmail, setIsValidEmail);
	}

	return (
		<main className='container-main'>
			<PricingInfo />
			<form
				className='form'
				onSubmit={handleSubmit}>
				<Input
					onChange={handleFName}
					value={fName}
					type={'text'}
					placeholder={'First Name'}
					errMsg={'First Name cannot be empty'}
					isValid={isValidFName}
				/>
				<Input
					onChange={handlelName}
					value={lName}
					type={'text'}
					placeholder={'Last Name'}
					errMsg={'Last Name cannot be empty'}
					isValid={isValidLName}
				/>
				<Input
					onChange={handleEmail}
					value={email}
					type={'text'}
					placeholder={'Email address'}
					errMsg={'Looks like this is not an email'}
					isValid={isValidEmail}
				/>
				<Input
					onChange={handlePassword}
					value={password}
					type={'password'}
					placeholder={'Password'}
					errMsg={'Password cannot be empty'}
					isValid={isValidPassword}
				/>

				<Button>Claim you free trial</Button>

				<p className='terms'>
					By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
				</p>
			</form>
		</main>
	);
}

export default Form;

import { useState } from 'react';
import Button from './Button';
import PricingInfo from './PricingInfo';
import Input from './Input';

function Form() {
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [showFNameErr, setShowFNameErr] = useState(false);
	const [showLNameErr, setShowLNameErr] = useState(false);
	const [showEmailErr, setShowEmailErr] = useState(false);
	const [showPasswordErr, setShowPasswordErr] = useState(false);

	function resetValidationState(val, validationState, setter) {
		if (val && validationState) setter(false);
	}

	function isNotEmptyInput(val, setter) {
		if (val.trim() === '') {
			setter(true);
			return;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		isNotEmptyInput(fName, setShowFNameErr);
		isNotEmptyInput(lName, setShowLNameErr);
		isNotEmptyInput(password, setShowPasswordErr);

		const emailArr = email?.split('');
		const domain = email.slice('@');
		const invalidSymbols = [' ', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '\\', '?', '/'];
		const emailUserName = email.slice(0, email.indexOf('@'));

		if (!email.includes('@') || email.trim() === '' || !domain.includes('.') || emailArr.some((char) => invalidSymbols.includes(char)) || emailUserName.trim() === '') {
			setShowEmailErr(true);
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
		resetValidationState(fName, showFNameErr, setShowFNameErr);
	}

	function handlelName(e) {
		e.preventDefault();
		setLName(e.target.value);
		resetValidationState(lName, showLNameErr, setShowLNameErr);
	}

	function handlePassword(e) {
		e.preventDefault();
		setPassword(e.target.value);
		resetValidationState(password, showPasswordErr, setShowPasswordErr);
	}

	function handleEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
		resetValidationState(email, showEmailErr, setShowEmailErr);
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
					showErr={showFNameErr}
				/>
				<Input
					onChange={handlelName}
					value={lName}
					type={'text'}
					placeholder={'Last Name'}
					errMsg={'Last Name cannot be empty'}
					showErr={showLNameErr}
				/>
				<Input
					onChange={handleEmail}
					value={email}
					type={'text'}
					placeholder={'Email address'}
					errMsg={'Looks like this is not an email'}
					showErr={showEmailErr}
				/>
				<Input
					onChange={handlePassword}
					value={password}
					type={'password'}
					placeholder={'Password'}
					errMsg={'Password cannot be empty'}
					showErr={showPasswordErr}
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

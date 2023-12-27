import PricingInfo from './PricingInfo';

function Form() {
	return (
		<main className='container-main'>
			<PricingInfo />
			<form className='form'>
				<input
					type='text'
					placeholder='Name'
				/>
				<input
					type='text'
					placeholder='Last Name'
				/>
				<input
					type='text'
					placeholder='Email'
				/>
				<input
					type='text'
					placeholder='Password'
				/>

				<button className='bt'>CLAIM </button>
				<p className='terms'>TERMS</p>
			</form>
		</main>
	);
}

export default Form;

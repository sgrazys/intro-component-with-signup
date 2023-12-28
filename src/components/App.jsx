import Header from './Header';
import Form from './Form';
import PricingInfo from './PricingInfo';
import Footer from './Footer';

function App() {
	return (
		<div className='app'>
			<Header />
			<Form>
				<PricingInfo />
			</Form>
			<Footer />
		</div>
	);
}

export default App;

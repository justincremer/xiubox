import { Header } from '../components';

const App = ({ Component, pageProps }) => (
	<div>
		<Header />
		<Component {...pageProps} />
	</div>
);

export default App;

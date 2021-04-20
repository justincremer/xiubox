import { Header } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
	<div className="w-screen h-screen bg-gray-900 font-display">
		<Header />
		<Component {...pageProps} />
	</div>
);

export default App;

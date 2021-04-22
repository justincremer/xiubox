import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './theme';
import { HomePage, NotFoundPage } from './pages';
import { NavBar } from './components';

const Main: React.FC = () => (
	<ThemeProvider theme={theme}>
		<NavBar />
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				{/* <Route path="/books" exact component={BookPage} /> */}
				{/* <Route path="/users" exact component={UserPage} /> */}
				{/* <Route path="/todos" exact component={TodoPage} /> */}
				<Route path="*" exact component={NotFoundPage} />
			</Switch>
		</Router>
	</ThemeProvider>
);

export default Main;

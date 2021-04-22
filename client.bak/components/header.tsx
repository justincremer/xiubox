import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Grid,
	Link,
	Box,
} from '@material-ui/core';
import { Logo, MenuIcon } from '../svgs';

const NavLink = (props: { to: string; children: any }) => {
	const { to, children } = props;

	return (
		<Link href={to} className="nounderline">
			{children}
		</Link>
	);
};

const RedirectButtons = () => {
	return (
		<div className="justify-items-center text-white">
			<NavLink
				to="/books"
				children={<Button className="px-4">Books</Button>}
			/>
			<NavLink
				to="/users"
				children={<Button className="px-4">Users</Button>}
			/>
			<NavLink
				to="/todos"
				children={<Button className="px-4">Todos</Button>}
			/>
		</div>
	);
};

const ensureAuthenticated = (): boolean => false;

const AuthenticationButton = () => {
	const authenticated: boolean = ensureAuthenticated();

	return (
		<div className="text-white">
			{ensureAuthenticated() ? (
				<NavLink to="/logout" children={<Button>Logout</Button>} />
			) : (
				<NavLink to="/login" children={<Button>Login</Button>} />
			)}
		</div>
	);
};

const Header = () => (
	<AppBar className="flex bg-pink-800 ">
		<Toolbar>
			<Grid className="container flex justify-start align-middle">
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Box className="ml-4">
					<NavLink to="/" children={<Logo />} />
				</Box>
			</Grid>
			<Grid className="container justify-end">
				<RedirectButtons />
			</Grid>
			<Grid className="container flex justify-end">
				<AuthenticationButton />
			</Grid>
		</Toolbar>
	</AppBar>
);

export { Header };

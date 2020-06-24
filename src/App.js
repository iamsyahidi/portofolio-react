import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Ilham Syahidi',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' },
			],
			home: {
				title: 'Be Relentless',
				subTitle: 'Projects the make a difference',
				text: 'Checkout my projects below',
			},
			about: {
				title: 'About Me',
			},
			contact: {
				title: "Let's Talk",
			},
		};
	}

	render() {
		return (
			<Router>
				<Container className="p-0" fluid={true}>
					<Navbar className="border-bottom" bg="transparent" expand="lg">
						<Navbar.Brand> Ilham Syahidi </Navbar.Brand>
						<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className="ml-auto">
								<Link className="nav-link" to="/">
									Home
								</Link>
								<Link className="nav-link" to="/about">
									About
								</Link>
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<br></br>

					{/* <BrowserRouter> */}
					<Route
						path="/"
						exact
						component={HomeContainer}
						// render={() => <HomeContainer />}
					/>
					<Route
						path="/create"
						exact
						component={CreateUserContainer}
						// render={() => <CreateUserContainer />}
					/>
					<Route
						path="/detail/:id"
						exact
						component={DetailUserContainer}
						// render={() => <DetailUserContainer />}
					/>
					<Route
						path="/edit/:id"
						exact
						component={EditUserContainer}
						// render={() => <EditUserContainer />}
					/>

					<Route
						path="/home"
						exact
						render={() => (
							<HomePage
								title={this.state.home.title}
								subTitle={this.state.home.subTitle}
								text={this.state.home.text}
							/>
						)}
					/>
					<Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
					<Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
					{/* </BrowserRouter> */}
				</Container>
				<Footer />
			</Router>
		);
	}
}

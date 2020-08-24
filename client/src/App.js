import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//Redux
import { Provider } from 'react-redux'; //This connects Redux to React
import store from './store';

import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []); // <== empty brackets makes this function only run once (not loop forever)

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Landing} />
						<section className='container'>
							<Alert></Alert>
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />
						</section>
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;

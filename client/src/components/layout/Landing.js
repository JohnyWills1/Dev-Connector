import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const Landing = ({ auth: { isAuthenticated, loading }, logout }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	const guestLanding = (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>
						<span role='img'>👨‍💻</span> Developer Connector <span role='img'>💾</span>
					</h1>
					<p className='lead'>
						Create a developer profile/portfolio, share posts and get help from other
						developers
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);

	const loggedLanding = (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>
						<span role='img'>👨‍💻</span> Developer Connector <span role='img'>💾</span>
					</h1>
					<p className='lead'>
						Create a developer profile/portfolio, share posts and get help from other
						developers
					</p>
				</div>
			</div>
		</section>
	);

	return (
		<section className='landing'>
			<div className='dark-overlay'>
				{!loading && (
					<Fragment>{isAuthenticated ? loggedLanding : guestLanding}</Fragment>
				)}
			</div>
		</section>
	);
};

Landing.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Landing);

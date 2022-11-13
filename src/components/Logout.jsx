import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ isAuthenticated, setIsAuthenticated, setUserDetails }) {
	let navigate = useNavigate();

	useEffect(() => {
		setIsAuthenticated(false);
		setUserDetails('');
		navigate('/login');
	}, []);

	return <div>Logging out ...</div>;
}

export default Logout;

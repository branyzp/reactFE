import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ isAuthenticated, setIsAuthenticated }) {
	let navigate = useNavigate();

	setIsAuthenticated(false);
	navigate('/login');
	return <div>Logging out ...</div>;
}

export default Logout;

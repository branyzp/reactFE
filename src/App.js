import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import Logout from './components/Logout';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	console.log(isAuthenticated);

	return (
		<div>
			<BrowserRouter>
				<Navbar isAuthenticated={isAuthenticated} />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/login"
						element={<Login setIsAuthenticated={setIsAuthenticated} />}
					/>
					<Route
						path="/dashboard"
						element={<Dashboard isAuthenticated={isAuthenticated} />}
					/>
					<Route
						path="/logout"
						element={
							<Logout
								isAuthenticated={isAuthenticated}
								setIsAuthenticated={setIsAuthenticated}
							/>
						}
					/>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

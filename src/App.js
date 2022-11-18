import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import Logout from './components/Logout';
import { DarkModeProvider } from './context/DarkModeContext';
import UserDetails from './pages/UserDetails';
import Expenses from './pages/Expenses';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userdetails, setUserDetails] = useState('');

	console.log('isAuthenticated: ' + isAuthenticated);
	console.log('User: ' + userdetails);

	return (
		<div>
			<DarkModeProvider>
				<BrowserRouter>
					<Navbar isAuthenticated={isAuthenticated} />
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/register" element={<Register />} />
						<Route
							path="/login"
							element={
								<Login
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
								/>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<Dashboard
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
								/>
							}
						/>
						<Route
							path="/expenses"
							element={
								<Expenses
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
								/>
							}
						/>
						<Route
							path="/logout"
							element={
								<Logout
									isAuthenticated={isAuthenticated}
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
								/>
							}
						/>
						<Route
							path="user details"
							element={
								<UserDetails
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
								/>
							}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DarkModeProvider>
		</div>
	);
}

export default App;

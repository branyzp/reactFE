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
	const [userExpensesData, setUserExpensesData] = useState('');

	let local = 'http://localhost:8000';
	let deploy = 'https://kiamsiap.onrender.com';
	let api = deploy;

	return (
		<div>
			<DarkModeProvider>
				<BrowserRouter>
					<Navbar isAuthenticated={isAuthenticated} />
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/register" element={<Register api={api} />} />
						<Route
							path="/login"
							element={
								<Login
									api={api}
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
								/>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<Dashboard
									api={api}
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
									setUserExpensesData={setUserExpensesData}
									userExpensesData={userExpensesData}
								/>
							}
						/>
						<Route
							path="/expenses"
							element={
								<Expenses
									api={api}
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
									setUserExpensesData={setUserExpensesData}
									userExpensesData={userExpensesData}
								/>
							}
						/>
						<Route
							path="/logout"
							element={
								<Logout
									api={api}
									isAuthenticated={isAuthenticated}
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
								/>
							}
						/>
						<Route
							path="user"
							element={
								<UserDetails
									api={api}
									isAuthenticated={isAuthenticated}
									userdetails={userdetails}
									setIsAuthenticated={setIsAuthenticated}
									setUserDetails={setUserDetails}
									userExpensesData={userExpensesData}
									setUserExpensesData={setUserExpensesData}
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

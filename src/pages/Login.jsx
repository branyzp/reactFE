import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Login({ api, setIsAuthenticated, setUserDetails }) {
	const [password, setPassword] = useState({ password: '', dirty: false });
	const [email, setEmail] = useState({ email: '', dirty: false });
	// const [data, setData] = useState('');

	const { darkmode } = useContext(DarkModeContext);

	let login_api = `${api}/api/login`;

	let navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(login_api, {
				username: email.email,
				password: password.password,
			})
			.then((res) => {
				// setData(res.data);
				console.log(res.data);
				if (res.data.access_token && res.data.user_details) {
					setUserDetails(res.data.user_details);
					setIsAuthenticated(true);
					navigate('/dashboard');
					alert('Logged in successfully');
				} else {
					alert('Login failed');
				}
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-32 text-center flex justify-center items-center">
				<div
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
					}
				>
					<h1 className="text-3xl font-bold tracking-wide">Login</h1>

					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="grid gap-6 mb-6 md:grid-cols-2"></div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Email address
							</label>
							<input
								onClick={() => {
									setEmail({ email: email.email, dirty: true });
								}}
								onChange={(e) => {
									setEmail({
										email: e.target.value,
										dirty: true,
									});
								}}
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="john.doe@company.com"
								required="email"
							/>
							{email.dirty && !email.email && (
								<p className=" text-red-500 text-sm font-light">
									please enter your email.
								</p>
							)}
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Password
							</label>
							<input
								onClick={() => {
									setPassword({ password: password.password, dirty: true });
								}}
								onChange={(e) => {
									setPassword({
										password: e.target.value,
										dirty: true,
									});
								}}
								type="password"
								id="password"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="•••••••••"
								required="password"
							/>
							{password.dirty && !password.password && (
								<p className=" text-red-500 text-sm font-light">
									please enter your password.
								</p>
							)}
						</div>

						<button
							type="submit"
							className={
								darkmode
									? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
						>
							Login existing account
						</button>
					</form>
					<br />
					<div>
						<p className="text-xl">Not signed up? </p>
						<button
							onClick={() => {
								handleClick('/register');
							}}
							className={
								darkmode
									? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;

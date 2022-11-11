import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
	const [password, setPassword] = useState({ password: '', dirty: false });
	const [email, setEmail] = useState({ email: '', dirty: false });
	const [data, setData] = useState('');

	let api = 'http://localhost:8000/api/login';

	let navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.get(api, {
				username: email.email,
				password: password.password,
			})
			.then((res) => {
				setData(res.data);
				console.log(res.data);
				navigate('/dashboard');
				alert('Logged in successfully');
			})
			.catch((err) => {
				console.log(err);
				alert('Login failed');
			});
	};

	return (
		<div className="my-32 text-center flex justify-center items-center">
			<div className="">
				<h1 className="text-xl tracking-tight">Login Page</h1>

				<form>
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
						className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100"
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
						className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500  hover:scale-105 ease-in duration-100"
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;

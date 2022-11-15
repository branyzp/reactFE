import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Register() {
	const [firstname, setFirstname] = useState({ firstname: '', dirty: false });
	const [lastname, setLastname] = useState({ lastname: '', dirty: false });
	const [password, setPassword] = useState({ password: '', dirty: false });
	const [checkpw, setCheckpw] = useState({ checkpw: '', dirty: false });
	const [email, setEmail] = useState({ email: '', dirty: false });
	const [data, setData] = useState('');

	let api = 'http://localhost:8000/api/register';

	const { darkmode } = useContext(DarkModeContext);
	let navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(api, {
				username: email.email,
				password: password.password,
				firstname: firstname.firstname,
				lastname: lastname.lastname,
			})
			.then((res) => {
				setData(res.data);
				console.log(res.data);
				navigate('/login');
				alert('Registered successfully');
			})
			.catch((err) => {
				console.log(err);
				alert('Register failed');
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
			<div className="flex my-32 text-center items-center justify-center">
				<div className=" max-w-lg">
					<h1 className="text-xl tracking-tight">Signup Page</h1>

					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="grid gap-6 mb-6 md:grid-cols-2">
							<div className="firstname">
								<label
									htmlFor="first_name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									First name
								</label>
								<input
									onClick={() => {
										setFirstname({
											firstname: firstname.firstname,
											dirty: true,
										});
									}}
									onChange={(e) => {
										setFirstname({
											firstname: e.target.value,
											dirty: true,
										});
									}}
									type="text"
									id="first_name"
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="John"
									required="text"
								/>
								{firstname.dirty && !firstname.firstname && (
									<p className=" text-red-500 text-sm font-light">
										please enter your first name.
									</p>
								)}
							</div>

							<div className="lastname">
								<label
									htmlFor="last_name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									Last name
								</label>
								<input
									onClick={() => {
										setLastname({ lastname: lastname.lastname, dirty: true });
									}}
									onChange={(e) => {
										setLastname({
											lastname: e.target.value,
											dirty: true,
										});
									}}
									type="text"
									id="last_name"
									className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Doe"
									required="text"
								/>
								{lastname.dirty && !lastname.lastname && (
									<p className=" text-red-500 text-sm font-light">
										please enter your last name.
									</p>
								)}
							</div>
						</div>
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
									please enter a password.
								</p>
							)}
						</div>
						<div className="mb-6">
							<label
								htmlFor="confirm_password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Confirm password
							</label>
							<input
								onClick={() => {
									setCheckpw({ checkpw: checkpw.checkpw, dirty: true });
								}}
								onChange={(e) => {
									setCheckpw({
										checkpw: e.target.value,
										dirty: true,
									});
								}}
								type="password"
								id="confirm_password"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="•••••••••"
								required="password"
							/>

							{checkpw.dirty && !checkpw.checkpw && (
								<p className=" text-red-500 text-sm font-light">
									please enter a password.
								</p>
							)}
							{console.log(password.password === checkpw.checkpw)}

							{password.password &&
								checkpw.checkpw &&
								password.password !== checkpw.checkpw && (
									<p className=" text-red-500 text-sm font-light">
										password does not match.
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
							Register new account
						</button>
					</form>
					<br />
					<div>
						<p className="text-xl"> Have an account? </p>
						<button
							onClick={() => {
								handleClick('/login');
							}}
							className={
								darkmode
									? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;

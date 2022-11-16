import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';
import ChangePw from '../components/ChangePw';

function UserDetails({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [newEmail, setNewEmail] = useState(userdetails[1]);
	const [newFirstname, setNewFirstname] = useState(userdetails[3]);
	const [newLastname, setNewLastname] = useState(userdetails[4]);

	const [updateMode, setUpdateMode] = useState(false);
	const [updatepwMode, setUpdatepwMode] = useState(false);

	let updateuserdetails_api = 'http://localhost:8000/api/updateuser';

	const handleSubmit = (e) => {
		e.preventDefault();
		setUpdateMode(!updateMode);

		if (updateMode) {
			axios
				.put(updateuserdetails_api, {
					id: userdetails[0],
					username: newEmail,
					firstname: newFirstname,
					lastname: newLastname,
				})
				.then((res) => console.log(res.data));
		}
	};

	const toggleUpdateMode = () => {
		setUpdateMode(!updateMode);
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="flex my-32 text-center items-center justify-center">
				{updateMode ? (
					<div>
						<h1 className="text-3xl font-bold tracking-wide">
							Update User Details
						</h1>
						<p className=" text-md py-2">Edit your details</p>
						<form onSubmit={(e) => handleSubmit(e)}>
							<p className="py-2">
								Email:{' '}
								<input
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									type="email"
									required
									onChange={(e) => {
										setNewEmail(e.target.value);
									}}
									defaultValue={newEmail}
								></input>
							</p>
							<p className="py-2">
								First Name:{' '}
								<input
									type="text"
									required
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									onChange={(e) => {
										setNewFirstname(e.target.value);
									}}
									defaultValue={newFirstname}
								></input>
							</p>
							<p className="py-2">
								Last Name:{' '}
								<input
									type="text"
									required
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									onChange={(e) => {
										setNewLastname(e.target.value);
									}}
									defaultValue={newLastname}
								></input>
							</p>
							<button
								className={
									darkmode
										? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
										: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
								}
								type="submit"
							>
								Update User Details
							</button>
						</form>
						<ChangePw userdetails={userdetails} />
					</div>
				) : (
					<div>
						<h1 className="text-3xl font-bold tracking-wide">
							User Details Page
						</h1>
						<div>
							<p className=" text-md py-2">Welcome, {newFirstname}.</p>
							<p className="text-md py-2">Email: {newEmail}</p>
							<p className="text-md py-2">First Name: {newFirstname}</p>
							<p className="text-md py-2">Last Name: {newLastname}</p>
							<button
								className={
									darkmode
										? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
										: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
								}
								onClick={() => toggleUpdateMode()}
							>
								Update User Details
							</button>
							<ChangePw userdetails={userdetails} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default UserDetails;

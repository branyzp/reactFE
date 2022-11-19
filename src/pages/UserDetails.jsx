import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';
import ChangePw from '../components/ChangePw';
import DeleteUser from '../components/DeleteUser';

function UserDetails({ userdetails, setIsAuthenticated, setUserDetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [newEmail, setNewEmail] = useState(userdetails[1]);
	const [newFirstname, setNewFirstname] = useState(userdetails[3]);
	const [newLastname, setNewLastname] = useState(userdetails[4]);
	const [joinedDate, setJoinedDate] = useState(userdetails[5]);
	let formattedJoinDate = new Date(joinedDate);

	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const [updateMode, setUpdateMode] = useState(false);

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
					? 'dark bg-slate-900 text-slate-100 min-h-screen py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="flex my-32 text-center items-center justify-center">
				{updateMode ? (
					<div
						className={
							darkmode
								? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
								: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
						}
					>
						<h1 className="text-3xl font-bold tracking-wide">
							Update User Details
						</h1>
						<p className=" text-sm tracking-tighter py-2">Edit your details</p>
						<form onSubmit={(e) => handleSubmit(e)}>
							<p className="py-2">
								<span className=" font-extrabold">Email:</span>{' '}
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
								<span className=" font-extrabold">First Name:</span>{' '}
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
								<span className=" font-extrabold">Last Name:</span>{' '}
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
										? 'mx-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
										: 'mx-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
								}
								type="submit"
							>
								Update User Details
							</button>
							<button
								onClick={(e) => toggleUpdateMode(e)}
								className={
									darkmode
										? ' rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
										: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
								}
							>
								Back
							</button>
						</form>
						<ChangePw userdetails={userdetails} />
						<DeleteUser
							userdetails={userdetails}
							setIsAuthenticated={setIsAuthenticated}
							setUserDetails={setUserDetails}
						/>
					</div>
				) : (
					<div
						className={
							darkmode
								? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
								: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
						}
					>
						<h1 className="text-3xl font-bold tracking-wide">User Info</h1>

						<div className="">
							<img
								src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
								alt=""
								width="20%"
								className="block ml-auto mr-auto"
							/>
							<p className=" text-sm tracking-tighter py-2">
								Welcome, {newFirstname}.
							</p>
							<p className="text-md tracking-tight py-2">
								{' '}
								<span className=" font-extrabold">Email:</span> {newEmail}
							</p>
							<p className="text-md tracking-tight py-2">
								<span className=" font-extrabold">First Name:</span>{' '}
								{newFirstname}
							</p>
							<p className="text-md tracking-tight py-2">
								<span className=" font-extrabold">Last Name: </span>
								{newLastname}
							</p>
							<p className="text-md tracking-tight py-2">
								<span className=" font-extrabold">Joined Date</span>:{' '}
								{formattedJoinDate.getDate()}{' '}
								{monthNames[formattedJoinDate.getMonth()]},{' '}
								{formattedJoinDate.getFullYear()}
							</p>
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
							<DeleteUser
								userdetails={userdetails}
								setIsAuthenticated={setIsAuthenticated}
								setUserDetails={setUserDetails}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default UserDetails;

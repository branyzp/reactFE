import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Dashboard({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [newEmail, setNewEmail] = useState(userdetails[1]);
	const [newFirstname, setNewFirstname] = useState(userdetails[3]);
	const [newLastname, setNewLastname] = useState(userdetails[4]);
	const [updatedUserDetails, setUpdatedUserDetails] = useState({
		id: userdetails[0],
		username: newEmail,
		firstname: newFirstname,
		lastname: newLastname,
	});
	const [updateMode, setUpdateMode] = useState(false);

	let api = 'http://localhost:8000/api/updateuser';

	const handleSubmit = () => {
		setUpdateMode(!updateMode);
		console.log(updateMode);

		if (updateMode) {
			axios.put(api, updatedUserDetails).then((res) => console.log(res.data));
		}
	};

	console.log(updatedUserDetails);

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-32 text-center">
				{updateMode ? (
					<div>
						<h1 className="text-xl tracking-wide">Update User Details</h1>
						<p className=" text-md py-2">Edit your details</p>
						<form>
							<p className="py-2">
								Email:{' '}
								<input
									className="text-black"
									type="email"
									onChange={(e) => {
										setNewEmail(e.target.value);
										setUpdatedUserDetails({
											id: userdetails[0],
											username: newEmail,
											firstname: newFirstname,
											lastname: newLastname,
										});
									}}
									placeholder={newEmail}
								></input>
							</p>
							<p className="py-2">
								First Name:{' '}
								<input
									className="text-black"
									onChange={(e) => {
										setNewFirstname(e.target.value);
									}}
									placeholder={newFirstname}
								></input>
							</p>
							<p className="py-2">
								Last Name:{' '}
								<input
									onChange={(e) => {
										setNewLastname(e.target.value);
									}}
									placeholder={newLastname}
								></input>
							</p>
						</form>
					</div>
				) : (
					<div>
						<h1 className="text-xl tracking-wide">Dashboard Page</h1>
						<p className=" text-md py-2">Welcome, {newFirstname}.</p>
						<p className="text-md py-2">Email: {newEmail}</p>
						<p className="text-md py-2">First Name: {newFirstname}</p>
						<p className="text-md py-2">Last Name: {newLastname}</p>
					</div>
				)}

				<button
					className={
						darkmode
							? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
							: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
					}
					onClick={() => handleSubmit()}
				>
					Update User Details
				</button>
			</div>
		</div>
	);
}

export default Dashboard;

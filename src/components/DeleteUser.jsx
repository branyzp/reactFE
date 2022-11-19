import React, { useState } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteUser({ userdetails, setIsAuthenticated, setUserDetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [deleteMode, setDeleteMode] = useState(false);

	let deleteuser_api = 'http://localhost:8000/api/deleteuser';

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(userdetails[0]);
		axios
			.delete(deleteuser_api, { data: { id: userdetails[0] } })
			.then((res) => {
				console.log(res.data);
				setIsAuthenticated(false);
				setUserDetails('');
				navigate('/login');
				alert('User account successfully deleted.');
			})
			.catch((err) => console.log(err));
	};

	const toggleDeleteMode = (e) => {
		e.preventDefault();
		setDeleteMode(!deleteMode);
	};

	return (
		<div>
			{deleteMode ? (
				<form onSubmit={(e) => handleSubmit(e)}>
					<h1 className="text-sm">
						Are you sure? All account details and data will be deleted.
					</h1>
					<button
						type="submit"
						className={
							darkmode
								? ' mx-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
								: 'mx-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
						}
					>
						Yes, delete my account
					</button>
					<button
						onClick={(e) => toggleDeleteMode(e)}
						className={
							darkmode
								? ' rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
								: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
						}
					>
						Back
					</button>
				</form>
			) : (
				<button
					onClick={(e) => toggleDeleteMode(e)}
					className={
						darkmode
							? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
							: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
					}
				>
					Delete Account
				</button>
			)}
		</div>
	);
}

export default DeleteUser;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Dashboard({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [updatedUserDetails, setUpdatedUserDetails] = useState({
		id: userdetails[0],
		username: userdetails[1],
		firstname: userdetails[3],
		lastname: userdetails[4],
	});
	const [updateMode, setUpdateMode] = useState(false);

	let api = 'http://localhost:8080/api/updateuser';

	const handleClick = () => {
		setUpdateMode(!updateMode);
		console.log(updateMode);

		if (updateMode) {
			axios.put(api, updatedUserDetails).then((res) => console.log(res.data));
		}
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-32 text-center">
				<h1 className="text-xl tracking-wide">Dashboard Page</h1>
				<p className=" text-md py-2">Welcome, {userdetails[3]}.</p>
				{updateMode ? (
					<div>
						<p>
							Email:{' '}
							<input
								value={userdetails[1]}
								placeholder={userdetails[1]}
							></input>
						</p>
						<p>
							First Name:{' '}
							<input
								value={userdetails[3]}
								placeholder={userdetails[3]}
							></input>
						</p>
						<p>
							Last Name:{' '}
							<input
								value={userdetails[4]}
								placeholder={userdetails[4]}
							></input>
						</p>
					</div>
				) : (
					<div>
						<p className="text-md">Email: {userdetails[1]}</p>
						<p className="text-md">First Name: {userdetails[3]}</p>
						<p className="text-md">Last Name: {userdetails[4]}</p>
					</div>
				)}

				<button
					className={
						darkmode
							? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
							: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
					}
					onClick={() => handleClick()}
				>
					Update User Details
				</button>
			</div>
		</div>
	);
}

export default Dashboard;

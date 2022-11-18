import React, { useState } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import axios from 'axios';

function ChangePw({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [updatePw, setUpdatePw] = useState(false);
	const [changePw, setChangePw] = useState(' ');
	const [checkChangePw, setCheckChangePw] = useState(' ');
	const [oldPw, setOldPw] = useState(' ');

	let updatepw_api = 'http://localhost:8000/api/updatepw';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (changePw === checkChangePw) {
			setUpdatePw(!updatePw);
			axios
				.put(updatepw_api, {
					oldPassword: oldPw,
					newPassword: changePw,
					id: userdetails[0],
				})
				.then((res) => console.log(res.data));
		} else {
			alert('Passwords do not match');
		}
	};

	const toggleUpdateMode = (e) => {
		e.preventDefault();
		setUpdatePw(!updatePw);
	};

	return (
		<div className="py-2">
			{updatePw ? (
				<form onSubmit={(e) => handleSubmit(e)}>
					<p className="py-2">
						Current password:{' '}
						<input
							type="password"
							className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							onChange={(e) => {
								setOldPw(e.target.value);
							}}
							required="password"
						></input>
					</p>
					<p className="py-2">
						New password:{' '}
						<input
							className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							onChange={(e) => {
								setChangePw(e.target.value);
							}}
							type="password"
							required="password"
						></input>
					</p>
					<p className="py-2">
						Confirm new password:{' '}
						<input
							type="password"
							className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							onChange={(e) => {
								setCheckChangePw(e.target.value);
							}}
							required="password"
						></input>
					</p>
					{changePw && checkChangePw && changePw !== checkChangePw && (
						<p className=" text-red-500 text-sm font-light">
							password does not match.
						</p>
					)}
					<button
						type="submit"
						className={
							darkmode
								? ' mx-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
								: 'mx-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
						}
					>
						Change Password
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
			) : (
				<button
					onClick={(e) => toggleUpdateMode(e)}
					className={
						darkmode
							? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
							: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
					}
				>
					Change Password
				</button>
			)}
		</div>
	);
}

export default ChangePw;

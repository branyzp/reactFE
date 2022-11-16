import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function ChangePw() {
	const { darkmode } = useContext(DarkModeContext);
	return (
		<div className="py-2">
			<button
				className={
					darkmode
						? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
						: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
				}
			>
				Change Password
			</button>
		</div>
	);
}

export default ChangePw;

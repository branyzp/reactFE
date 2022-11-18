import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Expenses() {
	const { darkmode } = useContext(DarkModeContext);

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="flex my-32 text-center items-center justify-center">
				<h1 className="text-3xl font-bold tracking-wide">Expenses Page</h1>
			</div>
		</div>
	);
}

export default Expenses;

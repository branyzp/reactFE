import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Dashboard({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);

	// useEffect(() => {

	//   return () => {
	// 	second
	//   }
	// }, [third])

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-32 text-center">
				<h1 className="text-3xl font-bold tracking-wide">Dashboard Page</h1>
			</div>
		</div>
	);
}

export default Dashboard;

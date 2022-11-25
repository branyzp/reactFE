import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Dashboard({ userdetails, setUserExpensesData, userExpensesData }) {
	const { darkmode } = useContext(DarkModeContext);

	let local = 'http://localhost:8000';
	let deploy = 'https://kiamsiap.onrender.com';
	let viewexpense_api = `${deploy}/api/viewexpenses`;

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.post(viewexpense_api, {
					userid: userdetails[0],
				})
				.then((res) => {
					setUserExpensesData(res.data);
					console.log(res.data);
				});
		};
		fetchData();
	}, []);

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
				<div
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
					}
				>
					<div className="">
						<h1 className="text-xl font-bold tracking-wide">
							Expenses Summary
						</h1>
						{userExpensesData ? (
							userExpensesData.map((e, i) => {
								return <li index={i}>{e[0]}</li>;
							})
						) : (
							<div>hi</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

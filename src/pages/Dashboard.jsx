import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { VscTrash } from 'react-icons/vsc';

function Dashboard({
	api,
	userdetails,
	setUserExpensesData,
	userExpensesData,
}) {
	const { darkmode } = useContext(DarkModeContext);

	let navigate = useNavigate();

	let viewexpense_api = `${api}/api/viewexpenses`;
	let deleteexpense_api = `${api}/api/deleteexpense`;

	const handleClick = (route) => {
		navigate(route);
	};

	const handleDelete = (id) => {
		axios.delete(deleteexpense_api, {
			data: {
				id: id,
			},
		});
		setUserExpensesData(
			userExpensesData.filter((expense) => expense[0] !== id)
		);
	};

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
			<div className="flex mt-32 mb-16 text-center items-center justify-center">
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

						{userExpensesData.length > 0 ? (
							userExpensesData.map((e, i) => {
								return (
									<div index={i}>
										{/* <li className=" list-decimal" index={i}>
											
										</li> */}
										{e[3]} - ${e[4]}{' '}
										<button
											onClick={() => {
												handleDelete(e[0]);
											}}
											className={
												darkmode
													? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
													: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
											}
										>
											<VscTrash />
										</button>
									</div>
								);
							})
						) : (
							<div>
								<p className="py-5">
									You do not have any existing expenses added.
								</p>

								<button
									onClick={() => {
										handleClick('/expenses');
									}}
									className={
										darkmode
											? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
											: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
									}
								>
									Add an expense
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

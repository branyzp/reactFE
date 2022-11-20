import axios from 'axios';
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Expenses({ userdetails, setUserExpensesData, userExpensesData }) {
	const { darkmode } = useContext(DarkModeContext);
	const [expenseInt, setExpenseInt] = useState('');
	const [expenseName, setExpenseName] = useState('');
	const [category, setCategory] = useState('Transport');
	const [expenseDate, setExpenseDate] = useState(new Date());
	const [expenseComments, setExpenseComments] = useState('');

	const expensesCategoryArr = [
		'Transport',
		'Groceries',
		'Dining out',
		'Entertainment',
		'Other',
	];

	let local = 'http://localhost:8000';
	let deploy = 'https://kiamsiap.onrender.com';
	let addexpense_api = `${deploy}/api/addexpense`;
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

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(addexpense_api, {
				userid: userdetails[0],
				expenseInt: expenseInt,
				expenseName: expenseName,
				category: category,
				expenseDate: expenseDate,
				expenseComments: expenseComments,
			})
			.then((res) => {
				console.log(res.data);
				setUserExpensesData(...userExpensesData, res.data);
				alert('Expense saved');
			});
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="flex my-32 text-center items-center justify-center">
				<div
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
					}
				>
					<h1 className="text-3xl font-bold tracking-wide">Expenses Page</h1>
					<p className=" text-sm tracking-tighter py-2">Add New Expense</p>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="grid grid-cols-2 gap-4">
							<p className="py-2">
								<span className=" font-extrabold">Expense Name:</span>{' '}
								<input
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									type="text"
									required
									onChange={(e) => {
										setExpenseName(e.target.value);
									}}
								></input>
							</p>
							<p className="py-2">
								<span className=" font-extrabold">Expense Amount($):</span>{' '}
								<input
									type="number"
									min="1"
									step="0.01"
									required
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									onChange={(e) => {
										setExpenseInt(e.target.value);
									}}
								></input>
							</p>
							<p className="py-2">
								<span className=" font-extrabold">Category:</span>{' '}
								<select
									required
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									{expensesCategoryArr.map((i, index) => {
										return (
											<option value={i} key={index}>
												{i}
											</option>
										);
									})}
								</select>
							</p>
							<p className="py-2">
								<span className=" font-extrabold">Date Incurred:</span>{' '}
								<input
									type="date"
									required
									className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									onChange={(e) => {
										setExpenseDate(e.target.value);
									}}
								></input>
							</p>
						</div>
						<p className="py-2">
							<span className=" font-extrabold">Additional comments:</span>{' '}
							<textarea
								rows={5}
								cols={5}
								type="text"
								className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(e) => {
									setExpenseComments(e.target.value);
								}}
							></textarea>
						</p>
						<button
							className={
								darkmode
									? 'mx-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'mx-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
							type="submit"
						>
							Add Expense
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Expenses;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
	let navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	return (
		<div className="my-40 text-center">
			<h1 className="text-xl tracking-tight">
				Hi, this web app was developed using React and Flask to facilitate my
				learning of these technologies.
			</h1>
			<br />

			<div className="">
				<div className="">
					<button
						onClick={() => {
							handleClick('/login');
						}}
						className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:scale-105 ease-in duration-100"
					>
						Login
					</button>
				</div>
				<br />
				<div className="">
					<button
						onClick={() => {
							handleClick('/register');
						}}
						className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:scale-105 ease-in duration-100 "
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}

export default Index;

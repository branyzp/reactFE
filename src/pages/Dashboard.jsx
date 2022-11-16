import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

function Dashboard({ userdetails }) {
	const { darkmode } = useContext(DarkModeContext);
	const [newEmail, setNewEmail] = useState(userdetails[1]);
	const [newFirstname, setNewFirstname] = useState(userdetails[3]);
	const [newLastname, setNewLastname] = useState(userdetails[4]);

	const [updateMode, setUpdateMode] = useState(false);
	const [updatepwMode, setUpdatepwMode] = useState(false);

	let updateuserdetails_api = 'http://localhost:8000/api/updateuser';
	let updatepw_api = 'http://localhost:8000/api/updatepw';

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-32 text-center">
				
			</div>
		</div>
	);
}

export default Dashboard;

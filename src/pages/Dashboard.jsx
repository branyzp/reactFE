import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Dashboard() {
	const [userdetails, setUserdetails] = useState('{}');

	return (
		<div className="my-32 text-center">
			<h1 className="text-xl tracking-tight">Dashboard Page</h1>
		</div>
	);
}

export default Dashboard;

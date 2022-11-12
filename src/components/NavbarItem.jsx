import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavbarItem({ navitem }) {
	let navigate = useNavigate();

	const handleClick = (route) => {
		navigate(route);
	};

	return (
		<Link to={`/${navitem}`}>
			<li
				className="ml-10 py-4 text-sm uppercase hover:border-b"
				onClick={() => handleClick(`/${navitem}`)}
			>
				<p className="text-sm tracking-widest">{navitem}</p>
			</li>
		</Link>
	);
}

export default NavbarItem;

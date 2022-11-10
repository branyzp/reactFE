import React from 'react';
import { Link } from 'react-router-dom';

function NavbarItem({ navitem, nav, setNav }) {
	function handleClick() {
		if (nav === true) {
			setNav(!nav);
		}
	}

	return (
		<Link href={`/#${navitem}`}>
			<li
				className="ml-10 py-4 text-sm uppercase hover:border-b"
				onClick={handleClick}
			>
				<p className="text-sm tracking-widest">{navitem}</p>
			</li>
		</Link>
	);
}

export default NavbarItem;

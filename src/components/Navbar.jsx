import React from 'react';
import NavbarItem from './NavbarItem';
const navBarArr = ['login', 'register'];
const authenticatedNavBarArr = ['dashboard', 'logout'];

function Navbar({ isAuthenticated }) {
	return (
		<div className="bg-slate-100 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm ">
			<div className="flex justify-between items-center w-full h-full px-2">
				<h1 className="uppercase tracking-widest">test app</h1>
				<div>
					{isAuthenticated ? (
						<ul className="flex px-5">
							{authenticatedNavBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
						</ul>
					) : (
						<ul className="flex px-5">
							{navBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;

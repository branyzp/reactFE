import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import LightSwitch from './LightSwitch';
import NavbarItem from './NavbarItem';
const navBarArr = ['login', 'register'];
const authenticatedNavBarArr = ['dashboard', 'user details', 'logout'];

function Navbar({ isAuthenticated }) {
	const { darkmode } = useContext(DarkModeContext);

	return (
		<div
			className={
				darkmode
					? 'bg-slate-900 bg-gradient-to-tl from-slate-900 text-slate-200 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm '
					: 'bg-slate-100 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm '
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2">
				<h1 className="uppercase tracking-widest">test app</h1>
				<div>
					{isAuthenticated ? (
						<ul className="flex px-5">
							{authenticatedNavBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
							<li className="ml-10 py-3">
								<LightSwitch />
							</li>
						</ul>
					) : (
						<ul className="flex px-5">
							{navBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
							<li className="ml-10 py-3">
								<LightSwitch />
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;

import React from 'react';
import NavbarItem from './NavbarItem';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillMail,
	AiOutlineClose,
	AiOutlineMenu,
} from 'react-icons/ai';
import { useState } from 'react';

const navBarArr = ['Login', 'Signup'];

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="bg-slate-100 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm ">
			<div className="flex justify-between items-center w-full h-full px-2">
				<h1 className="uppercase tracking-widest">test app</h1>
				<div>
					<ul className="flex px-5">
						{navBarArr.map((navitem, index) => {
							return (
								<NavbarItem
									key={index}
									navitem={navitem}
									nav={nav}
									setNav={setNav}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

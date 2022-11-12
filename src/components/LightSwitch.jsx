import { useContext } from 'react';
import React from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function LightSwitch() {
	const { darkmode, toggleDarkMode } = useContext(DarkModeContext);
	const handleClick = () => {
		toggleDarkMode();
	};
	return (
		<div>
			<img
				onClick={() => {
					handleClick();
				}}
				className=" w-7 hover:cursor-pointer"
				src={
					darkmode
						? 'https://i.pinimg.com/originals/ec/a1/d7/eca1d7141639ee5b85e4f4c9a47d8ae4.png'
						: 'https://cdn-icons-png.flaticon.com/512/826/826955.png'
				}
				alt=""
			/>
		</div>
	);
}

export default LightSwitch;

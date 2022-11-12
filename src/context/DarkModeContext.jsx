import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {
	const [darkmode, setDarkmode] = useState(false);
	const toggleDarkMode = () => {
		setDarkmode(!darkmode);
	};

	console.log('darkmode: ' + darkmode);

	return (
		<div>
			<DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
				{props.children}
			</DarkModeContext.Provider>
		</div>
	);
}

export { DarkModeProvider, DarkModeContext };

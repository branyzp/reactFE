import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Footer() {
	const { darkmode } = useContext(DarkModeContext);

	return (
		<div
			className={
				darkmode
					? 'bg-slate-900 bg-gradient-to-tr from-slate-800 text-slate-200 bg-opacity-50 fixed w-full h-20 bottom-0 shadow-xl z-[100] backdrop-blur-sm '
					: 'bg-slate-200 bg-opacity-50 fixed w-full h-20 bottom-0 shadow-xl z-[100] backdrop-blur-sm '
			}
		>
			<div className="flex justify-center items-center w-full h-full px-2">
				<div className="flex">
					<p className="uppercase tracking-widest py-3">
						Developed with{' '}
						<a
							className={
								darkmode
									? 'text-yellow-400 font-semibold'
									: 'text-blue-400 font-semibold'
							}
							href="https://reactjs.org/docs/create-a-new-react-app.html"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							React
						</a>{' '}
						and{' '}
						<a
							className={
								darkmode
									? 'text-yellow-400 font-semibold'
									: 'text-blue-400 font-semibold'
							}
							href="https://flask.palletsprojects.com/en/2.2.x/"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							Flask
						</a>
					</p>
					<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
						<button
							className={
								darkmode
									? ' bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded-xl hover:scale-105 ease-in duration-100'
									: ' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100'
							}
						>
							<a
								href="https://www.linkedin.com/in/branyzp/"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<AiFillLinkedin />
							</a>
						</button>
						<button
							className={
								darkmode
									? ' bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded-xl hover:scale-105 ease-in duration-100'
									: ' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100'
							}
						>
							<a
								href="https://github.com/branyzp"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<AiFillGithub />
							</a>
						</button>
						<button
							className={
								darkmode
									? ' bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded-xl hover:scale-105 ease-in duration-100'
									: ' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100'
							}
						>
							<a
								href="mailto:Branyzp@gmail.com"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<AiFillMail />
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

function Footer() {
	return (
		<div className=" bg-slate-100 bg-opacity-50 fixed bottom-0 w-full shadow-inner z-[100] backdrop-blur-sm ">
			<div className="flex justify-center items-center w-full h-full px-2">
				<div className="flex">
					<p className="uppercase tracking-widest py-3">
						Developed with React and Flask
					</p>
					<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
						<button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100 ">
							<a
								href="https://www.linkedin.com/in/branyzp/"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<AiFillLinkedin />
							</a>
						</button>
						<button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100">
							<a
								href="https://github.com/branyzp"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<AiFillGithub />
							</a>
						</button>
						<button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100">
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

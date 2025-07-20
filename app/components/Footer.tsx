import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer
			className="w-full h-16 text-xs 2xl:text-sm bg-inherit text-slate-500 flex flex-col gap-1 items-center justify-center 
			py-12 border-t border-slate-700 mt-12 mb-2"
		>
			<p>
				<span className="font-['Orbitron']">CyberAni</span> does not store any
				files on our server, all contents are provided by non-affiliated third
				parties.
			</p>
			<p className="">© 2023 CyberAni. All rights reserved.</p>

			<section className="flex gap-3 text-slate-400 mt-2">
				<a
					href="https://github.com/syahrilhanla/vite-cyberani"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					<BsGithub
						className="hover:text-slate-200 scale-105 duration-400"
						size={22}
					/>
				</a>
				<a
					href="https://linkedin.com/in/syahril-hanla/"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					<BsLinkedin
						className="hover:text-slate-200 scale-105 duration-400"
						size={22}
					/>
				</a>
			</section>
		</footer>
	);
};

export default Footer;

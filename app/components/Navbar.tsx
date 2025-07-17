import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { FaBars, FaTimes } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import "../global.css";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsAtTop(false);
		} else {
			setIsAtTop(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div
			className={`fixed h-20 w-full flex justify-between items-center px-4 text-gray-300 z-50 transition-colors duration-300 ${
				isAtTop ? "bg-transparent" : "bg-[#0a192fd8] shadow-lg"
			}`}
		>
			<div className=" hidden lg:flex justify-around items-center lg:w-fit">
				<div className="ml-4 w-fit h-16 flex items-center text-2xl font-light font-['Orbitron']">
					<NavLink to={"/"}>CyberAni</NavLink>
				</div>

				{/* Search Bar */}
				<span className="ml-12">
					<SearchComponent />
				</span>

				{/* Menu */}
				<ul className="hidden lg:flex justify-between min-w-max gap-6 ml-6 font-medium">
					<li>
						<NavLink to={"/popular"}>Popular</NavLink>
					</li>
					<li>
						<NavLink to={"/latest"}>Latest</NavLink>
					</li>
					<li>
						<NavLink to={"/trending"}>Trending</NavLink>
					</li>
					<li>
						<NavLink to={"/genre"}>Genre</NavLink>
					</li>
					<li>
						<NavLink to={"/movies"}>Movies</NavLink>
					</li>
				</ul>
			</div>

			{/* ======================= MOBILE LAYOUT ============================ */}
			{/* Hamburger */}
			<div className=" flex lg:hidden z-10 cursor-pointer">
				{navbar ? (
					<>
						<FaTimes onClick={() => setNavbar((prevValue) => !prevValue)} />
					</>
				) : (
					<FaBars onClick={() => setNavbar((prevValue) => !prevValue)} />
				)}
			</div>

			{/* Mobile Menu */}
			<ul className={setMobileNavbar()}>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/popular"}>Popular</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/latest"}>Latest</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/trending"}>Trending</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/genre"}>Genre</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/movies"}>Movies</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

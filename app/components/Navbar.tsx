import { useState } from "react";
import { NavLink } from "react-router";

import { FaBars, FaTimes } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import "../global.css";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div className="fixed h-[10vh] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
			<div className=" hidden lg:flex justify-around items-center lg:w-fit">
				<div className="ml-4 w-fit h-16 flex items-center text-2xl font-light font-['Orbitron']">
					<NavLink to={"/"}>CyberAni</NavLink>
				</div>

				{/* Menu */}
				<ul className="hidden lg:flex justify-between min-w-max gap-6 ml-14 font-medium">
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
						<NavLink to={"/genres"}>Genre</NavLink>
					</li>
					<li>
						<NavLink to={"/movies"}>Movies</NavLink>
					</li>
				</ul>
			</div>

			{/* Search Bar */}
			<SearchComponent />

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
					<NavLink to={"/genres"}>Genre</NavLink>
				</li>
				<li
					className="pb-3 text-3xl"
					onClick={() => setNavbar((prevValue) => !prevValue)}
				>
					<NavLink to={"/genres"}>Genre</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

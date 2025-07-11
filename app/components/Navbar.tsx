import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { FaBars, FaTimes } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import "../global.css";
import { SlArrowDown } from "react-icons/sl";

const BASE_URL = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [genreList, setGenreList] = useState<string[]>([]);

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        fetch(`${BASE_URL}/genre/list`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setGenreList(data);
                } else if (Array.isArray(data.genres)) {
                    setGenreList(data.genres);
                }
            })
            .catch((e) => {
                console.error("Error fetching genre list:", e);
                setGenreList([]);
            });
    }, []);

    const setMobileNavbar = () => {
        if (!navbar) {
            return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
        } else return "lg:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
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
                        <NavLink to={"category/popular"}>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to={"category/latest"}>Latest</NavLink>
                    </li>
                    <li>
                        <NavLink to={"category/trending"}>Trending</NavLink>
                    </li>
                    <div className="relative group">
                        <button className="flex gap-4 justify-center  items-center " onClick={() => setShowDropdown(!showDropdown)}>
                            Genre <SlArrowDown />
                        </button>

                        <ul className={`absolute opacity-0  bg-white ${showDropdown ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top transition-all duration-300 ease-in-out rounded mt-1 z-10 w-[30rem] grid grid-cols-3 group-hover:opacity-100 group-hover:scale-y-100`}>
                            {genreList.map((item) => (
                                <li key={item} className=" hover:bg-blue-100 px-6 py-2 text-black transition-all duration-500 ease-in-out">
                                    <NavLink to={`category/${item}`}>{item}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <li>
                        <NavLink to={"category/movies"}>Movies</NavLink>
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
                <li className="pb-3 text-3xl" onClick={() => setNavbar((prevValue) => !prevValue)}>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="pb-3 text-3xl" onClick={() => setNavbar((prevValue) => !prevValue)}>
                    <NavLink to={"/popular"}>Popular</NavLink>
                </li>
                <li className="pb-3 text-3xl" onClick={() => setNavbar((prevValue) => !prevValue)}>
                    <NavLink to={"/latest"}>Latest</NavLink>
                </li>
                <li className="pb-3 text-3xl" onClick={() => setNavbar((prevValue) => !prevValue)}>
                    <NavLink to={"/trending"}>Trending</NavLink>
                </li>
                <div className="relative group w-full ">
                    <div className="flex justify-center ">
                    <button className="flex gap-4 justify-center  items-center pb-3 text-3xl " onClick={() => setShowDropdown(!showDropdown)}>
                            <span>Genre</span>
                            <SlArrowDown className="text-md" />
                    </button>
                    </div>

                    <ul className={`absolute opacity-0  bg-white ${showDropdown ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top transition-all duration-300 ease-in-out rounded mt-1 z-10 w-[100%] sm:w-[30rem] grid grid-cols-3 group-hover:opacity-100 group-hover:scale-y-100`}>
                        {genreList.map((item) => (
                            <li key={item} className=" hover:bg-blue-100 px-6 py-2 text-black transition-all duration-500 ease-in-out">
                                <NavLink to={`category/${item}`}>{item}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <li className="pb-3 text-3xl" onClick={() => setNavbar((prevValue) => !prevValue)}>
                    <NavLink to={"/genres"}>Movie</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

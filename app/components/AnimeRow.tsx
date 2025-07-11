import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import AnimeCardShowroom from "./AnimeCardShowroom";

import { fetchAnimeList } from "@/lib/api"; // Adjust the import path as necessary
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { APIEndpoint } from "@/enum/anime.enum"; // Adjust the import path as necessary

import type { AnimeList } from "@/types/anime.type";
// import useWindowDimensions from "../utils/useWindowDimensions";

interface Props {
	rowTitle: string;
	category: APIEndpoint;
	toPage: string;
}

const AnimeRow = ({ rowTitle, category, toPage }: Props) => {
	const [animeData, setAnimeData] = useState<AnimeList[]>([]);
	const [loading, setLoading] = useState(true);

	// const { width } = useWindowDimensions();
	const width: number = 1281;

	const fetchData = async () => {
		try {
			const { results } = await fetchAnimeList(category);

			setAnimeData(results);
		} catch (error) {
			console.error("Error fetching anime data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const slidesPerView =
		width < 640 ? 2 : width < 768 ? 3 : width < 1024 ? 3 : width < 1280 ? 5 : 5;

	return (
		<div className="flex flex-col w-[90%] lg:w-[80%] mt-2 text-left font-medium text-slate-200 pb-5 overflow-visible">
			<div className="w-fit">
				<NavLink to={`/${toPage}`}>
					<h1 className="text-2xl mb-2 ml-2 cursor-pointer hover:text-blue-500 duration-300">
						{rowTitle} -<span className="font-light"> Click for more</span>
					</h1>
				</NavLink>
			</div>
			<div className="w-full relative overflow-visible">
				{loading ? (
					<div className="flex lg:gap-4 gap-2 justify-center items-center h-74">
						<AnimeCardSkeleton />
					</div>
				) : (
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						slidesPerView={slidesPerView}
						spaceBetween={5}
						className="anime-row-swiper overflow-visible"
					>
						{animeData.map((anime, index) => (
							<SwiperSlide key={index} className="pt-3 pb-2 overflow-visible">
								<AnimeCardShowroom data={anime} />
							</SwiperSlide>
						))}
						<div
							className="swiper-button-next opacity-25 hover:opacity-70 duration-200"
							style={{ color: "#c5c5c5" }}
						></div>
						<div
							className="swiper-button-prev opacity-25 hover:opacity-70 duration-200"
							style={{ color: "#c5c5c5" }}
						></div>
					</Swiper>
				)}
			</div>
		</div>
	);
};

export default AnimeRow;

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import AnimeCardShowroom from "./AnimeCardShowroom";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

import { fetchAnimeList } from "@/lib/api"; // Adjust the import path as necessary
import { useWindowSize } from "usehooks-ts";

import { APIEndpoint } from "@/enum/anime.enum"; // Adjust the import path as necessary

import type { AnimeList } from "@/types/anime.type";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
	rowTitle: string;
	category: APIEndpoint;
	toPage: string;
}

const AnimeRow = ({ rowTitle, category, toPage }: Props) => {
	const [animeData, setAnimeData] = useState<AnimeList[]>([]);
	const [loading, setLoading] = useState(true);

	const { width } = useWindowSize();

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

	// Create a ref for the Swiper instance navigation
	const swiperRef = useRef<SwiperRef>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.swiper.slidePrev();
	};

	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.swiper.slideNext();
	};

	return (
		<div className="flex flex-col w-[90%] lg:w-[80%] mt-2 text-left font-medium text-slate-200 pb-5 overflow-visible">
			<div className="w-full flex justify-between items-center">
				<h1 className="text-2xl mb-2 ml-2">{rowTitle}</h1>
				<NavLink to={`/${toPage}`}>
					<span className="lg:-mr-12 text-sm flex items-center hover:text-slate-300 transition-all duration-300 hover:scale-105">
						See All <MdKeyboardArrowRight size={18} />
					</span>
				</NavLink>
			</div>
			<div className="w-full relative overflow-visible">
				{loading ? (
					<div className="flex lg:gap-4 gap-2 justify-center items-center h-74">
						<AnimeCardSkeleton />
					</div>
				) : (
					<div className="relative w-full h-full ">
						<Swiper
							ref={swiperRef}
							modules={[Navigation]}
							slidesPerView={slidesPerView}
							spaceBetween={12}
							className="overflow-visible space-x-4"
						>
							{animeData.map((anime, index) => (
								<SwiperSlide key={index} className="pt-3 pb-2">
									<AnimeCardShowroom data={anime} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className="absolute h-full -right-14 hidden 2xl:-right-10 lg:grid top-1/2 mt-1 py-2 -translate-y-1/2 gap-3 z-20">
							<button
								onClick={handlePrev}
								className="bg-slate-800/80 h-full p-2 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700 transition"
							>
								<MdKeyboardArrowLeft size={28} />
							</button>
							<button
								onClick={handleNext}
								className="bg-slate-800/80 h-full p-2 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700 transition"
							>
								<MdKeyboardArrowRight size={28} />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AnimeRow;

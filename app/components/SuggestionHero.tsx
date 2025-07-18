import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SuggestionCard from "./SuggestionCard";
import { fetchSpotlightAnime } from "@/lib/api";

import type { SuggestionAnime } from "@/types/anime.type";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HeroSkeleton = () => (
	<div className="h-full w-full bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse rounded-lg flex flex-col justify-center items-start p-6">
		<div className="h-10 w-1/3 bg-slate-600 rounded mb-4"></div>
		<div className="h-6 w-1/3 bg-slate-600 rounded mb-2"></div>
		<div className="h-4 w-1/3 bg-slate-600 rounded mb-6"></div>
		<div className="h-10 w-32 bg-slate-600 rounded-full"></div>
	</div>
);

const Suggestion = () => {
	const [spotlights, setSpotlights] = useState<SuggestionAnime[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSpotlight = async () => {
			setLoading(true);

			const spotlights = await fetchSpotlightAnime();

			setSpotlights(spotlights);
			setLoading(false);
		};

		fetchSpotlight();
	}, []);

	// Create a ref for the Swiper instance navigation
	const swiperRef = useRef<SwiperRef>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.swiper.slidePrev();
	};

	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.swiper.slideNext();
	};

	return (
		<div className="w-full mb-7 md:mt-0 mt-20">
			{loading ? (
				<div className="flex justify-center items-center h-[20dvh] lg:h-[50dvh] text-slate-200">
					<HeroSkeleton />
				</div>
			) : (
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Autoplay]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					autoplay={{ delay: 3500 }}
					pagination={{
						el: ".swiper-pagination",
						clickable: true,
						bulletClass: ".swiper-pagination-bullet",
					}}
					spaceBetween={100}
					centeredSlides={true}
					centeredSlidesBounds={true}
					slidesPerView={1}
					loop={true}
					speed={500}
					rewind={true}
				>
					{spotlights.map((spotlight) => (
						<SwiperSlide key={spotlight.title}>
							<SuggestionCard spotlight={spotlight} />
						</SwiperSlide>
					))}
					<div className="swiper-pagination"></div>
					<div className="absolute right-10 hidden md:grid top-85/100 mt-1 py-2 -translate-y-1/2 gap-2 z-20">
						<button
							onClick={handlePrev}
							className="bg-slate-800/60 h-full p-1 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700/70 transition"
						>
							<MdKeyboardArrowLeft size={28} />
						</button>
						<button
							onClick={handleNext}
							className="bg-slate-800/60 h-full p-1 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700/70 transition"
						>
							<MdKeyboardArrowRight size={28} />
						</button>
					</div>
				</Swiper>
			)}
		</div>
	);
};

export default Suggestion;

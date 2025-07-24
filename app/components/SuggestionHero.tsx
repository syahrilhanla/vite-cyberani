import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SuggestionCard from "./SuggestionCard";
import SuggestionNavigation from "./SuggestionNavigation";

import { fetchSpotlightAnime } from "@/lib/api";

import type { SuggestionAnime } from "@/types/anime.type";

const HeroSkeleton = () => (
	<div className="h-full w-full bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse flex flex-col justify-center items-start p-6">
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

	return (
		<div className="w-full mb-7 md:mt-0 mt-20">
			{loading ? (
				<div className="flex justify-center items-center h-[20dvh] lg:h-[60dvh] text-slate-200">
					<HeroSkeleton />
				</div>
			) : (
				<Swiper
					modules={[Navigation, Autoplay]}
					autoplay={{ delay: 5000 }}
					spaceBetween={100}
					slidesPerView={1}
					loop={true}
					rewind={true}
					speed={1000}
					className="overflow-visible"
				>
					{spotlights.map((spotlight) => (
						<SwiperSlide key={spotlight.title}>
							<SuggestionCard spotlight={spotlight} />
						</SwiperSlide>
					))}
					<SuggestionNavigation />
				</Swiper>
			)}
		</div>
	);
};

export default Suggestion;

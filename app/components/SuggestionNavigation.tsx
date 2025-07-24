import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SuggestionNavigation = () => {
	const swiper = useSwiper();

	return (
		<>
			<div className="swiper-pagination"></div>
			<div className="absolute right-10 hidden md:grid top-85/100 mt-1 py-2 -translate-y-1/2 gap-2 z-20">
				<button
					onClick={() => swiper.slidePrev()}
					className="bg-slate-800/60 h-full p-1 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700/70 transition"
				>
					<MdKeyboardArrowLeft size={28} />
				</button>
				<button
					onClick={() => swiper.slideNext()}
					className="bg-slate-800/60 h-full p-1 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700/70 transition"
				>
					<MdKeyboardArrowRight size={28} />
				</button>
			</div>
		</>
	);
};

export default SuggestionNavigation;

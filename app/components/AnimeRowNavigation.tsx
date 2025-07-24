import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { type SwiperClass } from "swiper/react";

interface Props {
	swiper: SwiperClass | null;
}

const AnimeRowNavigation = ({ swiper }: Props) => {
	return (
		<div className="absolute h-full -right-14 hidden 2xl:-right-10 lg:grid top-1/2 mt-1 py-2 -translate-y-1/2 gap-3 z-20">
			<button
				type="button"
				onClick={() => swiper?.slidePrev()}
				className="bg-slate-800/80 h-full p-2 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700 transition"
			>
				<MdKeyboardArrowLeft size={28} />
			</button>
			<button
				type="button"
				onClick={() => swiper?.slideNext()}
				className="bg-slate-800/80 h-full p-2 rounded-xl text-lg text-slate-200 shadow hover:bg-slate-700 transition"
			>
				<MdKeyboardArrowRight size={28} />
			</button>
		</div>
	);
};

export default AnimeRowNavigation;

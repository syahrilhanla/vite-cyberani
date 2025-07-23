import { NavLink } from "react-router";

import { FaCalendar, FaPlayCircle } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import { IoPlayCircle } from "react-icons/io5";

import type { SuggestionAnime } from "@/types/anime.type";

interface Props {
	spotlight: SuggestionAnime;
}

const SuggestionCard = ({ spotlight }: Props) => {
	return (
		<div className=" text-gray-300 flex justify-center min-w-full">
			<div
				className="shadow-[-70px 21px 124px -15px rgba(0,0,0,0.77) inset] grid grid-cols-[3fr_6fr] lg:grid-cols-[5fr_5fr] w-full h-64 md:h-[60dvh] 
				bg-[#0a192f] hover:cursor-grab overflow-visible
				group-hover:scale-105 group-hover:shadow-slate-800/70 transition-all duration-300"
			>
				<div className="relative px-4 md:px-12 lg:py-0 py-8 z-10 flex flex-col gap-1 md:gap-4 items-start justify-end lg:justify-center h-full overflow-visible">
					<h2 className="max-w-xs md:max-w-2xs lg:max-w-2xl whitespace-nowrap truncate text-xl sm:text-2xl lg:text-4xl font-bold text-slate-200">
						{spotlight.title}
					</h2>
					<div className="hidden md:flex gap-5 text-slate-200">
						<span
							className="flex items-center text-xs sm:text-sm xl:text-base text-nowrap"
							title="Release Date"
						>
							<FaCalendar className="inline mr-1 h-5 w-5" />{" "}
							{spotlight.releaseDate}
						</span>
						<span
							className="flex items-center text-xs sm:text-sm xl:text-base"
							title="Type of Anime"
						>
							<FaPlayCircle className="inline mr-1 h-6 w-6" /> {spotlight.type}
						</span>
						<span
							className="flex items-center text-xs sm:text-sm xl:text-base"
							title="Total Episodes"
						>
							<GrChapterAdd className="inline mr-1 h-6 w-6" /> {spotlight.sub}
						</span>
					</div>
					<p className="invisible md:visible text-xs sm:text-sm xl:text-base text-slate-200 line-clamp-1 md:line-clamp-3 leading:3 md:leading-6 text-ellipsis">
						{spotlight.description}
					</p>
					<NavLink to={`/anime/${spotlight.id}`}>
						<button
							className="md:mt-4 px-4 py-1.5 text-slate-800 rounded-full text-xs sm:text-sm xl:text-base
						bg-slate-300 hover:scale-[1.03] transition-transform duration-300 font-semibold"
						>
							<IoPlayCircle className="inline mr-1" size={24} />
							Watch Now
						</button>
					</NavLink>
				</div>
				<div className="absolute xl:relative w-full h-full">
					<div
						className="absolute inset-0 bg-cover bg-center md:mask-none mask-b-from-50% mask-b-to-95%"
						style={{
							backgroundImage: `url(${spotlight.banner})`,
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/70 sm:via-[#0a192f]/80 lg:via-[#0a192f]/50 to-transparent" />
				</div>
			</div>
		</div>
	);
};

export default SuggestionCard;

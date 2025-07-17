import type { SuggestionAnime } from "@/types/anime.type";
import { FaCalendar, FaPlayCircle } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import { IoPlayCircle } from "react-icons/io5";
import { NavLink } from "react-router";

interface Props {
	spotlight: SuggestionAnime;
}

const SuggestionCard = ({ spotlight }: Props) => {
	return (
		<div className=" text-gray-300 flex justify-center min-w-full">
			<div
				className="grid grid-cols-[5fr_4fr] md:grid-cols-[4fr_6fr] w-full h-64 md:h-[60dvh] overflow-hidden 
				bg-[#0a192f] inset-shadow-sm
				group-hover:scale-105 group-hover:shadow-slate-800/70 transition-all duration-300"
			>
				<div className="relative px-4 md:px-12 z-10 flex flex-col gap-4 items-start justify-center h-full">
					<h2 className="text-xl md:text-4xl font-bold text-slate-200">
						{spotlight.title}
					</h2>
					<div className="text-slate-200 flex gap-4">
						<span
							className="flex items-center text-sm md:text-base"
							title="Release Date"
						>
							<FaCalendar className="inline mr-1 h-5 w-5" />{" "}
							{spotlight.releaseDate}
						</span>
						<span
							className="flex items-center text-sm md:text-base"
							title="Type of Anime"
						>
							<FaPlayCircle className="inline mr-1 h-6 w-6" /> {spotlight.type}
						</span>
						<span
							className="flex items-center text-sm md:text-base"
							title="Total Episodes"
						>
							<GrChapterAdd className="inline mr-1 h-6 w-6" /> {spotlight.sub}
						</span>
					</div>
					<p className="invisible md:visible text-xs md:text-base text-slate-200 line-clamp-1 md:line-clamp-3 leading-6 text-ellipsis">
						{spotlight.description}
					</p>
					<NavLink to={`${spotlight.url}`}>
						<button
							className="md:mt-4 px-4 py-1.5 text-slate-800 rounded-full text-sm md:text-base
						bg-slate-300 hover:scale-[1.03] transition-transform duration-300 font-semibold"
						>
							<IoPlayCircle className="inline mr-1" size={24} />
							Watch Now
						</button>
					</NavLink>
				</div>
				<div className="relative w-full h-full">
					<div
						className="absolute inset-0 bg-cover bg-center "
						style={{
							backgroundImage: `url(${spotlight.banner})`,
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/50 to-transparent" />
				</div>
			</div>
		</div>
	);
};

export default SuggestionCard;

import { goToEpisode } from "@/lib/anime.slice";
import type { AnimeList } from "@/types/anime.type";
import { GrChapterAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";

interface Props {
	data: AnimeList;
}

const AnimeCardShowroom = ({ data }: Props) => {
	const dispatch = useDispatch();

	return (
		<article
			className="space-y-2 w-full sm:w-48 md:w-52 lg:w-56 xl:w-64 mx-1 lg:mx-0 group flex flex-col items-center justify-between"
			onClick={() => {
				dispatch(goToEpisode(1));
			}}
		>
			<NavLink
				className={"w-fit sm:w-48 md:w-52 lg:w-56 xl:w-64"}
				to={`/anime/${data.id}`}
			>
				<div
					className="group grid w-full shadow-lg group-hover:scale-[1.02] transition-all duration-300 overflow-hidden
				cursor-pointer xl:h-[20rem] h-[14rem] rounded-lg"
				>
					{/* Anime Image */}
					<div className="rounded-t-lg relative w-full min-h-0 min-w-0">
						<img
							src={data.image}
							alt={data.title}
							className="w-full h-full object-cover min-h-0 min-w-0"
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent h-16" />
					</div>
				</div>

				{/* Anime Info */}
				<div className="flex flex-col items-center gap-1 mt-1">
					<h3
						className="text-slate-200 
						lg:text-base text-sm text-center w-full 
						whitespace-normal text-ellipsis max-w-full line-clamp-1"
						title={data.title}
					>
						{data.title}
					</h3>
					<div className="w-full flex justify-between items-center">
						<p className="flex gap-1 items-center text-sm">
							<GrChapterAdd className="text-slate-400" /> {data.sub}
						</p>
						<p className="text-xs rounded-full text-slate-400">{data.type}</p>
					</div>
				</div>
			</NavLink>
		</article>
	);
};

export default AnimeCardShowroom;

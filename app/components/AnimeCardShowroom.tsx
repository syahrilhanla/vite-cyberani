import { goToEpisode } from "@/lib/anime.slice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";

interface Props {
	data: any;
}

const AnimeCardShowroom = ({ data }: Props) => {
	const dispatch = useDispatch();

	return (
		<NavLink to={`/anime/${data.id}`}>
			<article
				className="group relative w-fit shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden
					cursor-pointer rounded-3xl xl:h-[20rem] h-[14rem]"
				onClick={() => {
					dispatch(goToEpisode(1));
				}}
			>
				{/* Anime Image */}
				<div className="rounded-t-3xl">
					<img
						src={data.image}
						alt={data.title}
						className="object-contain duration-500 group-hover:opacity-20 hover:blur-[1px] opacity-[0.75] rounded-t-3xl w-70 h-98"
					/>
				</div>

				{/* Anime Info */}
				<div className="absolute bottom-1 left-0 right-0 z-20 flex flex-col items-center">
					<h3
						className="text-slate-100 hover:text-white font-semibold 
						text-lg text-center truncate w-full drop-shadow-lg 
						whitespace-normal text-ellipsis max-w-full px-3"
					>
						{data.title}
					</h3>
					<div className="flex items-center gap-1 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						{data.type && (
							<span className="px-2 py-0.5 rounded-full">{data.type}</span>
						)}
					</div>
				</div>
			</article>
		</NavLink>
	);
};

export default AnimeCardShowroom;

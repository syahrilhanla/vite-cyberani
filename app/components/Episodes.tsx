import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import {
	TbPlayerTrackNextFilled,
	TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import GoToEpisodeForm from "./GoToEpisodeForm";
import { goToEpisode, nextEpisode, prevEpisode } from "@/lib/anime.slice";

import type { RootState } from "@/lib/anime.store";
import type { AnimeDetail } from "@/types/anime.type";

interface Props {
	animeData: AnimeDetail;
}

const Episodes = ({ animeData }: Props) => {
	const dispatch = useDispatch();
	const { currentEpisode } = useSelector(
		(state: RootState) => state.animeReducer
	);

	const NavButton = () => (
		<div className="flex gap-2 w-full justify-center">
			<button
				className="flex items-center gap-2 px-4 py-2
					bg-inherit
				rounded-lg text-white font-semibold"
				onClick={() => dispatch(prevEpisode())}
			>
				<TbPlayerTrackPrevFilled className="mt-0.5" />
				Prev
			</button>
			<button
				className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold"
				onClick={() => dispatch(nextEpisode())}
			>
				Next
				<TbPlayerTrackNextFilled className="mt-0.5" />
			</button>
		</div>
	);

	return (
		<div className="bg-[#16213e]/70 rounded-2xl shadow-xl py-2 px-3 text-slate-200 lg:h-[85vh] flex flex-col">
			<div className="sticky top-0 z-20 rounded-t-2xl pb-2 mb-2">
				<h1 className="md:text-xl text-lg font-semibold mb-2 text-blue-200 tracking-wide">
					List of Episodes
				</h1>
				<div>
					<GoToEpisodeForm animeData={animeData} />
					<NavButton />
				</div>
				<hr className="border-blue-900/30 my-2" />
			</div>
			<div className="flex-1 overflow-y-auto px-1 custom-scrollbar">
				{animeData.episodes.length > 0 ? (
					<ul className="space-y-2">
						{animeData.episodes.map((episode) => (
							<li
								key={episode.number}
								className="w-full justify-between even:bg-blue-900/10 odd:bg-blue-700/30 flex items-center gap-3 px-2 py-3 text-blue-100 shadow duration-300 group"
								onClick={() => dispatch(goToEpisode(episode.number))}
								title={`Episode ${episode.number} - ${episode.title}`}
							>
								<p className="text-sm w-full flex gap-3">
									<span>{episode.number}</span>
									<span className="line-clamp-1">{episode.title}</span>
								</p>
								{currentEpisode === episode.number && (
									<FaPlay className="text-blue-400 group-hover:text-blue-600 transition duration-200" />
								)}
							</li>
						))}
					</ul>
				) : (
					<div className="flex flex-row gap-2 w-full justify-center rounded-lg bg-blue-900/60 text-blue-200 my-2 py-4">
						<h4 className="text-lg font-normal">No Episode</h4>
					</div>
				)}
			</div>
		</div>
	);
};

export default Episodes;

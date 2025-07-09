import { NavLink } from "react-router";
import { BiLoaderAlt } from "react-icons/bi";
import type { AnimeList } from "@/types/anime.type";

interface Props {
	searchResults: AnimeList[];
	loading: boolean;
}

const DisplayResults = ({ searchResults, loading }: Props) => {
	return (
		<ul className="absolute top-12 left-0 w-full bg-[#0a192f] flex flex-col rounded-lg shadow-lg max-h-80 overflow-y-auto">
			{loading ? (
				<li className="flex w-48 xl:w-72 flex-col items-center justify-center p-4">
					<BiLoaderAlt size={32} color="slate" className="animate-spin" />
				</li>
			) : searchResults.length > 0 ? (
				searchResults.map((result) => (
					<NavLink
						to={`/anime/${result.id}`}
						className="w-full py-2 px-4 hover:bg-[#0f2647]/30 duration-400"
					>
						<li className="flex gap-3" key={result.title}>
							<img
								src={result.image}
								alt={result.title}
								className="rounded-lg object-cover w-16 h-20"
							/>
							<p className="text-xs lg:text-sm text-slate-200 text-left whitespace-normal text-ellipsis max-w-[12rem]">
								{result.title}
							</p>
						</li>
					</NavLink>
				))
			) : (
				<div
					className="grid place-content-center
						place-items-center h-24 w-full p-4"
				>
					<p className="text-slate-200">No Anime Found</p>
				</div>
			)}
		</ul>
	);
};

export default DisplayResults;

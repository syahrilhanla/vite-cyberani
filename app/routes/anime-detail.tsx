import { useSelector } from "react-redux";

import Episodes from "@/components/Episodes";
import AnimeDescription from "@/components/AnimeDescription";
import AnimeCardShowroom from "@/components/AnimeCardShowroom";
import StreamingComponent from "@/components/StreamingComponent";

import { fetchAnimeDetail } from "@/lib/api";

import type { Route } from "./+types/anime-detail";
import type { RootState } from "@/lib/anime.store";

export const loader = async ({ params }: Route.LoaderArgs) => {
	const animeDetail = await fetchAnimeDetail(params.id);
	return { animeDetail };
};

export function meta(loaderData: Route.MetaArgs) {
	return [
		{
			title: `${loaderData.data?.animeDetail.title} - CyberAni`,
		},
		{
			name: "description",
			content: loaderData.data?.animeDetail.description,
		},
	];
}

const AnimeDetailPage = ({ loaderData }: Route.ComponentProps) => {
	const { animeDetail } = loaderData;
	const { currentEpisode } = useSelector(
		(state: RootState) => state.animeReducer
	);

	return (
		<div>
			<div
				className="grid grid-cols-1 xl:grid-cols-[2fr_6fr_3fr] w-full h-auto
				mx-auto px-4 xl:px-6 2xl:px-12 gap-6 md:gap-4 2xl:gap-8"
			>
				<div className="order-1 xl:order-3 col-span-3 xl:col-span-1">
					<AnimeDescription animeData={animeDetail} />
				</div>

				<div className="order-2 xl:order-2 col-span-3 lg:col-span-2 xl:col-span-1">
					<StreamingComponent
						title={`${animeDetail.title} - Episode ${currentEpisode}`}
						episodeDetail={animeDetail.episodes[currentEpisode - 1]}
						synopsis={animeDetail.description}
					/>
				</div>

				<div className="order-3 xl:order-1 col-span-3 lg:col-span-1">
					<Episodes animeData={animeDetail} />
				</div>
			</div>

			<div className="w-fit mx-auto mt-8">
				<h2 className="text-xl mb-4">Recommended Anime</h2>
				<div
					className="mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
				mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
				>
					{animeDetail.recommendations &&
						animeDetail.recommendations.map((data) => (
							<AnimeCardShowroom data={data} key={data.title} />
						))}
				</div>
			</div>
		</div>
	);
};

export default AnimeDetailPage;

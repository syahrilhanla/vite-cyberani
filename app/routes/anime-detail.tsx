import { useSelector } from "react-redux";

import Episodes from "@/components/Episodes";
import AnimeDescription from "@/components/AnimeDescription";
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
		<div
			className="grid grid-cols-1 lg:grid-cols-[2fr_6fr_3fr] w-full h-auto
				mx-auto px-4 lg:px-6 2xl:px-12 gap-6 md:gap-4 2xl:gap-8"
		>
			<div className="order-3 lg:order-1">
				<Episodes animeData={animeDetail} />
			</div>

			<div className="order-1 lg:order-3 md:col-span-2 lg:col-span-1">
				<AnimeDescription animeData={animeDetail} />
			</div>

			<div className="order-2 lg:order-2">
				<StreamingComponent
					title={`${animeDetail.title} - Episode ${currentEpisode}`}
					episodeDetail={animeDetail.episodes[currentEpisode - 1]}
					synopsis={animeDetail.description}
				/>
			</div>
		</div>
	);
};

export default AnimeDetailPage;

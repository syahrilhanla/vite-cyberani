import { fetchAnimeDetail } from "@/lib/api";
import type { Route } from "./+types/anime-detail";
import AnimeDescription from "@/components/AnimeDescription";
import type { AnimeDetail } from "@/types/anime.type";

export const loader = async ({ params }: Route.LoaderArgs) => {
	const animeDetail = await fetchAnimeDetail(params.id);

	return { animeDetail };
};

export function meta(loaderData: Route.MetaArgs) {
	return [
		{
			title: loaderData.data?.animeDetail.title
				? `${loaderData.data?.animeDetail.title} - CyberAni`
				: "Anime Detail - CyberAni",
		},
		{
			name: "description",
			content: loaderData.data?.animeDetail.description,
		},
	];
}

const AnimeDetailPage = ({ loaderData }: Route.ComponentProps) => {
	const { animeDetail }: { animeDetail: AnimeDetail } = loaderData;

	return (
		<div>
			<div
				className="grid grid-cols-1 lg:grid-cols-[2fr_7fr_3fr] w-full h-auto lg:h-[90vh]
					mx-auto px-4 lg:px-14 gap-6 md:gap-8 lg:gap-12 justify-center lg:justify-between"
			>
				<div className="order-1 lg:order-3 md:col-span-2 lg:col-span-1">
					<AnimeDescription animeData={animeDetail} />
				</div>

				{/* <div className="order-2 lg:order-2">
					<VideoComponent
						title={
							animeData.type !== "Movie"
								? `${animeData.title} - Episode ${episode}`
								: `${animeData.title}`
						}
						episodeDetail={episodeDetail}
						synopsis={animeData.description}
					/>
				</div>

				{animeData.type !== "Movie" && (
					<div className="order-3 lg:order-1">
						<Episodes animeData={animeData} currentEpisode={episode} />
					</div>
				)} */}
			</div>
		</div>
	);
};

export default AnimeDetailPage;

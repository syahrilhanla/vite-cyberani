import { fetchAnimeDetail } from "@/lib/api";
import type { Route } from "./+types/anime-detail";

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
	console.log("Loader Data:", loaderData.animeDetail);

	return <div>Anime Detail</div>;
};

export default AnimeDetailPage;

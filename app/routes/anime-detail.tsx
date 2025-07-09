import { fetchAnimeDetail } from "@/lib/api";
import type { Route } from "./+types/anime-detail";

export const clientLoader = async ({ params }: Route.ClientLoaderArgs) => {
	const animeDetail = await fetchAnimeDetail(params.id);

	console.log("Anime Detail:", animeDetail);
	return { animeDetail };
};

const AnimeDetailPage = ({ loaderData }: Route.ComponentProps) => {
	console.log("Loader Data:", loaderData.animeDetail);

	return <div>Anime Detail</div>;
};

export default AnimeDetailPage;

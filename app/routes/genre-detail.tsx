import { fetchAnimeByGenre } from "@/lib/api";

import AnimeCardShowroom from "@/components/AnimeCardShowroom";
import Pagination from "@/components/Pagination";

import type { Route } from "./+types/genre-detail";

// SSR loader function to fetch anime by genre
export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const { genre } = params;
	const page = new URL(request.url).searchParams.get("page") || "1";

	if (!genre) {
		throw new Response("Genre not found", { status: 404 });
	}

	const { results, totalPages } = await fetchAnimeByGenre(
		genre,
		parseInt(page)
	);

	return { animeList: results, totalPages };
};

const GenreDetail = ({ loaderData, params }: Route.ComponentProps) => {
	const { genre } = params;
	const { animeList, totalPages } = loaderData;

	return (
		<div className="xl:max-w-[75%] px-12 lg:px-4 mx-auto my-6">
			<h1 className="w-full text-left text-slate-200 text-3xl font-semibold capitalize">
				{genre}
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:grid-cols-4 gap-4 my-4">
				{animeList &&
					animeList.map((data) => (
						<AnimeCardShowroom data={data} key={data.title} />
					))}
			</div>

			<Pagination totalPages={totalPages} />
		</div>
	);
};

export default GenreDetail;

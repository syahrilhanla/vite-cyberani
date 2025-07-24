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
		<div className="w-full lg:max-w-7xl 2xl:max-w-max mx-auto px-8 md:px-16 py-3 lg:my-6 flex flex-col justify-center items-center">
			<h1 className="w-full text-left text-slate-200 text-3xl font-semibold">
				{genre}
			</h1>
			<div
				className="w-full grid md:gap-8 xl:gap-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5
            mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
			>
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

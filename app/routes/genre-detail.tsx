import { fetchAnimeByGenre } from "@/lib/api";
import type { Route } from "./+types/genre-detail";
import AnimeCardShowroom from "@/components/AnimeCardShowroom";
import Pagination from "@/components/Pagination";

export const loader = async ({ params }: Route.LoaderArgs) => {
	const { genre } = params;

	if (!genre) {
		throw new Response("Genre not found", { status: 404 });
	}

	const { results, totalPages } = await fetchAnimeByGenre(genre);

	return { animeList: results, totalPages };
};

const GenreDetail = ({ loaderData, params }: Route.ComponentProps) => {
	const { genre } = params;
	const { animeList, totalPages } = loaderData;

	return (
		<div className="lg:w-[70%] my-6">
			<div>
				<h1 className="text-left text-slate-200 text-3xl font-semibold capitalize">
					{genre}
				</h1>
			</div>
			<div
				className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4
				mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
			>
				{/* if data results come as series and not as an episode than render AnimeShowroom */}
				{animeList &&
					animeList.map((data) => (
						<AnimeCardShowroom data={data} key={data.title} />
					))}
			</div>

			<Pagination
				currentPage={1}
				setCurrentPage={() => {}}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default GenreDetail;

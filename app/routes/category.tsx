import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import AnimeCardShowroom from "@/components/AnimeCardShowroom";
import AnimeCardSkeleton from "@/components/AnimeCardSkeleton";
import Pagination from "@/components/Pagination";

import { fetchAnimeList } from "@/lib/api";
import { AnimeCategory, APIEndpoint } from "@/enum/anime.enum";

import type { AnimeList } from "@/types/anime.type";

const Category = () => {
	const { category } = useParams();

	const [animeList, setAnimeList] = useState<AnimeList[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(0);

	// TODO:
	// 1. return title and endpoint for each category in pageInfo function
	// 2. update fetchData to use dynamic endpoint

	const pageInfo = (category: string | undefined) => {
		switch (category) {
			case AnimeCategory.POPULAR:
				return {
					title: "Most Popular Anime",
					endpoint: APIEndpoint.MOST_POPULAR,
				};
			case AnimeCategory.LATEST:
				return {
					title: "Recent Episodes",
					endpoint: APIEndpoint.RECENT_EPISODES,
				};
			case AnimeCategory.TRENDING:
				return {
					title: "Top Airing Anime",
					endpoint: APIEndpoint.TOP_AIRING,
				};
			case AnimeCategory.MOVIES:
				return {
					title: "Anime Movies",
					endpoint: APIEndpoint.MOVIES,
				};
			case AnimeCategory.GENRES:
				return {
					title: "Anime Genres",
					endpoint: APIEndpoint.GENRE,
				};
			default:
				return {
                    title: "Top Airing Anime",
                    endpoint: APIEndpoint.TOP_AIRING,
                };
		}
	};

	const fetchData = useCallback(async () => {
		try {
			try {
				const {endpoint} = pageInfo(category);
				const { results, totalPages } = await fetchAnimeList( endpoint  , currentPage
				);

				setAnimeList(results);
				setTotalPages(totalPages);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching anime data:", error);
			}
		} catch (error) {
			console.error("Error fetching anime data:", error);
		} finally {
			setLoading(false);
		}
	}, [category]);

	useEffect(() => {
		fetchData();
	}, [category, currentPage]);

	return (
		<>
			<div className="w-[90%] lg:w-full p-3 my-6 flex flex-col justify-center items-center">
				<div className="lg:w-[70%] ml-3 mb-4">
					<h1 className="text-left text-slate-200 text-3xl font-semibold">
						{pageInfo(category).title}
					</h1>
				</div>
				<div
					className="lg:w-[70%] grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5
            mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
				>
					{loading ? (
						<>
							<div className="flex lg:gap-4 gap-2 justify-center items-center h-64 col-span-5">
								<AnimeCardSkeleton />
							</div>
							<div className="flex lg:gap-4 gap-2 justify-center items-center h-64 col-span-5">
								<AnimeCardSkeleton />
							</div>
						</>
					) : (
						<>
							{animeList.map((anime) => (
								<AnimeCardShowroom key={anime.id} data={anime} />
							))}
						</>
					)}
				</div>

				{!loading && animeList.length === 0 && (
					<div className="text-center text-slate-500">
						No anime found in this category.
					</div>
				)}

				{loading ? null : (
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</>
	);
};

export default Category;

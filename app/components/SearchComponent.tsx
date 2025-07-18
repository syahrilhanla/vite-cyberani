import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounceValue } from "usehooks-ts";
import { useSearchParams } from "react-router";

import DisplayResults from "./DisplayResults";

import { fetchAnimeBySearch } from "@/lib/api";

import type { AnimeList } from "@/types/anime.type";

const SearchComponent = () => {
	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState<AnimeList[]>([]);
	const [loading, setLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const [debouncedSearchText] = useDebounceValue(searchText, 500);

	const searchQuery = searchParams.get("search") || "";

	const fetchData = useCallback(
		async (query: string) => {
			try {
				setLoading(true);
				setSearchParams({ search: debouncedSearchText });

				const results = await fetchAnimeBySearch(query);
				setSearchResults(results);
			} catch (error) {
				console.error("Error fetching search results:", error);
				setSearchResults([]);
			} finally {
				setLoading(false);
			}
		},
		[debouncedSearchText]
	);

	useEffect(() => {
		if (debouncedSearchText.length >= 3) {
			fetchData(debouncedSearchText);
		} else {
			setSearchParams({});
		}
	}, [fetchData, debouncedSearchText]);

	return (
		<div className="relative max-w-md mr-4">
			<div className="flex items-center bg-slate-200 rounded-sm group px-4 py-2 transition-all w-72">
				<input
					type="text"
					placeholder="Search anime..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					onBlur={() => {
						setTimeout(() => {
							setSearchParams({});
						}, 200);
					}}
					onFocus={() => {
						if (searchText.length >= 3) {
							setSearchParams({ search: searchText });
						}
					}}
					className="bg-transparent outline-none text-slate-600 w-full placeholder-slate-500/80"
				/>
				<FaSearch className="text-slate-500/80" />
			</div>

			{searchQuery.length >= 3 && (
				<DisplayResults loading={loading} searchResults={searchResults} />
			)}
		</div>
	);
};

export default SearchComponent;

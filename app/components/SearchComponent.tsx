import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DisplayResults from "./DisplayResults";
import { useDebounceValue } from "usehooks-ts";
import { fetchAnimeBySearch } from "@/lib/api";
import type { AnimeList } from "@/types/anime.type";

const SearchComponent = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<AnimeList[]>([]);
	const [loading, setLoading] = useState(false);

	const [debouncedSearchQuery] = useDebounceValue(searchQuery, 500);

	const fetchData = useCallback(
		async (query: string) => {
			const results = await fetchAnimeBySearch(query);
			setSearchResults(results);
			setLoading(false);
		},
		[debouncedSearchQuery]
	);

	useEffect(() => {
		if (debouncedSearchQuery.length >= 3) {
			fetchData(debouncedSearchQuery);
		}
	}, [fetchData, debouncedSearchQuery]);

	return (
		<div className="relative max-w-md mr-4">
			<div
				className={`flex items-center bg-transparent px-4 py-2 transition-all
				border-b border-slate-600 ${searchQuery ? "w-72" : "w-48 focus-within:w-72"}`}
			>
				<input
					type="text"
					placeholder="Search anime..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="bg-transparent outline-none focus:text-slate-300 text-slate-600 w-full placeholder-slate-400"
				/>
				<FaSearch className="text-slate-400 mr-2" />
			</div>

			{searchQuery.length >= 3 && (
				<DisplayResults
					loading={loading}
					searchResults={searchResults}
					searchQuery={searchQuery}
				/>
			)}
		</div>
	);
};

export default SearchComponent;

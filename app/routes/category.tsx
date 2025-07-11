import { useEffect, useState } from "react";
import { useParams } from "react-router";

import AnimeCardShowroom from "@/components/AnimeCardShowroom";
import AnimeCardSkeleton from "@/components/AnimeCardSkeleton";
import Pagination from "@/components/Pagination";
import { fetchAnimeList } from "@/lib/api";
import type { AnimeList } from "@/types/anime.type";

const Category = () => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const { slug } = useParams();
    const [animeList, setAnimeList] = useState<AnimeList[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [Loading, setLoading] = useState(true);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(animeList.length / itemsPerPage);

    const paginationAnimeList = animeList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const nameCategory = (slug: string | undefined) => {
        switch (slug) {
            case "popular":
                return "Popular Anime";
            case "latest":
                return "Latest Episodes";
            case "trending":
                return "Trending Anime";
            case "movies":
                return "Anime Movies";
            case "genres":
                return "Anime by Genre";
            default:
                return "Anime Category";
        }
    }

    useEffect(() => {
        if (!slug) return;
        setLoading(true);

        if (slug === "genre") {
            fetch(`${BASE_URL}/genre/list`)
                .then((res) => res.json())
                .then((data) => {
                    setAnimeList(data);
                    setLoading(false);
                    setCurrentPage(1);
                })
                .catch(() => setLoading(false));
        } else {
            fetchAnimeList(slug)
                .then((data) => {
                    setAnimeList(data);
                    setLoading(false);
                    setCurrentPage(1);
                })
                .catch(() => setLoading(false));
        }
    }, [slug]);

    return (
        <>
            <div className="w-[90%] lg:w-full p-3 my-6 flex flex-col justify-center items-center">
                <div className="lg:w-[70%] ml-3 mb-4">
                    <h1 className="text-left text-slate-200 text-3xl font-semibold">{nameCategory(slug)}</h1>
                </div>
                <div
                    className="lg:w-[70%] grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5
     mt-2 mb-4 text-left font-medium text-slate-100 pb-2"
                >
                    {Loading ? (
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
                            {paginationAnimeList.map((anime) => (
                                <AnimeCardShowroom key={anime.id} data={anime} />
                            ))}
                        </>
                    )}
                </div>

                {paginationAnimeList.length > 0 && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}

                {!Loading && paginationAnimeList.length === 0 && <div className="text-center text-slate-500">No anime found in this category.</div>}
            </div>
        </>
    );
};

export default Category;

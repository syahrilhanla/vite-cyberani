import AnimeRow from "@/components/AnimeRow";

export default function Home() {
	return (
		<>
			<AnimeRow
				rowTitle={"Top Anime"}
				category={"most-popular"}
				animeType={"title"}
				toPage={"popular"}
				key={"popular"}
			/>

			<AnimeRow
				rowTitle={"Recent Episodes"}
				category={"recent-episodes"}
				animeType={"title"}
				toPage={"latest"}
				key={"latest"}
			/>

			<AnimeRow
				rowTitle={"Top Airing"}
				category={"top-airing"}
				animeType={"title"}
				toPage={"trending"}
				key={"trending"}
			/>

			<AnimeRow
				rowTitle={"Anime Movies"}
				category={"anime-movies"}
				animeType={"title"}
				toPage={"movies"}
				key={"movies"}
			/>
		</>
	);
}

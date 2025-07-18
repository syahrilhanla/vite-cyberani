import AnimeRow from "@/components/AnimeRow";
import SuggestionHero from "@/components/SuggestionHero";
import { APIEndpoint } from "@/enum/anime.enum";

export default function Home() {
	return (
		<>
			<SuggestionHero />

			<AnimeRow
				rowTitle={"Top Anime"}
				category={APIEndpoint.MOST_POPULAR}
				toPage={"popular"}
				key={"popular"}
			/>

			<AnimeRow
				rowTitle={"Recent Episodes"}
				category={APIEndpoint.RECENT_EPISODES}
				toPage={"latest"}
				key={"latest"}
			/>

			<AnimeRow
				rowTitle={"Top Airing"}
				category={APIEndpoint.TOP_AIRING}
				toPage={"trending"}
				key={"trending"}
			/>

			<AnimeRow
				rowTitle={"Anime Movies"}
				category={APIEndpoint.MOVIES}
				toPage={"movies"}
				key={"movies"}
			/>
		</>
	);
}

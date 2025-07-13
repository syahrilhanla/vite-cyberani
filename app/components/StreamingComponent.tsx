import type { AnimeEpisode } from "@/types/anime.type";
import { useEffect, useState } from "react";

interface Props {
	title: string;
	episodeDetail: AnimeEpisode;
	synopsis?: string;
}

const StreamingComponent = ({ title, episodeDetail, synopsis }: Props) => {
	const [episodeURL, setEpisodeURL] = useState("");

	const setStreamURL = async () => {
		const seriesId = episodeDetail?.id?.split("$")?.[0];
		const episodeId = episodeDetail?.id?.split("$")?.[2];

		setEpisodeURL(
			`https://streamx2.top/vidcloud.php?id=${seriesId}?ep=${episodeId}`
		);

		// format:
		// https://streamx2.top/vidcloud.php?id=sakamoto-days-19431?ep=131797
	};

	useEffect(() => {
		episodeDetail && setStreamURL();
	}, [episodeDetail]);

	const [showFullSynopsis, setShowFullSynopsis] = useState(false);

	return (
		<div
			id="streaming-component"
			className="lg:min-h-[360px] mb-12 lg:mb-0 max-w-full lg:max-w-[55dvw] aspect-auto lg:aspect-video"
		>
			<section className="flex flex-col gap-0.5 mb-4">
				<h1 className="text-xl font-semibold text-slate-200">{title}</h1>
				<h2 className="text-slate-400 text-base">{episodeDetail.title}</h2>
			</section>

			{episodeURL ? (
				<iframe
					allowFullScreen={true}
					allow="autoplay; encrypted-media; allowFullScreen"
					width="100%"
					height="100%"
					className="rounded-lg overflow-hidden"
					src={episodeURL}
				></iframe>
			) : (
				<div
					className="h-[80%] lg:h-full lg:w-full bg-slate-500 rounded-lg
				 text-slate-200 grid place-items-center"
				>
					<h2>Sorry, episode is not available.</h2>
				</div>
			)}
			<div className="text-slate-200 mt-4 overflow-auto h-[35vh] leading-relaxed lg:block hidden">
				<h2 className="text-xl font-medium">Synopsis:</h2>
				<p
					className={`text-sm font-light ${
						showFullSynopsis ? "" : "line-clamp-3"
					}`}
				>
					{synopsis}
				</p>
				{synopsis && synopsis.length > 0 && (
					<button
						className="text-sm text-slate-200 mt-1 hover:underline focus:outline-none"
						onClick={() => setShowFullSynopsis((prev) => !prev)}
					>
						{showFullSynopsis ? "Show less" : "Read more"}
					</button>
				)}
			</div>
		</div>
	);
};

export default StreamingComponent;

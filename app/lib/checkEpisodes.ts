import type { AnimeDetail } from "@/types/anime.type";

const checkEpisode = (episodeInput: number | null, animeData: AnimeDetail) => {
  let episodesList: number[] = [];
  let errorMessage = "";

  if (animeData) {
    episodesList = animeData.episodes?.map((episode) => episode.number);
  }
  // check if there's the episode user looking for
  if (episodesList?.length > 0) {
    // if not found then set error message
    if (episodeInput) {
      if (!episodesList.find((episodeIndex) => episodeIndex == episodeInput)) {
        errorMessage = "Episode Not Found!";
      }
    }
  }
  return { errorMessage };
};

export default checkEpisode;

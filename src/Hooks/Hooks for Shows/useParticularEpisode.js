import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addEpisodeInfo } from "../../utils/TVShowsSlice";

const useParticularEpisode = (series_id, season_num, episode_num) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!series_id || !season_num || !episode_num) return;
    fetchData();
  }, [series_id, season_num, episode_num]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/season/${season_num}/episode/${episode_num}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    dispatch(addEpisodeInfo(data?.results));
  };

  return null;
};

export default useParticularEpisode;

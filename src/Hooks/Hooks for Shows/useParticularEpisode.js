import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addEpisodeInfo } from "../../utils/TVShowsSlice";

const useParticularEpisode = (series_id, season_num, episode_num) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!series_id || !season_num || !episode_num) return;
    fetchData();
  }, [series_id, season_num, episode_num]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${series_id}/season/${season_num}/episode/${episode_num}/videos?language=en-US`,
        API_OPTIONS
      );

      const data = await res.json();

      dispatch(addEpisodeInfo(data?.results));
    } catch (error) {
      console.error("Failed to fetch episode info", error);
    } finally {
      setLoading(false);
    }
  };

  return loading;
};

export default useParticularEpisode;

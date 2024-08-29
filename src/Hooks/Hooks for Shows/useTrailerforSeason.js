import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSeasonTrailer } from "../../utils/TVShowsSlice";

const useTrailerforSeason = (series_id, season_num) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!series_id || !season_num) return;
    fetchData();
  }, [series_id, season_num]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/season/${season_num}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await res.json();
    const results = json?.results || [];
    console.log(results);

    const filterlist = results?.filter(
      (res) =>
        res?.type === "Recap" ||
        res?.type === "Behind the Scenes" ||
        res?.type === "Clip" ||
        res?.type === "Trailer"
    );

    const trailer = filterlist.length > 0 ? filterlist[0] : results[0];

    dispatch(addSeasonTrailer(trailer));
  };

  return null;
};

export default useTrailerforSeason;

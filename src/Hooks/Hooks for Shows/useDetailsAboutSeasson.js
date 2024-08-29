import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSeasonDetails } from "../../utils/TVShowsSlice";

const useDetailsAboutSeasson = (series_id, season_num) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!series_id || !season_num) return;
    fetchData();
  }, [series_id, season_num]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/season/${season_num}?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    dispatch(addSeasonDetails(data));
  };

  return null;
};

export default useDetailsAboutSeasson;

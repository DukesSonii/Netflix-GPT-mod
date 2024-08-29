import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSeasonDetails, addSeasonImages } from "../../utils/TVShowsSlice";

const useImageForSeasons = (series_id, season_num) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!series_id || !season_num) return;
    fetchData();
  }, [series_id, season_num]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${series_id}/season/${season_num}/images`,
      API_OPTIONS
    );

    const data = await res.json();

    dispatch(addSeasonImages(data?.posters));
  };

  return null;
};

export default useImageForSeasons;

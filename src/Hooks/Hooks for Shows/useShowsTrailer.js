import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addShowsTrailer } from "../../utils/TVShowsSlice";

const useShowsTrailer = (showId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showId) return;
    getShowTrailer();
  }, [showId]);

  const getShowTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await response.json();

      const results = json?.results || [];

      const filterlist = results.filter((mov) => mov.type === "Trailer");

      const trailer = filterlist.length ? filterlist[0] : results[1];
      dispatch(addShowsTrailer(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };
};

export default useShowsTrailer;

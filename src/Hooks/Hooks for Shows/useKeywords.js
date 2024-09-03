import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addKeywords } from "../../utils/TVShowsSlice";

const useKeywords = (seriesId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!seriesId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${seriesId}/keywords`,
          API_OPTIONS
        );

        const data = await res.json();

        dispatch(addKeywords(data?.results));
      } catch (error) {
        console.error("Failed to fetch movie images:", error);
      }
    };

    fetchData();
  }, [seriesId, dispatch]);
};

export default useKeywords;

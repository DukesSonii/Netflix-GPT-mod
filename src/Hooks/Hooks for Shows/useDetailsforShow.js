import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addDetailsAbtShow } from "../../utils/TVShowsSlice";

const useDetailsforShow = (showId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showId) return;
    fetchData();
  }, [showId]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${showId}?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();
    dispatch(addDetailsAbtShow(data));
  };
  return <div>useMovieGenres</div>;
};

export default useDetailsforShow;

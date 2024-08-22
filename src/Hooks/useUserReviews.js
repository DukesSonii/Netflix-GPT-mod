import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUserReviews } from "../utils/movieSlice";

const useUserReviews = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    fetchReviews();
  }, [movieId, dispatch]);

  const fetchReviews = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addUserReviews(data?.results));
  };
};

export default useUserReviews;

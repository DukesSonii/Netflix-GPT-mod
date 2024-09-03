import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUserReviewsforSeason } from "../../utils/TVShowsSlice";

const useUserReviewsforShows = (seriesId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!seriesId) return;
    fetchReviews();
  }, [seriesId, dispatch]);

  const fetchReviews = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${seriesId}/reviews?language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addUserReviewsforSeason(data?.results));
  };
};

export default useUserReviewsforShows;
